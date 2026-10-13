import { useState } from 'react';

function Reviews() {
  const [fikrlar, setFikrlar] = useState([
    { id: 1, ism: 'Asalxon Toirova', kim: 'Ota-ona', matn: 'Farzandim har kuni oshxonadagi mastavani maqtab yeydi. Tozalikka juda yaxshi qarashar ekan, rahmat!', sana: '10.10.2026' },
    { id: 2, ism: 'Jasur Komilov', kim: "9-A o'quvchisi", matn: 'Onlayn buyurtma berish tizimi ochilgani juda zo\'r bo\'ldi, tanaffusda navbat kutmay srazu ovqatimni olib yeyapman.', sana: '11.10.2026' },
    { id: 3, ism: 'Dilshoda Akbarova', kim: 'O\'qituvchi', matn: 'Menyu xilma-xilligi va ovqatlarning mazasi ajoyib. Bolalar doim ham ushbu taomlarni istaydi.', sana: '12.10.2026' },
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
      sana: 'Bugun',
    };

    setFikrlar((current) => [yangiFikr, ...current]);
    setYangiIsm('');
    setYangiMatn('');
  };

  return (
    <div className="page-inner">
      <header className="page-heading-row">
        <div>
          <span className="section-kicker">JAMOAMIZDAN</span>
          <h1>Fikr va mulohazalar</h1>
          <p>O'quvchilar va ota-onalarning oshxona haqidagi fikrlari.</p>
        </div>
      </header>

      <form onSubmit={fikrQoshish} className="review-form">
        <h2>O'z fikringizni qoldiring</h2>
        <div className="review-form-row">
          <input
            type="text"
            placeholder="Ism va familiyangiz"
            aria-label="Ism va familiyangiz"
            value={yangiIsm}
            onChange={(e) => setYangiIsm(e.target.value)}
            required
          />
          <select
            aria-label="Maqomingiz"
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
          aria-label="Fikringiz"
          value={yangiMatn}
          onChange={(e) => setYangiMatn(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="primary-button compact-button">Fikrni yuborish <span>→</span></button>
      </form>

      <div className="review-list">
        {fikrlar.map((fikr) => (
          <article key={fikr.id} className="review-card">
            <div className="review-person">
              <span className="review-avatar">{fikr.ism.charAt(0)}</span>
              <div>
                <h3>{fikr.ism}</h3>
                <span>{fikr.kim}</span>
              </div>
            </div>
            <span className="review-date">{fikr.sana}</span>
            <div className="review-stars" aria-label="5 yulduz">★★★★★</div>
            <p>{fikr.matn}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
