import React from 'react';

const GenerationSettings: React.FC = () => {
  return (
    <div className="generation-settings" style={{ padding: '20px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '16px' }}>Settings</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '8px' }}>Provider</label>
          <select style={{ width: '100%', background: '#111', border: '1px solid #333', padding: '8px', color: '#fff' }}>
            <option>OpenAI DALL-E 3</option>
            <option>Flux Pro</option>
            <option>Stable Diffusion XL</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '8px' }}>Size</label>
          <select style={{ width: '100%', background: '#111', border: '1px solid #333', padding: '8px', color: '#fff' }}>
            <option>1024x1024 (Square)</option>
            <option>1024x1792 (Portrait)</option>
            <option>1792x1024 (Landscape)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default GenerationSettings;
