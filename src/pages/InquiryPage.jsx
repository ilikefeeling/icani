import React, { useState } from 'react';
import { Cpu, Sparkles, CheckCircle2, ArrowRight, MessageSquare, Rocket, BarChart3, Zap, ShieldCheck, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '../components/ToastContext';

const InquiryPage = () => {
    const { showToast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        package: 'Premium',
        aiFeatures: [],
        consultingNeeded: false,
        message: ''
    });

    const aiOptions = [
        { id: 'nlp', label: '자연어 처리 (NLP)', icon: <MessageSquare size={16} /> },
        { id: 'cv', label: '이미지/영상 생성 자동화', icon: <Sparkles size={16} /> },
        { id: 'analytics', label: '데이터 분석 및 예측', icon: <BarChart3 size={16} /> },
        { id: 'recommend', label: '맞춤형 추천 엔진', icon: <Zap size={16} /> },
    ];

    const packages = [
        { id: 'Basic', title: '일반 앱 개발', price: '협의', desc: '아이디어의 핵심 기능을 안정적으로 구현합니다.', features: ['크로스 플랫폼 앱', '관리자 페이지 제공', '기본 유지보수'] },
        { id: 'Premium', title: 'AI 에이전트 통합 솔루션', price: 'Best Value', desc: '강력한 AI 로직을 탑재하여 경쟁력을 확보합니다.', features: ['자율형 AI 에이전트 통합', '고도화된 프롬프트 엔지니어링', '실시간 데이터 학습 파이프라인'], recommended: true },
        { id: 'Enterprise', title: '수익화 자동화 풀 패키지', price: 'Custom', desc: '비즈니스 모델 설계부터 자동화까지 책임집니다.', features: ['지속적 수익화 콘텐츠 파이프라인', '마케팅 자동화 도구 통합', '1:1 전담 비즈니스 컨설팅'] },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save to localStorage for Admin Page
        const newInquiry = {
            ...formData,
            id: Date.now(),
            date: new Date().toLocaleString(),
            status: 'Pending'
        };

        const existingInquiries = JSON.parse(localStorage.getItem('ican_inquiries') || '[]');
        localStorage.setItem('ican_inquiries', JSON.stringify([newInquiry, ...existingInquiries]));

        showToast('성공적으로 의뢰가 접수되었습니다. 1:1 컨설팅 리포트를 곧 보내드릴게요!', 'success');

        // Reset form after success
        setFormData({
            name: '',
            email: '',
            projectType: '',
            package: 'Premium',
            aiFeatures: [],
            consultingNeeded: false,
            message: ''
        });
    };

    const toggleAiFeature = (id) => {
        setFormData(prev => ({
            ...prev,
            aiFeatures: prev.aiFeatures.includes(id)
                ? prev.aiFeatures.filter(f => f !== id)
                : [...prev.aiFeatures, id]
        }));
    };

    return (
        <div className="bg-[#05060b] min-h-screen text-white font-sans selection:bg-primary/30 pb-32">
            {/* Background Decorative Elements */}
            <div className="fixed inset-0 bg-mesh opacity-20 pointer-events-none"></div>

            <header className="py-20 relative z-10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <Link to="/" className="inline-flex items-center space-x-2 text-primary hover:text-white transition-colors text-sm font-bold uppercase tracking-widest mb-12">
                        <ChevronLeft size={16} />
                        <span>홈으로 돌아가기</span>
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="space-y-6 max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-black text-primary uppercase tracking-[0.2em] animate-pulse">
                                <Sparkles size={14} />
                                <span>Premium AI Development</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                                귀하의 비즈니스에 <br />
                                <span className="text-glow">AI 수익 엔진</span>을 <br />
                                장착하십시오
                            </h1>
                            <p className="text-white/50 text-lg md:text-xl font-medium leading-relaxed">
                                단순한 코딩을 넘어, 수익이 날 수밖에 없는 구조적 비즈니스를 설계합니다. <br />
                                지금 의뢰하고 전문가의 1:1 비즈니스 로드맵을 선점하십시오.
                            </p>
                        </div>
                        <div className="hidden lg:block">
                            <Cpu className="w-32 h-32 text-primary opacity-20 animate-pulse" />
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 max-w-5xl relative z-10">
                <form onSubmit={handleSubmit} className="space-y-16">
                    {/* Step 1: Filter & Objective */}
                    <div className="glass-card p-10 md:p-16 space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-black flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center text-sm">1</span>
                                프로젝트의 핵심 목표는 무엇입니까?
                            </h2>
                            <p className="text-white/40">목표에 따라 가장 최적화된 기술 스택과 수익 모델을 제안해 드립니다.</p>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6">
                            {[
                                { id: 'revenue', title: '강력한 수익 창출', icon: <Rocket size={24} /> },
                                { id: 'automation', title: '전방위 업무 자동화', icon: <ShieldCheck size={24} /> },
                                { id: 'launch', title: '신규 서비스 런칭', icon: <Zap size={24} /> },
                            ].map(obj => (
                                <button
                                    key={obj.id}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, projectType: obj.id })}
                                    className={`p-8 border rounded-3xl text-left transition-all group flex flex-col gap-4 ${formData.projectType === obj.id
                                        ? 'bg-primary border-primary text-black'
                                        : 'bg-white/5 border-white/10 hover:border-primary/50'
                                        }`}
                                >
                                    <div className={`${formData.projectType === obj.id ? 'text-black' : 'text-primary'}`}>{obj.icon}</div>
                                    <span className="font-black tracking-tight">{obj.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Step 2: Package Upselling */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-black flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center text-sm">2</span>
                            개발 범위를 선택하십시오
                        </h2>
                        <div className="grid lg:grid-cols-3 gap-8">
                            {packages.map(pkg => (
                                <div
                                    key={pkg.id}
                                    onClick={() => setFormData({ ...formData, package: pkg.id })}
                                    className={`p-10 rounded-[2.5rem] border transition-all cursor-pointer flex flex-col relative overflow-hidden ${formData.package === pkg.id
                                        ? 'bg-primary/5 border-primary shadow-[0_0_50px_rgba(0,224,255,0.15)]'
                                        : 'bg-white/[0.02] border-white/5 hover:border-white/20'
                                        }`}
                                >
                                    {pkg.recommended && (
                                        <div className="absolute top-0 right-0 bg-primary text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-bl-2xl">Recommended</div>
                                    )}
                                    <h4 className="text-sm font-black text-primary uppercase tracking-widest mb-4">{pkg.id}</h4>
                                    <h3 className="text-2xl font-black mb-4">{pkg.title}</h3>
                                    <p className="text-white/40 text-sm leading-relaxed mb-8">{pkg.desc}</p>
                                    <div className="text-3xl font-black mb-10">{pkg.price}</div>
                                    <ul className="space-y-4 flex-grow">
                                        {pkg.features.map((f, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm font-medium text-white/70">
                                                <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Step 3: Detailed Specs */}
                    <div className="glass-card p-10 md:p-16 grid md:grid-cols-2 gap-16">
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-black flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center text-sm">3</span>
                                    필요한 AI 기능을 선택하십시오
                                </h2>
                                <p className="text-white/40">복수 선택이 가능합니다. 비즈니스 핵심 가치에 집중하세요.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {aiOptions.map(opt => (
                                    <button
                                        key={opt.id}
                                        type="button"
                                        onClick={() => toggleAiFeature(opt.id)}
                                        className={`flex items-center gap-4 p-6 rounded-2xl border transition-all ${formData.aiFeatures.includes(opt.id)
                                            ? 'bg-primary/20 border-primary text-white shadow-glow-sm'
                                            : 'bg-white/5 border-white/10 text-white/60 hover:border-primary/30'
                                            }`}
                                    >
                                        <div className={formData.aiFeatures.includes(opt.id) ? 'text-primary' : ''}>{opt.icon}</div>
                                        <span className="font-black text-sm">{opt.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-10">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-black flex items-center gap-3">
                                    추가 전략 지원
                                </h2>
                                <p className="text-white/40">개발 이상의 가치를 제안해 드릴까요?</p>
                            </div>

                            <div
                                onClick={() => setFormData({ ...formData, consultingNeeded: !formData.consultingNeeded })}
                                className={`p-8 rounded-3xl border transition-all cursor-pointer group ${formData.consultingNeeded
                                    ? 'bg-primary/10 border-primary'
                                    : 'bg-white/5 border-white/10'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-black text-lg">비즈니스 수익 모델(BM) 설계</h4>
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${formData.consultingNeeded ? 'bg-primary border-primary' : 'border-white/20'
                                        }`}>
                                        {formData.consultingNeeded && <CheckCircle2 size={14} className="text-black" />}
                                    </div>
                                </div>
                                <p className="text-sm text-white/50 leading-relaxed font-medium">
                                    개발을 넘어 시장 분석, 마케팅 자동화, 수익화 콘텐츠 파이프라인 구축 로드맵을 함께 설계합니다. (추가 컨설팅 옵션)
                                </p>
                            </div>

                            <div className="space-y-6 pt-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="성함/기업명"
                                        className="bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-primary transition-all font-bold"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                    <input
                                        type="email"
                                        placeholder="이메일 주소"
                                        className="bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-primary transition-all font-bold"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                                <textarea
                                    placeholder="상세 의뢰 내용 (선택)"
                                    className="bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-primary transition-all w-full h-32 font-medium"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>

                                <button type="submit" className="btn-primary w-full py-6 text-lg tracking-[0.2em] font-black group">
                                    의뢰하기 <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform inline-block" />
                                </button>
                                <p className="text-center text-[10px] text-white/30 font-bold uppercase tracking-widest">
                                    지금 의뢰 시 1:1 비즈니스 로드맵 컨설팅 세션이 무료로 제공됩니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </form>

                {/* Social Proof Section */}
                <section className="mt-40 space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-black tracking-tight">현재 가동 중인 icanagi 수익 엔진</h2>
                        <p className="text-white/40 font-medium">우리의 로직은 이미 시장에서 증명되고 있습니다.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: 'AI-men', category: 'SaaS / AI 콘텐츠 자동화', impact: '콘텐츠 생성 효율 800% 향상', desc: '다양한 미디어 소스를 AI 에이전트가 자율적으로 분석하고 수익화 콘텐츠로 가공하는 플랫폼.' },
                            { title: '경매 마스터', category: 'FinTech / 분석 툴', impact: '입찰 데이터 기반 정확도 94.2%', desc: '전문적인 경매 데이터를 실시간 분석하여 최적의 수익률을 보장하는 입찰가 산출 엔진.' },
                        ].map((proj, i) => (
                            <div key={i} className="glass-card p-10 border border-white/5 group hover:border-primary/40 transition-all">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="space-y-1">
                                        <h4 className="text-[10px] font-black text-primary uppercase tracking-widest">{proj.category}</h4>
                                        <h3 className="text-2xl font-black">{proj.title}</h3>
                                    </div>
                                    <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-black text-white/40">{proj.impact}</div>
                                </div>
                                <p className="text-white/50 text-sm leading-relaxed mb-6 font-medium">{proj.desc}</p>
                                <div className="flex items-center gap-2 text-xs font-black text-white/20 group-hover:text-primary transition-colors">
                                    <span>핵심 로직 분석 완료</span>
                                    <div className="flex-grow h-px bg-white/5 group-hover:bg-primary/20"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default InquiryPage;
