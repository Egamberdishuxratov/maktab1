import React, { useState } from 'react';
import Home from './Home';
import Menu from './Menu';
import Order from './Order';
import Review from './Review';
import About from './About';
import './App.css'

function App() {
  const [sahifa, setSahifa] = useState('home');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">

      {/* SEHRLI NAVBAR (NAVIGATSIYA PANELI) */}
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          <div onClick={() => setSahifa('home')} className="flex items-center gap-2 cursor-pointer font-bold text-xl text-green-600">
            <span>🏫</span> Smart Oshxona
          </div>

          {/* Sahifalar Navigatsiyasi */}
          <ul className="flex space-x-1 md:space-x-4 text-sm font-semibold text-slate-600">
            <li>
              <button
                onClick={() => setSahifa('home')}
                className={`px-3 py-2 rounded-xl transition-all ${sahifa === 'home' ? 'bg-green-50 text-green-600' : 'hover:bg-slate-50'}`}
              >
                Bosh sahifa
              </button>
            </li>
            <li>
              <button
                onClick={() => setSahifa('menu')}
                className={`px-3 py-2 rounded-xl transition-all ${sahifa === 'menu' ? 'bg-green-50 text-green-600' : 'hover:bg-slate-50'}`}
              >
                Menyu
              </button>
            </li>
            <li>
              <button
                onClick={() => setSahifa('order')}
                className={`px-3 py-2 rounded-xl transition-all ${sahifa === 'order' ? 'bg-green-50 text-green-600' : 'hover:bg-slate-50'}`}
              >
                Buyurtma
              </button>
            </li>
            <li>
              <button
                onClick={() => setSahifa('review')}
                className={`px-3 py-2 rounded-xl transition-all ${sahifa === 'review' ? 'bg-green-50 text-green-600' : 'hover:bg-slate-50'}`}
              >
                Sharhlar
              </button>
            </li>
            <li>
              <button
                onClick={() => setSahifa('about')}
                className={`px-3 py-2 rounded-xl transition-all ${sahifa === 'about' ? 'bg-green-50 text-green-600' : 'hover:bg-slate-50'}`}
              >
                Biz haqimizda
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* SAHIFALARNI DINAMIK ALMASHTIRUVCHI QISM */}
      <main className="flex-grow">
        {sahifa === 'home' && <Home setSahifa={setSahifa} />}
        {sahifa === 'menu' && <Menu />}
        {sahifa === 'order' && <Order />}
        {sahifa === 'review' && <Review />}
        {sahifa === 'about' && <About />}
      </main>

      {/* FOOTER (SAYT PASTI) */}
      <footer className="bg-white border-t border-slate-100 py-6 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Smart Maktab Oshxonasi Tizimi. Barcha huquqlar himoyalangan.</p>
      </footer>

    </div>
  );
}

export default App;
