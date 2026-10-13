import { menuItems, highlights } from './data';
import FoodCard from './FoodCard';

function Home({ setSahifa }) {
  return (
    <div className="page-inner">
      <section className="welcome-banner">
        <div className="welcome-copy">
          <span className="welcome-kicker">YANGI · MAZALI · SOG'LOM</span>
          <h1>Yaxshi kun mazali tushlikdan boshlanadi.</h1>
          <p>Har kuni yangi tayyorlangan taomlarni ko'ring va tanaffusingizga oldindan buyurtma bering.</p>
          <button className="primary-button" type="button" onClick={() => setSahifa('menu')}>Bugungi menyuni ko'rish <span>→</span></button>
        </div>
        <div className="welcome-art" aria-hidden="true">
          <img src={menuItems[5].imageUrl} alt="" />
          <div className="welcome-sticker"><span>✦</span> Har kuni yangi<br />tayyorlanadi</div>
        </div>
      </section>

      <section className="quick-facts" aria-label="Oshxona afzalliklari">
        {highlights.map((item, index) => (
          <article className="fact-card" key={item.title}>
            <span className="fact-number">0{index + 1}</span>
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">BUGUNGI TANLOV</span>
            <h2>Ommabop taomlar</h2>
          </div>
          <button className="text-link" type="button" onClick={() => setSahifa('menu')}>To'liq menyu <span>→</span></button>
        </div>
        <div className="food-grid">
          {menuItems.slice(0, 3).map((product) => (
            <FoodCard key={product.id} product={product} onAction={() => setSahifa('order')} actionLabel="Buyurtma" />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
