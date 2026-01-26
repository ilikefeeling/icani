import { Cpu, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
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
                        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">개인정보처리방침 (Privacy Policy)</h1>
                    </div>
                </div>

                <div className="glass-card p-8 md:p-12 border border-white/5 space-y-10 text-white/70 leading-relaxed font-light">
                    <section>
                        <p className="text-lg font-medium text-white mb-4">
                            <strong>[icanagi.com]</strong>(이하 ‘회사’라 함)은 이용자의 개인정보를 소중하게 생각하며, 「개인정보 보호법」 및 관련 법령을 준수하고 있습니다. 본 개인정보처리방침은 귀하가 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보 보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-4">1. 수집하는 개인정보의 항목 및 수집 방법</h3>
                        <p>회사는 서비스 제공을 위해 필요한 최소한의 개인정보만을 수집합니다.</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>수집 항목:</strong> 성명, 이메일 주소, 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보, 기기 정보</li>
                            <li><strong>수집 방법:</strong> 홈페이지 문의하기(Contact), 회원가입, 서비스 이용 과정에서의 자동 생성 및 수집</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-4">2. 개인정보의 수집 및 이용 목적</h3>
                        <p>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>서비스 제공:</strong> AI 에이전트 서비스 및 맞춤형 콘텐츠 제공, 본인 인증</li>
                            <li><strong>이용자 관리:</strong> 서비스 이용에 따른 본인확인, 고지사항 전달, 상담 처리</li>
                            <li><strong>마케팅 및 광고:</strong> 신규 서비스 개발, 이벤트 정보 및 광고성 정보 제공 (동의 시)</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-4">3. 개인정보의 보유 및 이용 기간</h3>
                        <p>이용자의 개인정보는 수집 및 이용 목적이 달성되면 지체 없이 파기합니다. 단, 관계 법령의 규정에 의하여 보존할 필요가 있는 경우 일정 기간 보관합니다.</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>계약 또는 청약철회 등에 관한 기록:</strong> 5년</li>
                            <li><strong>웹사이트 방문 기록:</strong> 3개월</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-4">4. 개인정보의 제3자 제공</h3>
                        <p>회사는 이용자의 동의 없이 개인정보를 외부에 제공하지 않습니다. 단, 법령의 규정에 의거하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우는 예외로 합니다.</p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-4">5. 개인정보 처리 위탁</h3>
                        <p>회사는 원활한 서비스 처리를 위해 개인정보 처리 업무를 외부 전문업체에 위탁할 수 있으며, 위탁 시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 관리 감독합니다.</p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-4">6. 이용자 및 법정대리인의 권리와 그 행사방법</h3>
                        <p>이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입 해지를 요청할 수 있습니다. 개인정보 보호책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.</p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-4">7. 개인정보 자동 수집 장치의 설치·운영 및 그 거부에 관한 사항</h3>
                        <p>회사는 이용자에게 특화된 맞춤서비스를 제공하기 위해 '쿠키(cookie)'를 사용합니다. 이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있으나, 이 경우 서비스 이용에 어려움이 있을 수 있습니다.</p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-4">8. 개인정보 보호책임자 및 상담 신고</h3>
                        <p>회사의 서비스를 이용하시며 발생하는 모든 개인정보 보호 관련 민원은 아래의 책임자에게 문의하실 수 있습니다.</p>
                        <ul className="list-disc pl-6 space-y-2 font-medium">
                            <li><strong>개인정보 보호책임자:</strong> [Hyunku Shin]</li>
                            <li><strong>이메일:</strong> <a href="mailto:ilikepeople@icloud.com" className="text-primary hover:underline">ilikepeople@icloud.com</a></li>
                        </ul>
                    </section>

                    <div className="pt-10 border-t border-white/5 text-sm font-bold tracking-widest text-white/40">
                        <p>공고일자: 2026년 1월 26일</p>
                        <p>시행일자: 2026년 1월 26일</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
