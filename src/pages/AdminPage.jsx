import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X, Upload, LayoutDashboard, Database, Cpu, MessageSquare, Mail, CheckCircle, BookmarkCheck, Info, Package } from 'lucide-react';
import { useToast } from '../components/ToastContext';
import { supabase } from '../utils/supabaseClient';

const AdminPage = () => {
    const [apps, setApps] = useState([]);
    const [inquiries, setInquiries] = useState([]);
    const [activeTab, setActiveTab] = useState('portfolio');
    const { showToast } = useToast();

    const [isEditing, setIsEditing] = useState(null);
    const [formData, setFormData] = useState({
        title: '', desc: '', price: '', category: 'Design', image: '', features: [], link: '', linkType: 'external'
    });
    const [hasLegacyData, setHasLegacyData] = useState(false);

    useEffect(() => {
        const legacyApps = localStorage.getItem('ican_apps');
        const legacyInquiries = localStorage.getItem('ican_inquiries');
        if (legacyApps || legacyInquiries) {
            setHasLegacyData(true);
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: appsData, error: appsError } = await supabase
                    .from('apps')
                    .select('*')
                    .order('created_at', { ascending: false });
                if (appsError) throw appsError;
                setApps(appsData || []);

                const { data: inquiriesData, error: inquiriesError } = await supabase
                    .from('inquiries')
                    .select('*')
                    .order('date', { ascending: false });
                if (inquiriesError) throw inquiriesError;
                setInquiries(inquiriesData || []);
            } catch (err) {
                console.error('Error fetching data:', err);
                showToast('데이터를 불러오는데 실패했습니다.', 'error');
            }
        };

        fetchData();
    }, []);

    const deleteInquiry = async (id) => {
        if (window.confirm('이 의뢰 리포트를 삭제하시겠습니까?')) {
            try {
                const { error } = await supabase.from('inquiries').delete().eq('id', id);
                if (error) throw error;
                setInquiries(inquiries.filter(i => i.id !== id));
                showToast('삭제되었습니다.', 'success');
            } catch (err) {
                console.error('Delete error:', err);
                showToast('삭제 실패했습니다.', 'error');
            }
        }
    };

    const updateInquiryStatus = async (id, newStatus) => {
        try {
            const { error } = await supabase.from('inquiries').update({ status: newStatus }).eq('id', id);
            if (error) throw error;
            setInquiries(inquiries.map(i => i.id === id ? { ...i, status: newStatus } : i));
            showToast('문의 상태가 성공적으로 저장되었습니다.', 'success');
        } catch (err) {
            console.error('Update error:', err);
            showToast('상태 업데이트 실패.', 'error');
        }
    };

    const handleMigration = async () => {
        if (!window.confirm('기존 브라우저(LocalStorage)의 데이터를 서버(Supabase)로 이관하시겠습니까? 중복 데이터가 생성될 수 있습니다.')) return;

        try {
            const legacyApps = JSON.parse(localStorage.getItem('ican_apps') || '[]');
            const legacyInquiries = JSON.parse(localStorage.getItem('ican_inquiries') || '[]');

            if (legacyApps.length > 0) {
                const appsToInsert = legacyApps.map(({ id, ...rest }) => ({
                    title: rest.title,
                    desc: rest.desc,
                    price: rest.price,
                    category: rest.category,
                    image: rest.image,
                    link: rest.link,
                    linkType: rest.linkType,
                    features: rest.features || []
                }));
                const { error: appErr } = await supabase.from('apps').insert(appsToInsert);
                if (appErr) throw appErr;
            }

            if (legacyInquiries.length > 0) {
                const inquiriesToInsert = legacyInquiries.map(({ id, ...rest }) => ({
                    name: rest.name,
                    email: rest.email,
                    phone: rest.phone,
                    message: rest.message,
                    type: rest.type || 'Inquiry',
                    package: rest.package,
                    consultingNeeded: rest.consultingNeeded,
                    aiFeatures: rest.aiFeatures,
                    projectType: rest.projectType,
                    productName: rest.productName,
                    price: rest.price,
                    date: rest.date,
                    status: rest.status || 'Pending'
                }));
                const { error: inqErr } = await supabase.from('inquiries').insert(inquiriesToInsert);
                if (inqErr) throw inqErr;
            }

            showToast('데이터 이관이 완료되었습니다! 페이지를 새로고침합니다.', 'success');
            localStorage.removeItem('ican_apps');
            localStorage.removeItem('ican_inquiries');
            setTimeout(() => window.location.reload(), 2000);
        } catch (err) {
            console.error('Migration error:', err);
            showToast('이관 중 오류가 발생했습니다.', 'error');
        }
    };

    const handleEdit = (app) => {

        setIsEditing(app.id);
        setFormData(app);
    };

    const handleDelete = async (id) => {
        if (window.confirm('정말 이 앱을 삭제하시겠습니까?')) {
            try {
                const { error } = await supabase.from('apps').delete().eq('id', id);
                if (error) throw error;
                setApps(apps.filter(a => a.id !== id));
                showToast('삭제되었습니다.', 'success');
            } catch (err) {
                console.error('App delete error:', err);
                showToast('삭제 실패했습니다.', 'error');
            }
        }
    };

    const handleAddNew = () => {
        setIsEditing('new');
        setFormData({
            title: '', desc: '', price: '', category: 'Design',
            image: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=600',
            features: [],
            link: '',
            linkType: 'external'
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing === 'new') {
                const { data, error } = await supabase.from('apps').insert([{ ...formData }]).select();
                if (error) throw error;
                setApps([...apps, data[0]]);
                showToast('성공적으로 등록되었습니다.', 'success');
            } else {
                const { data, error } = await supabase.from('apps').update(formData).eq('id', isEditing).select();
                if (error) throw error;
                setApps(apps.map(a => a.id === isEditing ? data[0] : a));
                showToast('성공적으로 수정되었습니다.', 'success');
            }
            setIsEditing(null);
        } catch (err) {
            console.error('Submit error:', err);
            showToast('저장 중 오류가 발생했습니다.', 'error');
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setFormData({ ...formData, image: reader.result });
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container mx-auto px-6 py-20 min-h-screen">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                <div className="flex items-center space-x-6">
                    <div className="p-4 bg-primary/10 border border-primary/30 text-primary rounded-2xl shadow-[0_0_30px_rgba(0,224,255,0.1)]">
                        <LayoutDashboard size={32} />
                    </div>
                    <div>
                        <h1 className="text-4xl font-black tracking-tight">System Control</h1>
                        <p className="text-white/40 font-bold uppercase tracking-widest text-xs mt-1">포트폴리오 실시간 관리 센터</p>
                    </div>
                </div>
                <div className="flex bg-white/5 p-1 rounded-2xl border border-white/5">
                    <button
                        onClick={() => setActiveTab('portfolio')}
                        className={`px-6 py-3 rounded-xl text-sm font-black transition-all ${activeTab === 'portfolio' ? 'bg-primary text-black' : 'text-white/40 hover:text-white'}`}
                    >
                        Portfolio
                    </button>
                    <button
                        onClick={() => setActiveTab('inquiries')}
                        className={`px-6 py-3 rounded-xl text-sm font-black transition-all relative ${activeTab === 'inquiries' ? 'bg-primary text-black' : 'text-white/40 hover:text-white'}`}
                    >
                        Inquiry Feed
                        {inquiries.filter(i => i.status !== 'Archived').length > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-[#05060b]"></span>}
                    </button>
                    <button
                        onClick={() => setActiveTab('saved')}
                        className={`px-6 py-3 rounded-xl text-sm font-black transition-all relative ${activeTab === 'saved' ? 'bg-primary text-black' : 'text-white/40 hover:text-white'}`}
                    >
                        Saved Feed
                        {inquiries.filter(i => i.status === 'Archived').length > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-green-400 rounded-full border border-[#05060b]"></span>}
                    </button>
                </div>
                {activeTab === 'portfolio' && (
                    <button
                        onClick={handleAddNew}
                        className="btn-primary flex items-center space-x-2 group"
                    >
                        <Plus size={20} />
                        <span>New AI Engine</span>
                    </button>
                )}
            </div>

            {hasLegacyData && (
                <div className="mb-12 p-6 glass-card border-primary/30 bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-6 animate-pulse">
                    <div className="flex items-center gap-4 text-primary">
                        <Database size={24} />
                        <div>
                            <p className="font-black">기존 데이터(LocalStorage)가 발견되었습니다!</p>
                            <p className="text-xs text-white/50">현재 브라우저에 저장된 프로젝트와 문의 내역을 전체 기기에서 볼 수 있도록 서버로 옮길 수 있습니다.</p>
                        </div>
                    </div>
                    <button
                        onClick={handleMigration}
                        className="btn-primary !py-2 !px-6 text-xs whitespace-nowrap"
                    >
                        데이터 서버로 이관하기
                    </button>
                </div>
            )}

            {activeTab === 'portfolio' ? (
                <div className="grid lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-8 space-y-4">
                        {apps.map((app) => (
                            <div key={app.id} className="glass-card p-6 flex items-center gap-8 group hover:border-primary/20 transition-all">
                                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border border-white/5">
                                    <img src={app.image} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-grow space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-black text-primary px-2 py-0.5 bg-primary/10 border border-primary/20 rounded-full uppercase tracking-widest">{app.category}</span>
                                        <h3 className="font-bold text-xl">{app.title}</h3>
                                    </div>
                                    <p className="text-white/40 text-sm line-clamp-1">{app.desc}</p>
                                    <p className="text-primary font-black text-lg">₩{app.price}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={() => handleEdit(app)} className="p-3 text-white/50 hover:text-primary bg-white/5 rounded-xl border border-white/5 hover:border-primary/20 transition-all"><Edit2 size={18} /></button>
                                    <button onClick={() => handleDelete(app.id)} className="p-3 text-white/30 hover:text-red-500 bg-white/5 rounded-xl border border-white/5 hover:border-red-500/20 transition-all"><Trash2 size={18} /></button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {isEditing && (
                        <div className="lg:col-span-4 transition-all animate-in fade-in slide-in-from-right duration-500">
                            <div className="sticky top-32 glass-card p-10 border border-primary/20">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-2xl font-black">{isEditing === 'new' ? 'New Entry' : 'Update Core'}</h2>
                                    <button onClick={() => setIsEditing(null)} className="p-2 text-white/30 hover:text-white transition-colors"><X size={24} /></button>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-2">Visual Core (Image)</label>
                                        <div className="relative group cursor-pointer border-2 border-dashed border-white/10 rounded-3xl p-4 hover:border-primary/50 transition-all text-center overflow-hidden">
                                            {formData.image ? (
                                                <img src={formData.image} className="w-full h-32 object-cover rounded-2xl mb-2 opacity-80 group-hover:opacity-100" alt="Preview" />
                                            ) : (
                                                <div className="py-8"><Upload className="mx-auto text-white/20 mb-2" size={32} /></div>
                                            )}
                                            <input type="file" accept="image/*" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <input type="text" required placeholder="Project Name" className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-white font-bold" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
                                        <select className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-white/70 font-bold" value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })}>
                                            {['Design', 'Writing', 'Media', 'Security'].map(c => <option key={c} value={c}>{c}</option>)}
                                        </select>
                                        <textarea placeholder="Technical Specification..." rows="3" className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-white font-medium" value={formData.desc} onChange={e => setFormData({ ...formData, desc: e.target.value })} />
                                        <input type="text" placeholder="License Fee (e.g. 150,000)" className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-primary font-black uppercase tracking-widest" value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} />

                                        <div className="grid grid-cols-3 gap-2">
                                            <select
                                                className="col-span-1 p-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-white/70 font-bold text-xs"
                                                value={formData.linkType}
                                                onChange={e => setFormData({ ...formData, linkType: e.target.value })}
                                            >
                                                <option value="external">홈페이지(Link)</option>
                                                <option value="internal">상세페이지(App)</option>
                                            </select>
                                            <input
                                                type="text"
                                                placeholder={formData.linkType === 'external' ? "www.kbsmoon.com" : "/detail/1"}
                                                className="col-span-2 p-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-white font-medium text-sm"
                                                value={formData.link}
                                                onChange={e => setFormData({ ...formData, link: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <button type="submit" className="btn-primary w-full py-5 text-lg"><Save size={20} className="inline-block mr-2" /><span>{isEditing === 'new' ? 'Initialize' : 'Commit Changes'}</span></button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-700">
                    <div className="flex items-center justify-between mb-2 px-2">
                        <h2 className="text-xl font-black flex items-center gap-2">
                            {activeTab === 'saved' ? <BookmarkCheck className="text-green-400" /> : <MessageSquare className="text-primary" />}
                            {activeTab === 'saved' ? 'Saved & Processed' : 'Recent Inquiries'}
                        </h2>
                        <div className="text-[10px] font-black text-white/20 uppercase tracking-widest flex items-center gap-2">
                            <Info size={12} />
                            데이터는 브라우저 보안 영역(LocalStorage)에 로컬 저장됩니다.
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        {inquiries.filter(i => activeTab === 'saved' ? i.status === 'Archived' : i.status !== 'Archived').length === 0 ? (
                            <div className="glass-card p-20 text-center space-y-4">
                                {activeTab === 'saved' ? <BookmarkCheck size={48} className="mx-auto text-white/10" /> : <MessageSquare size={48} className="mx-auto text-white/10" />}
                                <p className="text-white/40 font-bold uppercase tracking-widest">
                                    {activeTab === 'saved' ? '저장된 의뢰가 없습니다.' : '새로운 의뢰가 없습니다.'}
                                </p>
                            </div>
                        ) : (
                            inquiries
                                .filter(i => activeTab === 'saved' ? i.status === 'Archived' : i.status !== 'Archived')
                                .map((inquiry) => (
                                    <div key={inquiry.id} className="glass-card p-8 md:p-10 border border-white/5 hover:border-primary/20 transition-all">
                                        <div className="flex flex-col md:flex-row justify-between gap-8">
                                            <div className="space-y-6 flex-grow">
                                                <div className="flex flex-wrap items-center gap-4">
                                                    <span className="text-[10px] font-black text-white/40 p-2 bg-white/5 border border-white/10 rounded-lg uppercase tracking-widest">{inquiry.date}</span>
                                                    {inquiry.type === 'Purchase' ? (
                                                        <span className="text-[10px] font-black bg-primary/20 border border-primary/40 text-primary p-2 rounded-lg uppercase tracking-[0.15em] flex items-center gap-2 animate-pulse shadow-glow-sm">
                                                            <Package size={12} /> Product Purchase
                                                        </span>
                                                    ) : (
                                                        <span className={`text-[10px] font-black p-2 rounded-lg uppercase tracking-widest border ${inquiry.package === 'Enterprise' ? 'bg-red-500/10 border-red-500/20 text-red-500' :
                                                            inquiry.package === 'Premium' ? 'bg-primary/10 border-primary/20 text-primary' : 'bg-white/10 border-white/20 text-white/60'
                                                            }`}>
                                                            {inquiry.package} Package
                                                        </span>
                                                    )}
                                                    {inquiry.consultingNeeded && (
                                                        <span className="text-[10px] font-black bg-purple-500/10 border border-purple-500/20 text-purple-400 p-2 rounded-lg uppercase tracking-widest">BM Consulting Required</span>
                                                    )}
                                                    {inquiry.status === 'Archived' && (
                                                        <span className="text-[10px] font-black bg-green-500/10 border border-green-500/20 text-green-400 p-2 rounded-lg uppercase tracking-widest flex items-center gap-1">
                                                            <CheckCircle size={10} /> Saved & Processed
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-10">
                                                    <div className="space-y-4">
                                                        <h3 className="text-2xl font-black">
                                                            {inquiry.name}
                                                            <button
                                                                onClick={() => window.open(`mailto:${inquiry.email}`)}
                                                                className="text-white/20 font-light text-sm ml-2 hover:text-primary transition-colors flex items-center gap-1 inline-flex"
                                                            >
                                                                {inquiry.email} <Mail size={14} />
                                                            </button>
                                                        </h3>
                                                        <p className="text-white/60 text-sm leading-relaxed">{inquiry.message || "추가 상세 내용이 없습니다."}</p>
                                                    </div>
                                                    <div className="space-y-4">
                                                        <div className="flex flex-col gap-2">
                                                            <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">
                                                                {inquiry.type === 'Purchase' ? "Customer Contact" : "Selected AI Features"}
                                                            </span>
                                                            {inquiry.type === 'Purchase' ? (
                                                                <span className="text-sm font-bold text-primary">{inquiry.phone || "No Phone Info"}</span>
                                                            ) : (
                                                                <div className="flex flex-wrap gap-2">
                                                                    {inquiry.aiFeatures.length > 0 ? inquiry.aiFeatures.map(f => (
                                                                        <span key={f} className="text-[10px] font-bold text-primary/80 bg-primary/5 px-2 py-1 rounded border border-primary/10 uppercase tracking-tighter">{f}</span>
                                                                    )) : <span className="text-[10px] text-white/20">None</span>}
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="flex flex-col gap-1">
                                                            <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">
                                                                {inquiry.type === 'Purchase' ? "Ordered Product" : "Project Goal"}
                                                            </span>
                                                            <span className="text-sm font-bold text-white/80">
                                                                {inquiry.type === 'Purchase' ? `${inquiry.productName} (₩${inquiry.price})` : (inquiry.projectType || "General")}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex md:flex-col gap-3 justify-end items-start">
                                                <button
                                                    onClick={() => updateInquiryStatus(inquiry.id, inquiry.status === 'Archived' ? 'Pending' : 'Archived')}
                                                    className={`p-4 rounded-2xl transition-all shadow-glow-sm ${inquiry.status === 'Archived'
                                                        ? 'bg-green-500 text-white'
                                                        : 'bg-primary text-black hover:scale-105'
                                                        }`}
                                                    title={inquiry.status === 'Archived' ? "저장 취소" : "데이터 저장"}
                                                >
                                                    <Save size={20} />
                                                </button>
                                                <button
                                                    onClick={() => deleteInquiry(inquiry.id)}
                                                    className="p-4 bg-red-500/10 text-red-500 border border-red-500/20 rounded-2xl hover:bg-red-500 hover:text-white transition-all"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPage;
