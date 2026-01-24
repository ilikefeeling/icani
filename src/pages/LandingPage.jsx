import { ArrowRight, User, Globe, MessageSquare, Cpu, Sparkles, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
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
                            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-bold text-primary tracking-tighter hover:bg-white/10 transition-colors cursor-pointer" onClick={() => alert('신규 서비스 런칭 중입니다!')}>
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
                            <Link to="/portfolio" className="btn-primary w-full sm:w-auto px-12 py-4">
                                포트폴리오 보러가기
                            </Link>
                            <button className="btn-secondary w-full sm:w-auto px-12 py-4" onClick={() => alert('문의하기 버튼이 작동 중입니다. 이메일: contact@icanagi.com')}>
                                문의하기
                            </button>
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

                            <button className="btn-primary text-xl px-16 py-6 rounded-2xl shadow-[0_0_60px_rgba(0,224,255,0.5)] transform hover:scale-105 transition-all">
                                지원 나기기
                            </button>

                            <span className="text-xs font-black text-primary uppercase tracking-[0.3em] animate-pulse">300명 이상의 리더진 완료</span>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="container mx-auto px-6 pt-32 pb-16 bg-[#05060b]">
                <div className="grid md:grid-cols-12 gap-16 mb-20">
                    <div className="md:col-span-5 space-y-8">
                        <div className="flex items-center space-x-3">
                            <Cpu className="w-10 h-10 text-primary" />
                            <span className="text-2xl font-black tracking-[0.2em] uppercase text-glow">icanagi</span>
                        </div>
                        <p className="text-white/30 max-w-sm text-sm font-medium leading-[1.8]">
                            독창적인 AI 앱 포트폴리오를 전시하고 라이선스 거래를 연결하는 차세대 비즈니스 통합 플랫폼입니다. 최상의 기술력과 신뢰를 바탕으로 비즈니스의 미래를 함께 설계합니다.
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/40 mb-10">Quick Lists</h4>
                        <ul className="space-y-6 text-sm font-black text-white/70 tracking-widest uppercase">
                            <li><Link to="/" className="hover:text-primary transition-all flex items-center gap-2 group"><div className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:scale-150 transition-all"></div>홈</Link></li>
                            <li><Link to="/portfolio" className="hover:text-primary transition-all flex items-center gap-2 group"><div className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:scale-150 transition-all"></div>포트폴리오</Link></li>
                            <li><Link to="#" className="hover:text-primary transition-all flex items-center gap-2 group"><div className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:scale-150 transition-all"></div>공지사항</Link></li>
                            <li><Link to="/login" className="hover:text-primary transition-all flex items-center gap-2 group"><div className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:scale-150 transition-all"></div>관리자 모드</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/40 mb-10">Contact Hub</h4>
                        <ul className="space-y-6 text-sm font-bold text-white/40 leading-loose">
                            <li className="flex items-start gap-4"><div className="w-2 h-2 rounded-full bg-primary/20 mt-2"></div>서울특별시 서초구 논현로27길 66</li>
                            <li className="flex items-start gap-4"><div className="w-2 h-2 rounded-full bg-primary/20 mt-2"></div>02-1234-5678</li>
                            <li className="flex items-start gap-4"><div className="w-2 h-2 rounded-full bg-primary/20 mt-2"></div>contact@icanai.com</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/20 text-[10px] font-black tracking-[0.3em] uppercase">
                        © {new Date().getFullYear()} ICAN AI. All rights reserved.
                    </p>
                    <div className="flex space-x-8 text-white/20 text-[10px] font-black uppercase tracking-widest">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
