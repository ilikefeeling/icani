import { useState, useEffect } from 'react';
import { ArrowRight, User, Globe, MessageSquare, Cpu, Sparkles, LayoutGrid, Search, Filter, Info, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '../components/ToastContext';

const INITIAL_APPS = [
    {
        id: 1,
        title: "AI 이미지 마스터",
        desc: "텍스트만으로 고퀄리티 마케팅 이미지를 자동 생성하는 솔루션입니다.",
        price: "150,000",
        category: "Design",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=600",
    },
    {
        id: 2,
        title: "뉴럴 컨텐츠 라이터",
        desc: "블로그, SNS, 보도자료를 1분 만에 초안부터 완성본까지 작성합니다.",
        price: "89,000",
        category: "Writing",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
    },
    {
        id: 3,
        title: "보이스 시뮬레이터 Pro",
        desc: "실제 사람과 구분하기 힘든 자연스러운 AI 음성 합성 및 더빙 기술.",
        price: "120,000",
        category: "Media",
        image: "https://images.unsplash.com/photo-1589149098258-3e9102ca63d3?auto=format&fit=crop&q=80&w=600",
    }
];

const LandingPage = () => {
    const { showToast } = useToast();
    const [apps, setApps] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        const storedApps = localStorage.getItem('ican_apps');
        if (storedApps) {
            setApps(JSON.parse(storedApps));
        } else {
            setApps(INITIAL_APPS);
            localStorage.setItem('ican_apps', JSON.stringify(INITIAL_APPS));
        }
    }, []);

    const filteredApps = apps.filter(app => {
        const matchesSearch = app.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const features = [
        {
            icon: <User className="text-primary w-8 h-8" />,
            title: "프리미엄 AI 포트폴리오",
            desc: "엄선된 최고의 애플리케이션들을 통해 탐색 시간(Time)을 절약하세요.",
        },
        {
            icon: <Globe className="text-primary w-8 h-8" />,
            title: "신뢰할 수 있는 라이선스",
            desc: "경험 넘치는 솔루션을 직접 선택하고 성공적인 비즈니스를 위주로 구축해 드립니다.",
        },
        {
            icon: <LayoutGrid className="text-primary w-8 h-8" />,
            title: "즉각적인 도입",
            desc: "구매 즉시 비즈니스 적용이 가능하여 물리적 노력을 최소화합니다.",
        }
    ];

    return (
        <div className="bg-[#05060b] min-h-screen font-sans selection:bg-primary/30">
            {/* Hero Section (Attachment 1 Style) */}
            <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
                <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
                    {/* Background Abstract Pattern (Like in Image 1) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1000px] -z-10 pointer-events-none">
                        <div className="absolute inset-0 bg-mesh opacity-30"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px] opacity-40 animate-pulse"></div>
                        {/* Moving dots/grid like neural network */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,224,255,0.05)_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
                    </div>

                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
                        <div className="space-y-6">
                            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-bold text-primary tracking-tighter hover:bg-white/10 transition-colors cursor-pointer" onClick={() => showToast('신규 서비스 런칭 중입니다!')}>
                                <Sparkles size={14} />
                                <span>차세대 AI 비즈니스 통합 플랫폼 오픈!</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white max-w-5xl mx-auto">
                                당신의 비즈니스를 <br />
                                <span className="text-glow text-primary">AI와 연결하세요</span>
                            </h1>

                            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-medium">
                                icanagi는 독창적인 AI 앱 포트폴리오를 전시하고, <br />
                                성공적인 거래를 위한 최적의 비즈니스 허브입니다.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a href="#portfolio" className="btn-primary w-full sm:w-auto px-12 py-4">
                                포트폴리오 보러가기
                            </a>
                            <Link to="/inquiry" className="btn-secondary w-full sm:w-auto px-12 py-4 text-center">
                                문의하기
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Section (Why icanagi?) */}
            <section className="py-32 bg-mesh">
                <div className="container mx-auto px-6">
                    <div className="mb-20 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-black">왜 icanagi인가요?</h2>
                        <p className="text-white/50 font-medium">성공적인 AI 시스템 구축을 위해 우리와 함께하세요.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        {features.map((f, i) => (
                            <div key={i} className="glass-card p-12 group hover:border-primary/50 transition-all duration-700 bg-white/[0.02] border-white/10 text-center relative overflow-hidden">
                                <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center mb-10 border border-white/10 mx-auto group-hover:bg-primary/20 group-hover:border-primary/40 transition-all shadow-xl">
                                    {f.icon}
                                </div>
                                <h3 className="text-2xl font-black mb-6 tracking-tight">{f.title}</h3>
                                <p className="text-white/40 leading-relaxed font-medium text-base">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section Integrated */}
            <section id="portfolio" className="py-32 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-widest">
                                <Cpu size={14} />
                                <span>AI App Portfolio</span>
                            </div>
                            <h2 className="text-4xl font-black tracking-tight">AI 앱 포트폴리오</h2>
                            <p className="text-white/50 text-lg font-medium">최첨단 AI 기술이 담긴 앱들을 둘러보고 비즈니스에 도입해보세요.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <div className="relative group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-primary transition-colors" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search Apps..."
                                    className="pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all w-full sm:w-72 font-medium"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            <div className="relative">
                                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                                <select
                                    className="pl-12 pr-10 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none transition-all font-bold text-white/70"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    <option value="All">All Categories</option>
                                    {['Design', 'Writing', 'Media'].map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredApps.map((app) => (
                            <div key={app.id} className="glass-card group overflow-hidden hover:border-primary/40 transition-all duration-700 flex flex-col border border-white/5 p-4 bg-white/[0.02]">
                                <div
                                    className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 cursor-pointer group/img"
                                    onClick={() => {
                                        if (app.link) {
                                            if (app.linkType === 'internal') {
                                                window.location.href = app.link;
                                            } else {
                                                const url = app.link.startsWith('http') ? app.link : `https://${app.link}`;
                                                window.open(url, '_blank');
                                            }
                                        } else {
                                            showToast('상세 페이지 준비 중입니다!', 'info');
                                        }
                                    }}
                                >
                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-primary/0 group-hover/img:bg-primary/10 transition-colors flex items-center justify-center">
                                        <div className="opacity-0 group-hover/img:opacity-100 transform translate-y-4 group-hover/img:translate-y-0 transition-all duration-500 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl">
                                            <Globe className="text-primary" size={24} />
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4 py-1.5 px-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black text-primary uppercase tracking-widest">
                                        {app.category}
                                    </div>
                                </div>

                                <div className="px-4 pb-4 space-y-4 flex flex-col flex-grow">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-black group-hover:text-primary transition-colors tracking-tight">{app.title}</h3>
                                        <p className="text-white/40 line-clamp-2 text-sm font-medium leading-relaxed">{app.desc}</p>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between gap-4">
                                        <div>
                                            <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">License Price</p>
                                            <p className="text-2xl font-black text-white">₩{app.price}</p>
                                        </div>
                                        <button className="btn-primary !px-6 !py-3 !text-sm flex items-center space-x-2">
                                            <span>구매하기</span>
                                            <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Proof (Attachment 1 Style Banner) */}
            <section className="container mx-auto px-6 py-20">
                <div className="bg-[#0a0b14] border border-white/10 p-16 md:p-24 text-center relative overflow-hidden rounded-[3rem] shadow-3xl">
                    {/* Internal Grid Pattern */}
                    <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none"></div>

                    <div className="space-y-12 relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">지금 바로 <br /> 혁신에 동참하세요</h2>
                        <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed italic">
                            "수백 명의 기업가들이 이미 icanagi를 통해 <br /> 비즈니스 경쟁력을 확보하고 있습니다."
                        </p>

                        <div className="flex flex-col items-center space-y-10 pt-4">
                            <div className="flex items-center space-x-6">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <div key={i} className="w-12 h-12 rounded-full border-4 border-[#0a0b14] bg-white/10 flex items-center justify-center overflow-hidden shadow-xl">
                                            <User size={24} className="text-white/40" />
                                        </div>
                                    ))}
                                    <div className="w-12 h-12 rounded-full border-4 border-[#0a0b14] bg-primary text-black flex items-center justify-center font-black text-xs shadow-xl">+300</div>
                                </div>
                            </div>

                            <Link
                                to="/inquiry"
                                className="btn-primary text-xl px-16 py-6 rounded-2xl shadow-[0_0_60px_rgba(0,224,255,0.5)] transform hover:scale-105 transition-all text-center relative z-50 inline-block cursor-pointer"
                            >
                                의뢰하기
                            </Link>

                            <span className="text-xs font-black text-primary uppercase tracking-[0.3em] animate-pulse">300명 이상의 리더진 완료</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default LandingPage;
