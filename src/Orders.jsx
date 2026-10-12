import { useOrderHistory, orderStatuses } from './orderHistory';

const statusLabels = {
    accepted: 'Qabul qilindi',
    preparing: 'Tayyorlanmoqda',
    ready: 'Tayyor',
};

function Orders() {
    const { orders, error, advanceOrder } = useOrderHistory();

    return (
        <div className="order-history-page">
            <header className="order-history-heading">
                <p className="eyebrow">Buyurtmalar</p>
                <h1>Buyurtmalar tarixi</h1>
                <p className="muted-copy">Buyurtmalaringiz holatini shu yerdan kuzatib boring.</p>
            </header>

            {error && <p className="form-error" role="alert">{error}</p>}

            {orders.length === 0 ? (
                <section className="history-empty soft-card">
                    <span aria-hidden="true">🧾</span>
                    <h2>Hozircha buyurtmalar yo'q</h2>
                    <p>Buyurtma berganingizdan keyin uning holati shu yerda ko'rinadi.</p>
                </section>
            ) : (
                <div className="order-history-list">
                    {orders.map((order) => {
                        const currentStatusIndex = orderStatuses.indexOf(order.status);
                        const canAdvance = currentStatusIndex >= 0 && currentStatusIndex < orderStatuses.length - 1;
                        const formattedDate = new Intl.DateTimeFormat('uz-UZ', {
                            dateStyle: 'medium',
                            timeStyle: 'short',
                        }).format(new Date(order.createdAt));

                        return (
                            <article className="history-order soft-card" key={order.id}>
                                <header className="history-order-header">
                                    <div>
                                        <p className="eyebrow">{order.id}</p>
                                        <h2>{order.name}</h2>
                                    </div>
                                    <span className={`status-pill status-${order.status}`}>
                                        {statusLabels[order.status] || 'Holat noma’lum'}
                                    </span>
                                </header>

                                <div className="history-meta">
                                    <span>📞 {order.phone}</span>
                                    <span>🕒 Olib ketish: {order.time}</span>
                                    <span>📅 {formattedDate}</span>
                                </div>

                                <div className="status-steps" aria-label={`Buyurtma holati: ${statusLabels[order.status]}`}>
                                    {orderStatuses.map((status, index) => (
                                        <div
                                            className={`status-step ${index <= currentStatusIndex ? 'is-complete' : ''} ${index === currentStatusIndex ? 'is-current' : ''}`}
                                            key={status}
                                        >
                                            <span className="status-dot">{index < currentStatusIndex ? '✓' : index + 1}</span>
                                            <span>{statusLabels[status]}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="history-order-items">
                                    {order.items.map((item) => (
                                        <div className="summary-row" key={item.id}>
                                            <span>{item.rasm} {item.nom} × {item.quantity}</span>
                                            <strong>{(item.narx * item.quantity).toLocaleString()} so'm</strong>
                                        </div>
                                    ))}
                                    <div className="summary-row summary-total">
                                        <span>Jami</span>
                                        <strong>{order.total.toLocaleString()} so'm</strong>
                                    </div>
                                </div>

                                {canAdvance && (
                                    <button
                                        className="advance-status"
                                        type="button"
                                        onClick={() => advanceOrder(order.id)}
                                    >
                                        Keyingi holat: {statusLabels[orderStatuses[currentStatusIndex + 1]]}
                                    </button>
                                )}
                                {order.status === 'ready' && (
                                    <p className="ready-note" role="status">Buyurtmangizni oshxonadan olib ketishingiz mumkin.</p>
                                )}
                            </article>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Orders;
