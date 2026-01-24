import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X, Upload, LayoutDashboard, Database, Cpu } from 'lucide-react';

const AdminPage = () => {
    const [apps, setApps] = useState([]);
    const [isEditing, setIsEditing] = useState(null);
    const [formData, setFormData] = useState({
        title: '', desc: '', price: '', category: '', image: '', features: []
    });

    useEffect(() => {
        const storedApps = localStorage.getItem('ican_apps');
        if (storedApps) setApps(JSON.parse(storedApps));
    }, []);

    const saveToLocal = (newApps) => {
        setApps(newApps);
        localStorage.setItem('ican_apps', JSON.stringify(newApps));
    };

    const handleEdit = (app) => {
        setIsEditing(app.id);
        setFormData(app);
    };

    const handleDelete = (id) => {
        if (window.confirm('정말 이 앱을 삭제하시겠습니까?')) {
            const filtered = apps.filter(a => a.id !== id);
            saveToLocal(filtered);
        }
    };

    const handleAddNew = () => {
        setIsEditing('new');
        setFormData({
            title: '', desc: '', price: '', category: 'Design',
            image: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=600',
            features: []
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing === 'new') {
            const newApp = { ...formData, id: Date.now() };
            saveToLocal([...apps, newApp]);
        } else {
            const updated = apps.map(a => a.id === isEditing ? formData : a);
            saveToLocal(updated);
        }
        setIsEditing(null);
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
                <button
                    onClick={handleAddNew}
                    className="btn-primary flex items-center space-x-2 group"
                >
                    <Plus size={20} />
                    <span>New AI Engine</span>
                </button>
            </div>

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
                                </div>

                                <button type="submit" className="btn-primary w-full py-5 text-lg"><Save size={20} className="inline-block mr-2" /><span>{isEditing === 'new' ? 'Initialize' : 'Commit Changes'}</span></button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPage;
