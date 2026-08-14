import React, { useState, useMemo } from 'react';
import MenuHeader from './components/MenuHeader';
import CategoryTabs from './components/CategoryTabs';
import MenuGrid from './components/MenuGrid';
import CartBar from './components/CartBar';
import { categories, menuItems } from './data/menuData';

export default function App() {
  const [activeCat, setActiveCat] = useState('all');
  const [cart, setCart] = useState({});

  const filteredItems = useMemo(() => {
    return activeCat === 'all'
      ? menuItems
      : menuItems.filter((d) => d.cat === activeCat);
  }, [activeCat]);

  const addToCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, sans-serif',
      maxWidth: 720,
      margin: '0 auto',
      padding: '24px 16px',
      color: '#111',
    }}>
      <MenuHeader />
      <CategoryTabs
        categories={categories}
        active={activeCat}
        onSelect={setActiveCat}
      />
      <MenuGrid
        items={filteredItems}
        cart={cart}
        onAdd={addToCart}
      />
      <CartBar cart={cart} menuItems={menuItems} />
    </div>
  );
}