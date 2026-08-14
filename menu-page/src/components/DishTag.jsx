import React from 'react';

const tagStyles = {
  spicy:   { background: 'rgba(239, 68, 68, 0.12)', color: '#ef4444' },
  popular: { background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' },
  veg:     { background: 'rgba(34, 197, 94, 0.12)', color: '#22c55e' },
  classic: { background: 'rgba(107, 114, 128, 0.12)', color: '#6b7280' },
};

export default function DishTag({ label }) {
  const style = tagStyles[label] || tagStyles.classic;
  return (
    <span style={{
      fontSize: 11,
      padding: '3px 10px',
      borderRadius: 6,
      fontWeight: 500,
      ...style
    }}>
      {label}
    </span>
  );
}