import React from 'react';
import { Voice } from '../../types/voice.types';

interface VoiceCardProps {
  voice: Voice;
}

const VoiceCard: React.FC<VoiceCardProps> = ({ voice }) => {
  return (
    <div className="voice-card" style={{
      background: '#1a1a1a',
      borderRadius: '8px',
      padding: '12px',
      border: '1px solid #333',
      cursor: 'pointer'
    }}>
      <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{voice.name}</div>
      <div style={{ fontSize: '11px', color: '#666', marginTop: '4px' }}>{voice.language} • {voice.gender}</div>
      <button style={{ marginTop: '8px', width: '100%', background: '#222', border: 'none', color: '#aaa', padding: '4px', borderRadius: '4px', fontSize: '10px' }}>
        Preview
      </button>
    </div>
  );
};

export default VoiceCard;
