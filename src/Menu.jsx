import { useState } from 'react';
import { menuItems } from './data';

function Menu() {
    const [qidiruv, setQidiruv] = useState('');
    const [tanlanganTur, setTanlanganTur] = useState('all');

    const saralanganTaomlar = menuItems.filter((taom) => {
        const turigaMos = tanlanganTur === 'all' || taom.tur === tanlanganTur;
        const qidiruvgaMos = taom.nom.toLowerCase().includes(qidiruv.toLowerCase());
        return turigaMos && qidiruvgaMos;
    });

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <div className="text-center mb-10">
                <p className="text-sm uppercase tracking-[0.25em] text-emerald-600 font-bold">Menyu</p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3">📋 Oshxona Haftalik Menyusi</h2>
                <p className="text-slate-500 mt-2">Bugungi tanlov va shifobaxsh taomlarimiz bilan tanishing</p>
            </div>

            <div className="soft-card mb-8 p-4 md:p-6">
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                    <input
                        type="text"
                        placeholder="Taom nomini yozing..."
                        className="w-full md:max-w-xs px-4 py-2.5 rounded-xl border border-slate-200 bg-white outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                        value={qidiruv}
                        onChange={(e) => setQidiruv(e.target.value)}
                    />
                    <div className="flex flex-wrap gap-2">
                        {['all', 'issiq', 'ichimlik', 'salat'].map((tur) => (
                            <button
                                key={tur}
                                onClick={() => setTanlanganTur(tur)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${tanlanganTur === tur
                                    ? 'bg-emerald-600 text-white shadow-md'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                                }`}
                            >
                                {tur === 'all' ? 'Barchasi' : tur === 'issiq' ? '🔥 Issiq taomlar' : tur === 'ichimlik' ? '🧃 Ichimliklar' : '🥗 Salatlar'}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-800">Top taomlar ({saralanganTaomlar.length})</h3>
                <span className="text-sm text-slate-500">Har kuni yangi tayyorlov</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {saralanganTaomlar.map((taom) => (
                    <div key={taom.id} className="product-card flex flex-col text-left">
                        <div className="flex items-center justify-between mb-4">
                            <span className="badge">{taom.tag}</span>
                            <span className="text-sm font-bold text-amber-500">★ {taom.rating}</span>
                        </div>
                        <div className="text-6xl mb-4">{taom.rasm}</div>
                        <h4 className="text-xl font-bold text-slate-800">{taom.nom}</h4>
                        <p className="mt-2 text-sm text-slate-500">{taom.description}</p>

                        <div className="mt-5 space-y-2 text-sm text-slate-500">
                            <div className="flex items-center justify-between">
                                <span>Energiya</span>
                                <strong className="text-orange-500">{taom.kaloriya}</strong>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Narxi</span>
                                <strong className="text-emerald-600">{taom.narx.toLocaleString()} so'm</strong>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {saralanganTaomlar.length === 0 && (
                <div className="soft-card mt-8 p-8 text-center">
                    <h4 className="text-xl font-bold text-slate-800">Hech narsa topilmadi</h4>
                    <p className="text-slate-500 mt-2">Boshqa so\'z yoki tur tanlab ko\'ring.</p>
                </div>
            )}
        </div>
    );
}

export default Menu;
