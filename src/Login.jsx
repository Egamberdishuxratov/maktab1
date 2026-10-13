import { useState } from 'react';
import { authenticateAccount, registerAccount } from './auth';

function Login({ onLogin }) {
  const [mode, setMode] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const isRegistration = mode === 'register';

  const changeMode = (nextMode) => {
    setMode(nextMode);
    setError('');
    setMessage('');
    setPassword('');
    setConfirmation('');
  };

  const submitCredentials = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('');

    if (isRegistration && password !== confirmation) {
      setError('Parol va tasdiqlash paroli bir xil emas.');
      return;
    }

    setSubmitting(true);
    try {
      if (isRegistration) {
        await registerAccount({ name, email, password });
        setName('');
        setPassword('');
        setConfirmation('');
        setMode('login');
        setMessage("Ro'yxatdan o'tish muvaffaqiyatli! Endi emailingiz va parolingiz bilan kiring.");
      } else {
        const account = await authenticateAccount({ email, password });
        onLogin(account);
      }
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "So'rovni bajarib bo'lmadi.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="login-screen">
      <section className="login-card">
        <div className="login-visual">
          <div className="login-brand">
            <span className="brand-mark">S</span>
            <span>SMART <strong>OSHXONA</strong></span>
          </div>
          <div className="login-visual-copy">
            <span className="login-kicker">MAKTAB OSHXONASI</span>
            <h1>Har kungi mazali tanaffusingiz shu yerdan boshlanadi.</h1>
            <p>Menyuni ko'ring, oldindan buyurtma bering va tayyor bo'lish holatini kuzating.</p>
          </div>
          <img
            className="login-food-image"
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85"
            alt="Yangi tayyorlangan taomlar"
          />
          <div className="login-image-caption">Yangi tayyorlanadi <span>✦</span> Mehr bilan tortiladi</div>
        </div>

        <div className="login-form-side">
          <div className="login-form-content">
            <div className="login-mobile-brand">
              <span className="brand-mark">S</span>
              <span>SMART <strong>OSHXONA</strong></span>
            </div>
            <span className="section-kicker">{isRegistration ? "YANGI HISOB" : 'XUSH KELIBSIZ'}</span>
            <h2>{isRegistration ? "Ro'yxatdan o'tish" : 'Hisobingizga kiring'}</h2>
            <p className="login-intro">
              {isRegistration
                ? 'Hisob yaratish uchun ma’lumotlaringizni kiriting.'
                : 'Davom etish uchun emailingiz va parolingizni kiriting.'}
            </p>

            <form className="login-form" onSubmit={submitCredentials}>
              {isRegistration && (
                <>
                  <label htmlFor="login-name">Ism va familiya</label>
                  <div className="login-input-wrap">
                    <span aria-hidden="true">♙</span>
                    <input
                      id="login-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Ismingizni kiriting"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      minLength={2}
                      required
                    />
                  </div>
                </>
              )}

              <label htmlFor="login-email">Elektron pochta</label>
              <div className="login-input-wrap">
                <span aria-hidden="true">@</span>
                <input
                  id="login-email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

              <div className="login-password-heading">
                <label htmlFor="login-password">Parol</label>
                {isRegistration && <span>Kamida 8 ta belgi</span>}
              </div>
              <div className="login-input-wrap">
                <span aria-hidden="true">⌑</span>
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete={isRegistration ? 'new-password' : 'current-password'}
                  placeholder="Parolingizni kiriting"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  minLength={8}
                  required
                />
                <button
                  className="password-toggle"
                  type="button"
                  aria-label={showPassword ? 'Parolni yashirish' : 'Parolni ko‘rsatish'}
                  onClick={() => setShowPassword((visible) => !visible)}
                >
                  {showPassword ? 'Yashirish' : 'Ko‘rsatish'}
                </button>
              </div>

              {isRegistration && (
                <>
                  <label htmlFor="login-confirm-password">Parolni tasdiqlang</label>
                  <div className="login-input-wrap">
                    <span aria-hidden="true">⌑</span>
                    <input
                      id="login-confirm-password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      placeholder="Parolni qayta kiriting"
                      value={confirmation}
                      onChange={(event) => setConfirmation(event.target.value)}
                      minLength={8}
                      required
                    />
                  </div>
                </>
              )}

              {error && <p className="login-feedback login-error" role="alert">{error}</p>}
              {message && <p className="login-feedback login-success" role="status">{message}</p>}

              <button className="login-submit" type="submit" disabled={submitting}>
                {submitting
                  ? 'Kuting...'
                  : isRegistration ? "Hisob yaratish" : 'Kirish'}
                {!submitting && <span>→</span>}
              </button>
            </form>

            <p className="login-switch">
              {isRegistration ? 'Hisobingiz bormi?' : 'Hali hisobingiz yo‘qmi?'}
              <button type="button" onClick={() => changeMode(isRegistration ? 'login' : 'register')}>
                {isRegistration ? 'Kirish' : "Ro'yxatdan o'tish"}
              </button>
            </p>

            <div className="login-demo-info">
              <span aria-hidden="true">ⓘ</span>
              Hisob ma’lumotlari ushbu brauzerda saqlanadi. Bu demo bo‘lib, haqiqiy himoyalangan kirish uchun server kerak.
            </div>
          </div>
          <div className="login-footer">© {new Date().getFullYear()} Smart Oshxona</div>
        </div>
      </section>
    </main>
  );
}

export default Login;
