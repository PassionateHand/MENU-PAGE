
import React from 'react';

export default function CategoryTabs({ categories, active, onSelect }) {
  return (
    <div style={{
      display: 'flex', gap: 8, overflowX: 'auto',
      paddingBottom: 8, marginBottom: 24, scrollbarWidth: 'none'
    }}>
      {categories.map((c) => (
        <button
          key={c.key}
          onClick={() => onSelect(c.key)}
          style={{
            flexShrink: 0,
            padding: '8px 16px',
            borderRadius: 20,
            border: '1px solid #e5e7eb',
            background: active === c.key ? '#111' : 'transparent',
            color: active === c.key ? '#fff' : '#6b7280',
            fontSize: 14,
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.15s ease-out',
            fontFamily: 'inherit',
          }}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}