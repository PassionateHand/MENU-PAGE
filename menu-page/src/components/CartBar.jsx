import React from 'react';
import { fmtNaira } from '../utils/format';

export default function CartBar({ cart, menuItems }) {
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = menuItems.find((d) => d.id === Number(id));
    return sum + (item ? item.price * qty : 0);
  }, 0);

  return (
    <div style={{
      position: 'sticky', bottom: 0,
      margin: '24px -16px -24px', padding: 16,
      background: 'rgba(255,255,255,0.95)',
      borderTop: '1px solid #e5e7eb',
      backdropFilter: 'blur(8px)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <span style={{ fontSize: 14, color: '#6b7280' }}>
        <strong style={{ color: '#111', fontWeight: 500 }}>{count}</strong> items ·{' '}
        <strong style={{ color: '#111', fontWeight: 500 }}>{fmtNaira(total)}</strong>
      </span>

      <button
        disabled={count === 0}
        style={{
          padding: '10px 20px', borderRadius: 10, border: 'none',
          background: '#111', color: '#fff', fontSize: 14, fontWeight: 500,
          cursor: count === 0 ? 'not-allowed' : 'pointer',
          opacity: count === 0 ? 0.4 : 1,
          transition: 'opacity 0.15s ease-out',
          fontFamily: 'inherit',
        }}
      >
        View order
      </button>
    </div>
  );
}