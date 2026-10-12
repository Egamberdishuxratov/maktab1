import { useState } from 'react';
import Home from './Home';
import Menu from './Menu';
import Order from './Order';
import Orders from './Orders';
import Review from './Review';
import About from './About';
import './App.css'

function App() {
  const [sahifa, setSahifa] = useState('home');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pages = [
    { id: 'home', label: 'Bosh sahifa' },
    { id: 'menu', label: 'Menyu' },
    { id: 'order', label: 'Buyurtma' },
    { id: 'orders', label: 'Buyurtmalar' },
    { id: 'review', label: 'Sharhlar' },
    { id: 'about', label: 'Biz haqimizda' },
  ];

  const navigate = (page) => {
    setSahifa(page);
    setMobileNavOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <nav className="bg-white/80 backdrop-blur-sm border-b border-slate-100 sticky top-0 z-50 shadow-sm">
        <div className="site-nav max-w-6xl mx-auto px-4 flex justify-between items-center">
          <button onClick={() => navigate('home')} className="flex items-center gap-2 cursor-pointer font-black text-xl text-emerald-600">
            <span>🏫</span> Smart Oshxona
          </button>

          <button
            className="mobile-nav-toggle"
            type="button"
            aria-expanded={mobileNavOpen}
            aria-controls="main-navigation"
            aria-label={mobileNavOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
            onClick={() => setMobileNavOpen((open) => !open)}
          >
            <span aria-hidden="true">{mobileNavOpen ? '×' : '☰'}</span>
          </button>

          <ul id="main-navigation" className={`site-navigation ${mobileNavOpen ? 'is-open' : ''}`}>
            {pages.map((page) => (
              <li key={page.id}>
              <button
                onClick={() => navigate(page.id)}
                aria-current={sahifa === page.id ? 'page' : undefined}
                className={`px-3 py-2 rounded-xl transition-all ${sahifa === page.id ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-slate-50'}`}
              >
                {page.label}
              </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="flex-grow">
        {sahifa === 'home' && <Home setSahifa={setSahifa} />}
        {sahifa === 'menu' && <Menu />}
        {sahifa === 'order' && <Order />}
        {sahifa === 'orders' && <Orders />}
        {sahifa === 'review' && <Review />}
        {sahifa === 'about' && <About />}
      </main>

      <footer className="bg-white border-t border-slate-100 py-6 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Smart Maktab Oshxonasi Tizimi. Barcha huquqlar himoyalangan.</p>
      </footer>

    </div>
  );
}

export default App;
