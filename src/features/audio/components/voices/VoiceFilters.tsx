import React from 'react';

const VoiceFilters: React.FC = () => {
  return (
    <div className="voice-filters" style={{ padding: '12px 16px', borderBottom: '1px solid #222' }}>
      <select style={{ width: '100%', background: '#111', color: '#fff', border: 'none', fontSize: '12px' }}>
        <option>All Languages</option>
        <option>English</option>
        <option>French</option>
      </select>
    </div>
  );
};

export default VoiceFilters;
