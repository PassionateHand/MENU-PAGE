import React from 'react';
import MenuCard from './MenuCard';

export default function MenuGrid({ items, cart, onAdd }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: 16,
    }}>
      {items.map((item) => (
        <MenuCard
          key={item.id}
          item={item}
          qty={cart[item.id] || 0}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}