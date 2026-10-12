import React, { useState } from 'react';

const taomlar = [
    { id: 1, nom: "Klassik Mastava", narx: 12000, rasm: "🍲" },
    { id: 2, nom: "Maktab Somsasi", narx: 6000, rasm: "🥐" },
    { id: 3, nom: "Meva sharbati (Kompot)", narx: 3000, rasm: "🧃" },
    { id: 4, nom: "Vitaminga boy salat", narx: 7000, rasm: "🥗" },
];

function Order() {
    const [savatcha, setSavatcha] = useState([]);
    const [sinf, setSinf] = useState('');
    const [ism, setIsm] = useState('');

    const savatchagaQoshish = (taom) => {
        const borTaom = savatcha.find(item => item.id === taom.id);
        if (borTaom) {
            setSavatcha(savatcha.map(item => item.id === taom.id ? { ...item, soni: item.soni + 1 } : item));
        } else {
            setSavatcha([...savatcha, { ...taom, soni: 1 }]);
        }
    };

    const umumiyNarx = savatcha.reduce((acc, item) => acc + (item.narx * item.soni), 0);

    const buyurtmaniYuborish = (e) => {
        e.preventDefault();
        if (!ism || !sinf || savatcha.length === 0) {
            alert("Iltimos, ma'lumotlarni to'ldiring va taom tanlang!");
            return;
        }
        alert(`Rahmat ${ism}! Buyurtmangiz qabul qilindi. Tanaffusda oshxonadan navbatsiz olib ketishingiz mumkin.`);
        setSavatcha([]);
        setIsm('');
        setSinf('');
    };

    return (
        <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chap tomon: Taomlar ro'yxati */}
            <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">🛒 Taomlarni Tanlang</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {taomlar.map(taom => (
                        <div key={taom.id} className="bg-white p-4 rounded-xl border border-slate-100 flex items-center justify-between shadow-sm">
                            <div className="flex items-center gap-3">
                                <span className="text-3xl">{taom.rasm}</span>
                                <div>
                                    <h5 className="font-bold text-slate-800">{taom.nom}</h5>
                                    <p className="text-sm text-green-600 font-semibold">{taom.narx.toLocaleString()} so'm</p>
                                </div>
                            </div>
                            <button
                                onClick={() => savatchagaQoshish(taom)}
                                className="bg-green-50 hover:bg-green-100 text-green-700 font-bold px-3 py-1.5 rounded-lg text-xs transition-all"
                            >
                                + Qo'shish
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* O'ng tomon: Savatcha va Forma */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-fit">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Sizning Savatchangiz</h3>

                {savatcha.length === 0 ? (
                    <p className="text-sm text-slate-400 py-4 text-center">Savatchangiz hozircha bo'sh 😕</p>
                ) : (
                    <div className="space-y-3 mb-6">
                        {savatcha.map(item => (
                            <div key={item.id} className="flex justify-between text-sm text-slate-600 border-b border-slate-50 pb-2">
                                <span>{item.rasm} {item.nom} (x{item.soni})</span>
                                <span className="font-semibold">{(item.narx * item.soni).toLocaleString()} so'm</span>
                            </div>
                        ))}
                        <div className="flex justify-between font-bold text-slate-800 pt-2 text-lg">
                            <span>Umumiy:</span>
                            <span className="text-green-600">{umumiyNarx.toLocaleString()} so'm</span>
                        </div>
                    </div>
                )}

                <form onSubmit={buyurtmaniYuborish} className="space-y-4 pt-4 border-t border-slate-100">
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">O'quvchi ismi</label>
                        <input
                            type="text"
                            required
                            placeholder="Ismingizni kiriting"
                            className="w-full mt-1 px-4 py-2 border border-slate-200 rounded-xl outline-none focus:border-green-500 text-sm"
                            value={ism}
                            onChange={(e) => setIsm(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">Sinfingiz</label>
                        <input
                            type="text"
                            required
                            placeholder="Masalan: 9-B"
                            className="w-full mt-1 px-4 py-2 border border-slate-200 rounded-xl outline-none focus:border-green-500 text-sm"
                            value={sinf}
                            onChange={(e) => setSinf(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-xl transition-all shadow-md">
                        🚀 Buyurtmani Tasdiqlash
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Order;
