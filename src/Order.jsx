import { useState } from 'react';
import { menuItems } from './data';
import { useOrderHistory } from './orderHistory';
import FoodCard from './FoodCard';

const createOrderId = () => `ORD-${Date.now().toString().slice(-6)}`;

function Order() {
    const [cart, setCart] = useState([]);
    const [step, setStep] = useState('products');
    const [cartOpen, setCartOpen] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [time, setTime] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const { saveOrder, error: historyError } = useOrderHistory();

    const addToCart = (product) => {
        setCart((current) => {
            const existing = current.find((item) => item.id === product.id);
            return existing
                ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
                : [...current, { ...product, quantity: 1 }];
        });
    };

    const changeQuantity = (id, amount) => {
        setCart((current) =>
            current
                .map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (id) => {
        setCart((current) => current.filter((item) => item.id !== id));
    };

    const total = cart.reduce((sum, item) => sum + item.narx * item.quantity, 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    const submitOrder = (event) => {
        event.preventDefault();
        if (cart.length === 0) return;

        const order = {
            id: createOrderId(),
            name: name.trim(),
            phone: phone.trim(),
            time,
            items: cart.map(({ id, nom, narx, imageUrl, quantity }) => ({ id, nom, narx, imageUrl, quantity })),
            total,
            status: 'accepted',
            createdAt: new Date().toISOString(),
        };

        if (saveOrder(order)) {
            setCart([]);
            setName('');
            setPhone('');
            setTime('');
            setStep('products');
            setSuccessMessage(`Rahmat, ${order.name}! Buyurtmangiz ${order.id} raqami bilan qabul qilindi.`);
        }
    };

    const renderCartItems = () => (
        cart.length === 0 ? (
            <p className="cart-empty">Savatchangiz hozircha bo'sh 😕</p>
        ) : (
            <>
                <div className="cart-items">
                    {cart.map((item) => (
                        <article className="cart-item" key={item.id}>
                            <div className="cart-item-heading">
                                <img className="cart-thumbnail" src={item.imageUrl} alt="" />
                                <div className="cart-item-details">
                                    <h4>{item.nom}</h4>
                                    <p>{(item.narx * item.quantity).toLocaleString()} so'm</p>
                                </div>
                            </div>
                            <div className="cart-item-actions">
                                <div className="quantity-control" aria-label={`${item.nom} miqdori`}>
                                    <button type="button" aria-label="Kamaytirish" onClick={() => changeQuantity(item.id, -1)}>−</button>
                                    <span>{item.quantity}</span>
                                    <button type="button" aria-label="Ko'paytirish" onClick={() => changeQuantity(item.id, 1)}>+</button>
                                </div>
                                <button className="remove-item" type="button" onClick={() => removeFromCart(item.id)}>
                                    O'chirish
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="cart-total">
                    <span>Jami</span>
                    <strong>{total.toLocaleString()} so'm</strong>
                </div>
            </>
        )
    );

    return (
        <div className="order-page">
            <div className="order-content">
                {step === 'products' ? (
                    <>
                        <header className="order-heading">
                            <div>
                                <p className="eyebrow">Buyurtma</p>
                                <h1>Taomlarni tanlang</h1>
                                <p className="muted-copy">Kerakli mahsulotlarni savatchaga qo'shing.</p>
                            </div>
                            <span className="product-count">{menuItems.length} ta mahsulot</span>
                        </header>

                        {successMessage && (
                            <div className="success-message" role="status">
                                <span aria-hidden="true">✓</span> {successMessage}
                            </div>
                        )}

                        <div className="order-product-grid">
                            {menuItems.map((product) => (
                                <FoodCard key={product.id} product={product} onAction={addToCart} actionLabel="Savatchaga" />
                            ))}
                        </div>
                    </>
                ) : (
                    <section className="checkout-panel">
                        <button className="back-link" type="button" onClick={() => setStep('products')}>
                            ← Mahsulot tanlashga qaytish
                        </button>
                        <p className="eyebrow">2-qadam · Ma'lumotlar</p>
                        <h1>Buyurtmani yakunlash</h1>
                        <p className="muted-copy">Ismingiz, telefon raqamingiz va olib ketish vaqtini kiriting.</p>

                        <div className="checkout-summary">
                            <div className="checkout-summary-title">
                                <strong>Siz tanlagan mahsulotlar</strong>
                                <button type="button" onClick={() => setCartOpen(true)}>Tahrirlash</button>
                            </div>
                            {cart.map((item) => (
                                <div className="summary-row" key={item.id}>
                                    <span className="summary-product"><img src={item.imageUrl} alt="" /> {item.nom} × {item.quantity}</span>
                                    <strong>{(item.narx * item.quantity).toLocaleString()} so'm</strong>
                                </div>
                            ))}
                            <div className="summary-row summary-total">
                                <span>Jami</span>
                                <strong>{total.toLocaleString()} so'm</strong>
                            </div>
                        </div>

                        <form className="checkout-form" onSubmit={submitOrder}>
                            <label>
                                Ism va familiya
                                <input
                                    autoComplete="name"
                                    type="text"
                                    placeholder="Ismingizni kiriting"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Telefon raqami
                                <input
                                    autoComplete="tel"
                                    type="tel"
                                    inputMode="tel"
                                    placeholder="+998 90 123 45 67"
                                    pattern="(\+998|998|0)?[0-9\s()-]{9,15}"
                                    title="O'zbekiston telefon raqamini kiriting"
                                    value={phone}
                                    onChange={(event) => setPhone(event.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Olib ketish vaqti
                                <input
                                    type="time"
                                    value={time}
                                    onChange={(event) => setTime(event.target.value)}
                                    required
                                />
                            </label>
                            {historyError && <p className="form-error" role="alert">{historyError}</p>}
                            <button className="submit-order" type="submit" disabled={cart.length === 0}>
                                Buyurtmani tasdiqlash
                            </button>
                        </form>
                    </section>
                )}
            </div>

            <button
                className="cart-fab"
                type="button"
                onClick={() => setCartOpen(true)}
                aria-label={`Savatchani ochish, ${itemCount} ta mahsulot`}
            >
                <span aria-hidden="true">🛒</span>
                <span>Savatcha</span>
                <span className="cart-count">{itemCount}</span>
            </button>

            {cartOpen && (
                <div className="drawer-backdrop" onMouseDown={(event) => {
                    if (event.target === event.currentTarget) setCartOpen(false);
                }}>
                    <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
                        <header className="drawer-header">
                            <div>
                                <p className="eyebrow">Tanlanganlar</p>
                                <h2 id="cart-title">Savatcha ({itemCount})</h2>
                            </div>
                            <button type="button" className="close-drawer" onClick={() => setCartOpen(false)} aria-label="Yopish">×</button>
                        </header>
                        {renderCartItems()}
                        <button
                            className="submit-order drawer-checkout"
                            type="button"
                            disabled={cart.length === 0}
                            onClick={() => {
                                setCartOpen(false);
                                setStep('checkout');
                                setSuccessMessage('');
                            }}
                        >
                            Keyingi qadam: ma'lumotlarni kiriting
                        </button>
                    </aside>
                </div>
            )}
        </div>
    );
}

export default Order;
