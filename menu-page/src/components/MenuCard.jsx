import React from 'react';
import DishTag from './DishTag';
import { fmtNaira } from '../utils/format';

export default function MenuCard({ item, qty, onAdd }) {
  return (
    <div
      style={{
        border: `1px solid ${item.featured ? '#111' : '#e5e7eb'}`,
        borderRadius: 12,
        padding: 16,
        background: item.featured ? '#f9fafb' : '#fff',
        transition: 'all 0.15s ease-out',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#111';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = item.featured ? '#111' : '#e5e7eb';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Image */}
      <div style={{
        width: '100%',
        height: 160,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 12,
        background: '#f3f4f6',
      }}>
        <img
          src={item.image}
          alt={item.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
          loading="lazy"
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
        <h3 style={{ fontSize: 16, fontWeight: 500, margin: 0, lineHeight: 1.3 }}>
          {item.name}
        </h3>
        <span style={{ fontSize: 15, fontWeight: 500, whiteSpace: 'nowrap', marginLeft: 8 }}>
          {fmtNaira(item.price)}
        </span>
      </div>

      <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.5, margin: '0 0 12px' }}>
        {item.desc}
      </p>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {item.tags.map((t) => <DishTag key={t} label={t} />)}
      </div>

      <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 12, color: '#9ca3af', fontWeight: 500 }}>
          {qty > 0 ? `${qty} in cart` : ''}
        </span>

        <button
          onClick={() => onAdd(item.id)}
          style={{
            width: 32, height: 32, borderRadius: 8,
            border: '1px solid #e5e7eb', background: 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', transition: 'all 0.15s ease-out',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#111'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'inherit'; }}
          aria-label={`Add ${item.name}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </div>
  );
}