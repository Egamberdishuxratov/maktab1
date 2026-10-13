function FoodCard({ product, onAction, actionLabel = 'Buyurtma berish' }) {
    return (
        <article className="food-card">
            <div className="food-card-image-wrap">
                <img
                    className="food-card-image"
                    src={product.imageUrl}
                    alt={product.nom}
                    loading="lazy"
                />
                <span className="food-tag">{product.tag}</span>
                <span className="food-rating">★ {product.rating}</span>
            </div>
            <div className="food-card-body">
                <div className="food-card-title-row">
                    <h3>{product.nom}</h3>
                    <span className="food-price">{product.narx.toLocaleString()} so'm</span>
                </div>
                <p className="food-description">{product.description}</p>
                <div className="food-card-meta">
                    <span>{product.kaloriya}</span>
                    <span>{product.tur === 'issiq' ? 'Issiq taom' : product.tur === 'ichimlik' ? 'Ichimlik' : 'Salat'}</span>
                </div>
                {onAction && (
                    <button className="food-card-action" type="button" onClick={() => onAction(product)}>
                        {actionLabel}
                    </button>
                )}
            </div>
        </article>
    );
}

export default FoodCard;
