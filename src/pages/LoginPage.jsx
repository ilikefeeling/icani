import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight, Cpu, ShieldCheck } from 'lucide-react';
import { useToast } from '../components/ToastContext';

const LoginPage = () => {
    const { showToast } = useToast();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;
        if (!ADMIN_PASSWORD) {
            console.error('Admin password environment variable is not set!');
            showToast('시스템 설정 오류입니다. 관리자에게 문의하세요.', 'error');
            return;
        }

        if (email === 'ilikepeople@icloud.com' && password === ADMIN_PASSWORD) {
            navigate('/admin');
            showToast('성공적으로 접속되었습니다.', 'success');
        } else {
            showToast('이메일 또는 액세스 키가 올바르지 않습니다.', 'error');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center container mx-auto px-6 py-20 bg-mesh">
            <div className="w-full max-w-md glass-card p-12 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-50"></div>

                <div className="text-center mb-12 relative z-10">
                    <div className="w-20 h-20 bg-primary/10 border border-primary/30 text-primary rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(0,224,255,0.2)]">
                        <Cpu size={40} />
                    </div>
                    <h1 className="text-3xl font-black mb-3 tracking-tight">icanagi 비즈니스 허브 로그인</h1>
                    <p className="text-white/40 font-medium">관리자 계정으로 접속해 주세요.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-8 relative z-10" autoComplete="off">
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-2">Email Address</label>
                        <div className="relative group">
                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={18} />
                            <input
                                type="email"
                                required
                                autoComplete="off"
                                className="w-full pl-14 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-white font-medium"
                                placeholder="이메일을 입력하세요"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-2">Access Key</label>
                        <div className="relative group">
                            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={18} />
                            <input
                                type="password"
                                required
                                autoComplete="new-password"
                                className="w-full pl-14 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-white font-medium"
                                placeholder="액세스 키를 입력하세요"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-primary w-full py-5 text-lg group">
                        <span>시스템 접속</span>
                        <ArrowRight className="w-6 h-6 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>


            </div>
        </div>
    );
};

export default LoginPage;
