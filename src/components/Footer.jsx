import { Link } from 'react-router-dom';
import { Cpu } from 'lucide-react';

const Footer = () => {
    return (
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
                        <li><a href="/#portfolio" className="hover:text-primary transition-all flex items-center gap-2 group"><div className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:scale-150 transition-all"></div>포트폴리오</a></li>
                        <li><Link to="#" className="hover:text-primary transition-all flex items-center gap-2 group" onClick={() => alert('준비 중인 서비스입니다.')}><div className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:scale-150 transition-all"></div>공지사항</Link></li>
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
                    <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
