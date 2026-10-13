function About() {
  return (
    <div className="page-inner">
      <header className="page-heading-row">
        <div>
          <span className="section-kicker">BIZNING MAQSADIMIZ</span>
          <h1>Har bir tanaffusda yaxshi ta'm</h1>
          <p>O'quvchilar uchun mazali, to'yimli va qulay ovqatlanish tajribasi.</p>
        </div>
      </header>

      <section className="about-hero">
        <div className="about-hero-copy">
          <span className="about-mark">S</span>
          <h2>Yaxshi ovqat — yaxshi kunning bir qismi.</h2>
          <p>Smart Oshxona har kuni yangi masalliqlar, mehr bilan tayyorlangan taomlar va o'quvchilarga qulay xizmatni bir joyga jamlaydi.</p>
        </div>
        <div className="about-hero-image">
          <img src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=85" alt="Yangi va rang-barang taomlar dasturxoni" />
        </div>
      </section>

      <div className="about-grid">
        <section className="info-card">
          <span className="info-card-icon">✦</span>
          <h2>Bizning maqsad</h2>
          <p>O'quvchilarni tezkor, mazali va sanitariya-gigiyena talablariga mos ovqat bilan ta'minlaymiz. Maktab menyusi xilma-xil va kundalik ehtiyojlarni hisobga olgan holda tuziladi.</p>
        </section>
        <section className="info-card">
          <span className="info-card-icon">◷</span>
          <h2>Ish vaqti</h2>
          <p><strong>Dushanba – Juma:</strong> 08:00 dan 16:00 gacha</p>
          <p><strong>Shanba – Yakshanba:</strong> dam olish kuni</p>
          <p>Katta tanaffusda issiq taomlar tarqatiladi.</p>
        </section>
        <section className="info-card">
          <span className="info-card-icon">↗</span>
          <h2>Biz bilan bog'laning</h2>
          <p><strong>Ishonch telefoni:</strong><br />+998 (71) 234-56-78</p>
          <p><strong>Email:</strong><br />oshxona@maktab.uz</p>
        </section>
      </div>
    </div>
  );
}

export default About;
