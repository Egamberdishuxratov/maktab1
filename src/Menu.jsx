import { useMemo, useState } from 'react';
import { menuItems } from './data';
import FoodCard from './FoodCard';

const categories = [
    { id: 'all', label: 'Barchasi' },
    { id: 'issiq', label: 'Issiq taomlar' },
    { id: 'salat', label: 'Salatlar' },
    { id: 'ichimlik', label: 'Ichimliklar' },
];

function Menu({ setSahifa }) {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('all');
    const [sort, setSort] = useState('popular');

    const filteredProducts = useMemo(() => {
        const products = menuItems.filter((product) => {
            const matchesCategory = category === 'all' || product.tur === category;
            const matchesSearch = `${product.nom} ${product.description}`.toLowerCase().includes(search.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        return [...products].sort((left, right) => {
            if (sort === 'price-asc') return left.narx - right.narx;
            if (sort === 'price-desc') return right.narx - left.narx;
            return right.rating - left.rating;
        });
    }, [category, search, sort]);

    return (
        <div className="page-inner">
            <header className="page-heading-row">
                <div>
                    <span className="section-kicker">HAR KUN YANGI TAYYORLANADI</span>
                    <h1>Bugungi menyu</h1>
                    <p>Sevimli taomingizni tanlang — buyurtma berish bir necha soniya oladi.</p>
                </div>
                <button className="primary-button compact-button" type="button" onClick={() => setSahifa('order')}>Buyurtma berish <span>→</span></button>
            </header>

            <div className="menu-toolbar">
                <label className="search-field">
                    <span aria-hidden="true">⌕</span>
                    <input
                        type="search"
                        placeholder="Taom nomi yoki tarkibini qidiring..."
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </label>
                <label className="sort-field">
                    <span>Tartiblash</span>
                    <select value={sort} onChange={(event) => setSort(event.target.value)}>
                        <option value="popular">Mashhurligi</option>
                        <option value="price-asc">Arzonidan</option>
                        <option value="price-desc">Qimmatidan</option>
                    </select>
                </label>
            </div>

            <div className="category-tabs" aria-label="Menyu bo'yicha filter">
                {categories.map((item) => (
                    <button
                        className={category === item.id ? 'category-tab is-active' : 'category-tab'}
                        type="button"
                        key={item.id}
                        aria-pressed={category === item.id}
                        onClick={() => setCategory(item.id)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            <div className="section-heading menu-results-heading">
                <div>
                    <h2>Taomlar <span className="result-count">{filteredProducts.length}</span></h2>
                </div>
                <span className="muted-copy">Bugun siz uchun tanlandi</span>
            </div>

            {filteredProducts.length > 0 ? (
                <div className="food-grid">
                    {filteredProducts.map((product) => (
                        <FoodCard key={product.id} product={product} onAction={() => setSahifa('order')} actionLabel="Tanlash" />
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <span>⌕</span>
                    <h2>Taom topilmadi</h2>
                    <p>Qidiruv so'zini yoki tanlangan bo'limni o'zgartirib ko'ring.</p>
                </div>
            )}
        </div>
    );
}

export default Menu;
