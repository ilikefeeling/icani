import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-primary mb-6">icanagi</h3>
                        <p className="text-gray-600 mb-6 max-w-sm">
                            독창적인 AI 기반 앱 포트폴리오를 전시하고 라이선스 거래를 연결하는 차세대 비즈니스 통합 플랫폼입니다.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-primary transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-primary transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-gray-600">
                            <li><a href="/" className="hover:text-primary transition-colors">홈</a></li>
                            <li><a href="/portfolio" className="hover:text-primary transition-colors">포트폴리오</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors" onClick={() => alert('공지사항 시스템 준비 중입니다.')}>공지사항</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Contact</h4>
                        <ul className="space-y-4 text-gray-600 font-medium">
                            <li>서울특별시 서초구 논현로27길 66</li>
                            <li>02-1234-5678</li>
                            <li>contact@icanai.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} icanagi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
