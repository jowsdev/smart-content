import React from 'react';

const StyleEditor: React.FC = () => {
  return (
    <div className="style-editor" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Style Customization</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <label style={{ fontSize: '12px', color: '#888' }}>Font Family</label>
          <select style={{ width: '100%', background: '#111', color: '#fff', border: '1px solid #333', padding: '6px' }}>
            <option>Inter</option>
            <option>Montserrat</option>
            <option>Impact</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default StyleEditor;
