import React from 'react';
import AudioTracks from './AudioTracks';
import VolumeControls from './VolumeControls';

const AudioMixer: React.FC = () => {
  return (
    <div className="audio-mixer" style={{ padding: '20px', background: '#111', height: '100%' }}>
      <h3 style={{ fontSize: '14px', marginBottom: '16px' }}>Audio Mixer</h3>
      <div style={{ display: 'flex', gap: '20px' }}>
        <VolumeControls label="Master" />
        <AudioTracks />
      </div>
    </div>
  );
};

export default AudioMixer;
