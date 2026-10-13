import { useState } from 'react';
import Home from './Home';
import Menu from './Menu';
import Order from './Order';
import Orders from './Orders';
import Review from './Review';
import About from './About';
import Login from './Login';
import './App.css';

const pages = [
  { id: 'home', label: 'Bosh sahifa', icon: '⌂' },
  { id: 'menu', label: 'Menyu', icon: '▤' },
  { id: 'order', label: 'Buyurtma berish', icon: '▣' },
  { id: 'orders', label: 'Buyurtmalarim', icon: '◷' },
  { id: 'review', label: 'Sharhlar', icon: '♡' },
  { id: 'about', label: 'Biz haqimizda', icon: 'ⓘ' },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileName, setProfileName] = useState('');
  const [page, setPage] = useState('menu');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = (nextPage) => {
    setPage(nextPage);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isLoggedIn) {
    return (
      <Login
        onLogin={(account) => {
          setProfileName(account.name);
          setIsLoggedIn(true);
        }}
      />
    );
  }

  return (
    <div className="app-background">
      <div className="app-frame">
        <header className="topbar">
          <button className="brand" onClick={() => navigate('home')} type="button" aria-label="Bosh sahifa">
            <span className="brand-mark">S</span>
            <span>SMART <strong>OSHXONA</strong></span>
          </button>

          <button
            className="mobile-menu-button"
            type="button"
            aria-expanded={sidebarOpen}
            aria-controls="app-sidebar"
            aria-label={sidebarOpen ? 'Navigatsiyani yopish' : 'Navigatsiyani ochish'}
            onClick={() => setSidebarOpen((open) => !open)}
          >
            {sidebarOpen ? '×' : '☰'}
          </button>

          <nav className="top-links" aria-label="Asosiy navigatsiya">
            {['home', 'menu', 'about'].map((id) => {
              const item = pages.find((entry) => entry.id === id);
              return (
                <button
                  className={page === id ? 'top-link is-active' : 'top-link'}
                  type="button"
                  key={id}
                  onClick={() => navigate(id)}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="top-actions">
            <button className="top-icon-button" type="button" onClick={() => navigate('order')} aria-label="Buyurtma berish">
              ♧
            </button>
            <button className="profile-button" type="button" onClick={() => navigate('orders')} aria-label="Buyurtmalarim">
              A
            </button>
          </div>
        </header>

        <div className="app-layout">
          {sidebarOpen && <button className="sidebar-scrim" type="button" onClick={() => setSidebarOpen(false)} aria-label="Navigatsiyani yopish" />}
          <aside id="app-sidebar" className={`sidebar ${sidebarOpen ? 'is-open' : ''}`}>
            <div className="profile-card">
              <div className="profile-avatar">{profileName.charAt(0).toUpperCase()}</div>
              <strong>{profileName}</strong>
              <span>O'quvchi · 9-A sinf</span>
              <div className="profile-badge">● Maktab oshxonasi a'zosi</div>
            </div>

            <p className="sidebar-label">MENING SAHIFAM</p>
            <nav className="sidebar-nav" aria-label="Sahifalar">
              {pages.map((item) => (
                <button
                  className={page === item.id ? 'sidebar-link is-active' : 'sidebar-link'}
                  type="button"
                  key={item.id}
                  aria-current={page === item.id ? 'page' : undefined}
                  onClick={() => navigate(item.id)}
                >
                  <span className="sidebar-icon" aria-hidden="true">{item.icon}</span>
                  <span>{item.label}</span>
                  {item.id === 'orders' && <span className="sidebar-link-hint">›</span>}
                </button>
              ))}
            </nav>

            <div className="sidebar-tip">
              <span className="sidebar-tip-icon">✦</span>
              <strong>Bugun yangi taomlar!</strong>
              <p>Tanaffusdan oldin buyurtma berib, navbatni o'tkazib yuboring.</p>
              <button type="button" onClick={() => navigate('menu')}>Menyuni ko'rish →</button>
            </div>
            <button
              className="logout-button"
              type="button"
              onClick={() => {
                setIsLoggedIn(false);
                setSidebarOpen(false);
              }}
            >
              ↪ Chiqish
            </button>
          </aside>

          <main className="page-content">
            {page === 'home' && <Home setSahifa={navigate} />}
            {page === 'menu' && <Menu setSahifa={navigate} />}
            {page === 'order' && <Order />}
            {page === 'orders' && <Orders />}
            {page === 'review' && <Review />}
            {page === 'about' && <About />}
          </main>
        </div>

        <footer className="site-footer">
          <div className="footer-main">
            <div className="footer-brand-block">
              <div className="footer-brand"><span className="brand-mark">S</span> SMART OSHXONA</div>
              <p>O'quvchilar uchun har kuni yangi va mazali taomlar. Mehr bilan tayyorlanadi.</p>
              <div className="social-links" aria-label="Ijtimoiy tarmoqlar">
                <span>ig</span><span>f</span><span>t</span>
              </div>
            </div>
            <div className="footer-column">
              <h2>BO'LIMLAR</h2>
              <button onClick={() => navigate('home')} type="button">Bosh sahifa</button>
              <button onClick={() => navigate('menu')} type="button">Menyu</button>
              <button onClick={() => navigate('orders')} type="button">Buyurtmalarim</button>
            </div>
            <div className="footer-column">
              <h2>MA'LUMOT</h2>
              <button onClick={() => navigate('about')} type="button">Biz haqimizda</button>
              <button onClick={() => navigate('review')} type="button">Fikr bildirish</button>
              <span>Maxfiylik va xavfsizlik</span>
            </div>
            <div className="footer-column">
              <h2>ALOQA</h2>
              <span>☎ +998 (71) 234-56-78</span>
              <span>✉ oshxona@maktab.uz</span>
              <span>⌖ Maktab oshxonasi</span>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Smart Oshxona. Barcha huquqlar himoyalangan.</span>
            <span>Yangi tayyorlandi, mehr bilan tortildi.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
