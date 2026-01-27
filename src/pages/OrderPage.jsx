import { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, CheckCircle2, CreditCard, User, Mail, Phone, Package, ArrowRight } from 'lucide-react';
import { useToast } from '../components/ToastContext';

const OrderPage = () => {
    const { showToast } = useToast();
    const location = useLocation();
    const navigate = useNavigate();
    const [productInfo, setProductInfo] = useState({ title: '', price: '', image: '' });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        const params = new URLSearchParams(location.search);
        const productName = params.get('product');

        // Get product details from localStorage or INITIAL_APPS
        const storedApps = JSON.parse(localStorage.getItem('ican_apps') || '[]');
        const product = storedApps.find(app => app.title === productName);

        if (product) {
            setProductInfo(product);
        } else if (productName) {
            setProductInfo({ title: productName, price: '상담 후 결정', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=600' });
        } else {
            navigate('/');
        }
    }, [location, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newOrder = {
            ...formData,
            id: Date.now(),
            productName: productInfo.title,
            price: productInfo.price,
            date: new Date().toLocaleString(),
            type: 'Purchase', // 구분값 추가
            status: 'Pending'
        };

        const existingInquiries = JSON.parse(localStorage.getItem('ican_inquiries') || '[]');
        localStorage.setItem('ican_inquiries', JSON.stringify([newOrder, ...existingInquiries]));

        showToast(`${productInfo.title} 주문이 접수되었습니다! 곧 연락드릴게요.`, 'success');

        // redirect to success or home
        setTimeout(() => navigate('/'), 2000);
    };

    return (
        <div className="bg-[#05060b] min-h-screen text-white font-sans selection:bg-primary/30 pb-32 pt-32">
            <div className="fixed inset-0 bg-mesh opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <Link to="/" className="inline-flex items-center space-x-2 text-primary hover:text-white transition-colors text-sm font-bold uppercase tracking-widest mb-12">
                    <ArrowLeft size={16} />
                    <span>쇼핑 계속하기</span>
                </Link>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Left: Order Summary */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="glass-card p-8 border-primary/20 bg-primary/5">
                            <h2 className="text-xl font-black mb-6 flex items-center gap-2">
                                <ShoppingCart className="text-primary" size={20} />
                                주문 상품 확인
                            </h2>
                            <div className="space-y-6">
                                <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
                                    <img src={productInfo.image} alt={productInfo.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-black text-glow">{productInfo.title}</h3>
                                    <div className="flex justify-between items-end border-t border-white/5 pt-4">
                                        <span className="text-white/40 text-sm font-bold uppercase tracking-widest">도입 비용</span>
                                        <span className="text-3xl font-black text-primary">₩{productInfo.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-6 border-white/5 space-y-4">
                            <div className="flex items-start gap-4 text-white/40">
                                <Package size={18} className="mt-1" />
                                <p className="text-sm font-medium leading-relaxed">
                                    주문 즉시 담당자가 배정되어 <br />
                                    12시간 이내에 도입 절차를 안내드립니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Order Form */}
                    <div className="lg:col-span-3">
                        <div className="glass-card p-10 md:p-12 border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4">
                                <CreditCard size={40} className="text-white/5" />
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-black tracking-tight underline underline-offset-8 decoration-primary/30">주문서 작성</h2>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-2">주문자 성함</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                                            <input
                                                type="text" required placeholder="홍길동"
                                                className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold"
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-2">이메일 주소</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                                            <input
                                                type="email" required placeholder="example@email.com"
                                                className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold"
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] ml-2">연락처</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                                            <input
                                                type="tel" required placeholder="010-0000-0000"
                                                className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold"
                                                value={formData.phone}
                                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className="btn-primary w-full py-6 text-lg font-black group shadow-glow-md">
                                    <span>주문 확정하기</span>
                                    <ArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
                                </button>

                                <p className="text-center text-[10px] text-white/20 font-medium">
                                    주문 확정 시 이용약관 및 개인정보 보관에 동의하는 것으로 간주합니다.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
