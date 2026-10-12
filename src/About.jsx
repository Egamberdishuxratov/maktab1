function About() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="text-center mb-10">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-600 font-bold">Biz haqimizda</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3">👩‍🍳 Smart oshxona haqida</h2>
        <p className="text-slate-500 mt-2">Sog'lom avlod ulg'ayishi yo'lida xizmat qilamiz</p>
      </div>

      <div className="soft-card p-8 space-y-6">
        <div>
          <h4 className="text-xl font-bold text-emerald-600 mb-2">Oshxona maqsadi</h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            Bizning asosiy maqsadimiz — o'quvchilarni tezkor, mazali va sanitariya-gigiyena talablariga to'liq mos keladigan tayyor ovqat bilan ta'minlashdir. Taomlarimiz tajribali parhezshunos (dietolog) shifokorlar nazorati ostida tuzilgan maxsus maktab menyusi asosida pishiriladi.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-6">
          <h4 className="text-xl font-bold text-slate-800 mb-3">🕒 Ish tartibi va vaqtlari</h4>
          <ul className="text-sm text-slate-600 space-y-2">
            <li>📆 <strong>Dushanba - Juma:</strong> 08:00 dan 16:00 gacha</li>
            <li>❌ <strong>Shanba - Yakshanba:</strong> Dam olish kuni</li>
            <li>🔔 <strong>Katta tanaffus vaqti:</strong> Asosiy issiq taomlar tarqatiladi.</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-6">
          <h4 className="text-xl font-bold text-slate-800 mb-3">📞 Bog'lanish va aloqa</h4>
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
