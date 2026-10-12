import React, { useState } from 'react';

const taomlarMaoruzati = [
    { id: 1, nom: "Klassik Mastava", tur: "issiq", narx: 12000, kaloriya: "350 kkal", rasm: "🍲" },
    { id: 2, nom: "Maktab Somsasi", tur: "issiq", narx: 6000, kaloriya: "280 kkal", rasm: "🥐" },
    { id: 3, nom: "Meva sharbati (Kompot)", tur: "ichimlik", narx: 3000, kaloriya: "90 kkal", rasm: "🧃" },
    { id: 4, nom: "Vitaminga boy salat", tur: "salat", narx: 7000, kaloriya: "120 kkal", rasm: "🥗" },
    { id: 5, nom: "Tarvuzli yangi sharbat", tur: "ichimlik", narx: 5000, kaloriya: "110 kkal", rasm: "🍉" },
    { id: 6, nom: "Tovuqli Burger", tur: "issiq", narx: 15000, kaloriya: "420 kkal", rasm: "🍔" },
];

function Menu() {
    const [qidiruv, setQidiruv] = useState('');
    const [tanlanganTur, setTanlanganTur] = useState('all');

    const saralanganTaomlar = taomlarMaoruzati.filter(taom => {
        const turigaMos = tanlanganTur === 'all' || taom.tur === tanlanganTur;
        const qidiruvgaMos = taom.nom.toLowerCase().includes(qidiruv.toLowerCase());
        return turigaMos && qidiruvgaMos;
    });

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-800">📋 Oshxona Haftalik Menyusi</h2>
                <p className="text-slate-500 mt-2">Bugungi tansiq va shifobaxsh taomlarimiz bilan tanishing</p>
            </div>

            {/* Filtrlar */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
                <input
                    type="text"
                    placeholder="Taom nomini yozing..."
                    className="w-full md:max-w-xs px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-green-500"
                    value={qidiruv}
                    onChange={(e) => setQidiruv(e.target.value)}
                />
                <div className="flex flex-wrap gap-2">
                    {['all', 'issiq', 'ichimlik', 'salat'].map((tur) => (
                        <button
                            key={tur}
                            onClick={() => setTanlanganTur(tur)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${tanlanganTur === tur
                                    ? 'bg-green-600 text-white shadow-md'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                                }`}
                        >
                            {tur === 'all' ? 'Barchasi' : tur === 'issiq' ? '🔥 Issiq taomlar' : tur === 'ichimlik' ? '🧃 Ichimliklar' : '🥗 Salatlar'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {saralanganTaomlar.map(taom => (
                    <div key={taom.id} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
                        <span className="text-5xl mb-4">{taom.rasm}</span>
                        <h4 className="text-lg font-bold text-slate-800">{taom.nom}</h4>
                        <div className="flex justify-between w-full mt-4 text-sm px-2 text-slate-500">
                            <span>Energiya: <strong className="text-orange-500">{taom.kaloriya}</strong></span>
                            <span>Narxi: <strong className="text-green-600">{taom.narx.toLocaleString()} so'm</strong></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
