import React from 'react';

const TranslationPanel: React.FC = () => {
  return (
    <div className="translation-panel" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Translation (Beta)</h3>
      <select style={{ width: '100%', background: '#111', color: '#fff', border: '1px solid #333', padding: '8px' }}>
        <option>Translate to French</option>
        <option>Translate to Spanish</option>
      </select>
    </div>
  );
};

export default TranslationPanel;
