import React from 'react';

const CurveEditor: React.FC = () => {
  return (
    <div className="curve-editor" style={{ padding: '20px', background: '#111', height: '200px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px' }}>Curve Editor</h3>
      <div style={{ width: '100%', height: '120px', background: '#000', border: '1px solid #333', position: 'relative' }}>
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 0 100 C 20 100, 80 0, 100 0" stroke="#ff0055" fill="none" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default CurveEditor;
