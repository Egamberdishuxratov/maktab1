import React, { useState } from 'react';

function Reviews() {
  const [fikrlar, setFikrlar] = useState([
    { id: 1, ism: "Asalxon Toirova", kim: "Ota-ona", matn: "Farzandim har kuni oshxonadagi mastavani maqtab yeydi. Tozalikka juda yaxshi qarashar ekan, rahmat!", sana: "10.10.2026" },
    { id: 2, ism: "Jasur Komilov", kim: "9-A o'quvchisi", matn: "Onlayn buyurtma berish tizimi ochilgani juda zo'r bo'ldi, tanaffusda navbat kutmay srazu ovqatimni olib yeyapman.", sana: "11.10.2026" }
  ]);
  const [yangiIsm, setYangiIsm] = useState('');
  const [yangiMatn, setYangiMatn] = useState('');
  const [maqom, setMaqom] = useState("O'quvchi");

  const fikrQoshish = (e) => {
    e.preventDefault();
    if (!yangiIsm || !yangiMatn) return;

    const yangiFikr = {
      id: Date.now(),
      ism: yangiIsm,
      kim: maqom,
      matn: yangiMatn,
      sana: "Bugun"
    };

    setFikrlar([yangiFikr, ...fikrlar]);
    setYangiIsm('');
    setYangiMatn('');
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800">💬 Fikr va Mulohazalar</h2>
        <p className="text-slate-500 mt-2">Ota-onalarimiz va o'quvchilarimizning fikrlari biz uchun muhim</p>
      </div>

      {/* Fikr qoldirish formasi */}
      <form onSubmit={fikrQoshish} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm mb-10 space-y-4">
        <h4 className="text-lg font-bold text-slate-800">O'z fikringizni qoldiring</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Ism va familiyangiz" 
            className="px-4 py-2 border border-slate-200 rounded-xl outline-none focus:border-green-500 text-sm"
            value={yangiIsm}
            onChange={(e) => setYangiIsm(e.target.value)}
            required
          />
          <select 
            className="px-4 py-2 border border-slate-200 rounded-xl outline-none focus:border-green-500 text-sm bg-white"
            value={maqom}
            onChange={(e) => setMaqom(e.target.value)}
          >
            <option value="O'quvchi">O'quvchi</option>
            <option value="Ota-ona">Ota-ona</option>
            <option value="O'qituvchi">O'qituvchi</option>
          </select>
        </div>
        <textarea 
          placeholder="Fikringizni shu yerga yozing..." 
          rows="3"
          className="w-full px-4 py-2 border border-slate-200 rounded-xl outline-none focus:border-green-500 text-sm"
          value={yangiMatn}
          onChange={(e) => setYangiMatn(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-xl transition-all shadow-md text-sm">
          Fikrni yuborish
        </button>
      </form>

      {/* Fikrlar ro'yxati */}
      <div className="space-y-4">
        {fikrlar.map(fikr => (
          <div key={fikr.id} className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h5 className="font-bold text-slate-800">{fikr.ism}</h5>
                <span className="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded-md font-medium">{fikr.kim}</span>
              </div>
              <span className="text-xs text-slate-400">{fikr.sana}</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{fikr.matn}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;

