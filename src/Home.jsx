import React from 'react';

function Home({ setSahifa }) {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <span className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-1.5 rounded-full">🍎 Sog'lom Taom — Porloq Kelajak</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 mt-6 leading-tight">
          Maktabimizning <span className="text-green-600">Smart Oshxonasiga</span> Xush Kelibsiz!
        </h1>
        <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
          O'quvchilarimiz uchun har kuni issiq, sifatli va vitaminlarga boy taomlar hamda sarxil mevalarni taqdim etamiz. Navbatlarsiz onlayn buyurtma bering!
        </p>
        
        <div className="mt-8 flex justify-center gap-4">
          <button 
            onClick={() => setSahifa('menu')} 
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all"
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

        {/* Ustunliklarimiz */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-4xl mb-3">🥦</div>
            <h3 className="text-xl font-bold text-slate-800">100% Tabiiy</h3>
            <p className="text-sm text-slate-500 mt-2">Barcha mahsulotlar har kuni yangi va laboratoriya tekshiruvidan o'tgan holda keltiriladi.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-4xl mb-3">🧼</div>
            <h3 className="text-xl font-bold text-slate-800">Yuqori Gigiyena</h3>
            <p className="text-sm text-slate-500 mt-2">Oshxonamiz xalqaro sanitariya qoidalariga va toza-ozodalik standartlariga to'liq javob beradi.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-bold text-slate-800">Tezkor Xizmat</h3>
            <p className="text-sm text-slate-500 mt-2">Tanaffus vaqtida uzun navbatlarda turmaslik uchun onlayn buyurtma tizimi ishlaydi.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
