import { useState, useEffect } from 'react';
import { Search, Filter, ArrowRight, Info, Cpu, Star } from 'lucide-react';

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

const PortfolioPage = () => {
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

    return (
        <div className="container mx-auto px-6 py-20 min-h-screen">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="space-y-4">
                    <div className="inline-flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-widest">
                        <Cpu size={14} />
                        <span>AI App Portfolio</span>
                    </div>
                    <h1 className="text-4xl font-bold mb-4">icanagi 앱 포트폴리오</h1>
                    <p className="text-gray-600 text-lg">최첨단 AI 기술이 담긴 앱들을 둘러보고 비즈니스에 도입해보세요.</p>
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
                    <div key={app.id} className="glass-card group overflow-hidden hover:border-primary/40 transition-all duration-700 flex flex-col border border-white/5 p-4">
                        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                            <img
                                src={app.image}
                                alt={app.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
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
    );
};

export default PortfolioPage;
