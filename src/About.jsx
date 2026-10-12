import React from 'react';

function About() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800">👩‍🍳 Biz Haqimizda</h2>
        <p className="text-slate-500 mt-2">Sog'lom avlod ulg'ayishi yo'lida xizmat qilamiz</p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
        <div>
          <h4 className="text-xl font-bold text-green-600 mb-2">Oshxona   Maqsadi:</h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            Bizning asosiy maqsadimiz — o'quvchilarni tezkor, mazali va eng muhimi sanitariya-gigiyena talablariga to'liq mos keladigan issiq ovqat bilan ta'minlashdir. Taomlarimiz tajribali parhezshunos (dietolog) shifokorlar nazorati ostida tuzilgan maxsus maktab menyusi asosida pishiriladi.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-6">
          <h4 className="text-xl font-bold text-slate-800 mb-3">🕒 Ish tartibi va Vaqtlari:</h4>
          <ul className="text-sm text-slate-600 space-y-2">
            <li>📆 <strong>Dushanba - Juma:</strong> 08:00 dan 16:00 gacha</li>
            <li>❌ <strong>Shanba - Yakshanba:</strong> Dam olish kuni</li>
            <li>🔔 <strong>Katta Tanaffus vaqti:</strong> Asosiy issiq taomlar tarqatiladi.</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-6">
          <h4 className="text-xl font-bold text-slate-800 mb-3">📞 Bog'lanish va Aloqa:</h4>
          <p className="text-sm text-slate-600">
            Agar sizda taomlar sifati yoki takliflar bo'lsa, quyidagi raqamlarga murojaat qilishingiz mumkin:<br />
            ☎️ <strong>Ishonch telefoni:</strong> +998 (71) 234-56-78<br />
            📧 <strong>Email:</strong> oshxona@maktab.uz
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
