import React from 'react';

export default function MenuHeader() {
  return (
    <div style={{ textAlign: 'center', marginBottom: 32 }}>
      <h1 style={{ fontSize: 28, fontWeight: 500, margin: '0 0 6px', letterSpacing: 0.5 }}>
        Ọjà Kitchen
      </h1>
      <p style={{ fontSize: 15, color: '#6b7280', margin: 0 }}>
        Authentic Nigerian flavors, made with love
      </p>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 12,
        padding: '6px 14px', borderRadius: 20, border: '1px solid #e5e7eb',
        fontSize: 12, color: '#9ca3af'
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        House specials marked with fire
      </div>
    </div>
  );
}