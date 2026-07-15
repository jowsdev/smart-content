import React from 'react';
import { Voice } from '../../types/voice.types';
import VoiceCard from './VoiceCard';

interface VoiceLibraryProps {
  voices: Voice[];
}

const VoiceLibrary: React.FC<VoiceLibraryProps> = ({ voices }) => {
  return (
    <div className="voice-library" style={{ padding: '16px' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '12px', color: '#888' }}>Voice Library</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '12px' }}>
        {voices.map(voice => (
          <VoiceCard key={voice.id} voice={voice} />
        ))}
      </div>
    </div>
  );
};

export default VoiceLibrary;
