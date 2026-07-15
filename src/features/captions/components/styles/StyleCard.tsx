import React from 'react';

interface StyleCardProps {
  name: string;
}

const StyleCard: React.FC<StyleCardProps> = ({ name }) => {
  return (
    <div className="style-card" style={{
      background: '#1a1a1a',
      borderRadius: '8px',
      padding: '12px',
      border: '1px solid #333',
      textAlign: 'center',
      cursor: 'pointer'
    }}>
      <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px' }}>Aa</div>
      <div style={{ fontSize: '11px', color: '#aaa' }}>{name}</div>
    </div>
  );
};

export default StyleCard;
