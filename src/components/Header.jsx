import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, Cpu } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '홈', path: '/' },
    { name: '포트폴리오', path: '/portfolio' },
    { name: '공지사항', path: '#notice', onClick: () => alert('준비 중인 서비스입니다.') },
    { name: '문의하기', path: '#contact', onClick: () => alert('문의 사항은 contact@icanagi.com으로 보내주세요.') },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#05060b]/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Cpu className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-black text-white tracking-widest uppercase">icanagi</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={item.onClick}
              className={`nav-link text-sm uppercase tracking-wider font-bold ${location.pathname === item.path ? 'text-primary' : ''
                }`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/login" className="text-sm font-bold text-white/50 hover:text-white transition-all uppercase tracking-wider">
            Admin
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0b14] absolute top-full left-0 w-full shadow-2xl border-t border-white/5 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-8 space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-lg font-bold text-white/70 hover:text-primary transition-colors uppercase tracking-widest"
                onClick={() => {
                  setIsOpen(false);
                  if (item.onClick) item.onClick();
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="btn-primary w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              로그인
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
