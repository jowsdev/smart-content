import React from 'react';

interface PresetCardProps {
  name: string;
  category: string;
}

const PresetCard: React.FC<PresetCardProps> = ({ name, category }) => {
  return (
    <div className="preset-card" style={{ padding: '12px', background: '#222', borderRadius: '4px', cursor: 'pointer' }}>
      <div style={{ fontSize: '10px', color: '#666', textTransform: 'uppercase' }}>{category}</div>
      <div style={{ fontSize: '12px', fontWeight: 'bold' }}>{name}</div>
    </div>
  );
};

export default PresetCard;
