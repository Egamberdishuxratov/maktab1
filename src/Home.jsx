import { menuItems, highlights } from './data';

function Home({ setSahifa }) {
  const featured = menuItems.slice(0, 4);

  return (
    <div className="bg-gradient-to-b from-emerald-50 via-white to-white py-12 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full shadow-sm ring-1 ring-emerald-200">
          <span>🍎</span>
          <span>Sog'lom taom — porloq kelajak</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-slate-800 mt-6 leading-tight">
          Maktabimizning <span className="text-emerald-600">Smart Oshxonasiga</span> Xush Kelibsiz!
        </h1>

        <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
          Har kuni yangi, mazali va vitaminlarga boy taomlar tayyorlaymiz. Baholangan ovqatlardan tanlang va tanaffusda qulay buyurtma bering.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setSahifa('menu')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-emerald-200 transition-all"
          >
            🍕 Menyuni ko'rish
          </button>
          <button
            onClick={() => setSahifa('order')}
            className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold px-8 py-3 rounded-xl shadow-sm transition-all"
          >
            🛒 Buyurtma berish
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {highlights.map((item) => (
            <div key={item.title} className="soft-card p-6 text-left">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
              <p className="text-sm text-slate-500 mt-2">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-left">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-600 font-bold">Top mahsulotlar</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">Bugun eng ko'p tanlanayotgan taomlar</h2>
            </div>
            <button
              onClick={() => setSahifa('menu')}
              className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
            >
              Barchasini ko'rish →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {featured.map((taom) => (
              <div key={taom.id} className="product-card overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="badge">{taom.tag}</span>
                  <span className="text-sm font-bold text-amber-500">★ {taom.rating}</span>
                </div>
                <div className="text-6xl mb-4">{taom.rasm}</div>
                <h3 className="text-xl font-bold text-slate-800">{taom.nom}</h3>
                <p className="text-sm text-slate-500 mt-2">{taom.description}</p>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-black text-emerald-600">{taom.narx.toLocaleString()} so'm</p>
                    <p className="text-xs text-slate-400 line-through">{taom.oldPrice.toLocaleString()} so'm</p>
                  </div>
                  <button
                    onClick={() => setSahifa('order')}
                    className="bg-slate-900 text-white px-3 py-2 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all"
                  >
                    Buyurtma
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
