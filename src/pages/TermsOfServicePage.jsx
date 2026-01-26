import { Cpu, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfServicePage = () => {
    return (
        <div className="bg-[#05060b] min-h-screen font-sans selection:bg-primary/30 py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-12">
                    <Link to="/" className="inline-flex items-center space-x-2 text-primary hover:text-white transition-colors text-sm font-bold uppercase tracking-widest mb-8">
                        <ChevronLeft size={16} />
                        <span>돌아가기</span>
                    </Link>
                    <div className="flex items-center space-x-3 mb-6">
                        <Cpu className="w-8 h-8 text-primary" />
                        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">서비스 이용약관 (Terms of Service)</h1>
                    </div>
                </div>

                <div className="glass-card p-8 md:p-12 border border-white/5 space-y-10 text-white/70 leading-relaxed font-light text-sm md:text-base">
                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-4">제1조 (목적)</h3>
                        <p>
                            본 약관은 <strong>icanagi.com</strong>(이하 ‘회사’라 함)이 제공하는 AI 솔루션, SaaS 서비스, 모바일 애플리케이션 및 관련 제반 서비스의 이용 조건과 절차, 회사와 이용자의 권리 및 책임 범위를 규정함을 목적으로 합니다.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-4">제2조 (AI 에이전트 서비스 특약)</h3>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li><strong>자율성 및 한계:</strong> 회사가 제공하는 AI 에이전트(Agi 등)는 입력된 데이터를 바탕으로 확률적 결과물을 생성하며, 인간의 지능과 동일한 판단력을 보장하지 않습니다.</li>
                            <li><strong>책임의 소재:</strong> 이용자가 AI 에이전트를 통해 생성한 콘텐츠를 외부 플랫폼에 게시하여 발생하는 저작권 분쟁, 명예훼손 등의 법적 책임은 이용자 본인에게 있습니다.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-4">제3조 (SaaS 서비스 이용 조항 - AI-men 등)</h3>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li><strong>콘텐츠 변환 권한:</strong> 이용자가 'AI-men' 서비스를 통해 교회 설교 등 제3자의 저작물을 업로드할 경우, 해당 저작물의 활용에 대한 정당한 권한을 보유하고 있어야 합니다.</li>
                            <li><strong>기술적 처리:</strong> 회사는 변환 효율성을 위해 이용자가 업로드한 원본 파일을 기술적으로 가공할 수 있으며, 서비스 품질 개선을 위한 학습 데이터로 익명화하여 활용할 수 있습니다.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-4">제4조 (전문 계산 및 분석 툴 조항 - 경매 마스터 등)</h3>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li><strong>정보의 참고성:</strong> '경매 마스터' 등 계산 툴이 제공하는 입찰가 산출 및 데이터 분석 결과는 단순 참고 자료이며, 실제 입찰 결과나 수익성을 보장하지 않습니다.</li>
                            <li><strong>투자 책임:</strong> 서비스를 이용한 투자 결정으로 인해 발생하는 경제적 손실에 대해 회사는 어떠한 책임도 지지 않으므로, 최종 판단은 반드시 전문가의 상담을 거칠 것을 권고합니다.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-4">제5조 (지식재산권 보호)</h3>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>회사가 제공하는 로고, 디자인, AI 에이전트 로직 및 고유 데이터 알고리즘에 대한 지식재산권은 회사에 전속됩니다.</li>
                            <li>이용자는 회사의 서비스를 역설계(Reverse Engineering)하거나 무단 복제하여 유사 서비스를 구축하는 행위를 엄격히 금지합니다.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-4">제6조 (유료 서비스 및 환불)</h3>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>유료 서비스 결제 시 관련 법령에 의거하여 청약철회가 가능합니다. 단, AI 생성물 확인 등 디지털 콘텐츠의 특성상 이미 가치가 소모된 경우에는 환불이 제한될 수 있습니다.</li>
                            <li>서비스의 중대한 결함으로 인해 정상적인 이용이 불가능할 경우 회사는 규정에 따라 보상 또는 환불 조치를 취합니다.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-4">제7조 (이용 제한 및 면책)</h3>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>회사는 국가 비상사태, 천재지변, Google 등 외부 API 서비스의 중단 등 불가항력적인 사유로 서비스가 중단될 경우 책임을 면제받습니다.</li>
                            <li>이용자가 본 약관 및 관련 법령을 위반하여 회사에 손해를 끼칠 경우, 이용자는 회사의 모든 손해를 배상할 의무가 있습니다.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-4">제8조 (준거법 및 관할법원)</h3>
                        <p>본 약관의 해석과 관련하여 발생하는 모든 분쟁은 대한민국 법령을 준수하며, 회사의 소재지 관할 법원을 전속 관할법원으로 합니다.</p>
                    </section>

                    <div className="pt-10 border-t border-white/5 text-sm font-bold tracking-widest text-white/40">
                        <p>부칙</p>
                        <p>본 약관은 2026년 1월 26일부터 시행됩니다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfServicePage;
