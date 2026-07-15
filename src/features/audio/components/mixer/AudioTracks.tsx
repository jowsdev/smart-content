import React from 'react';
import VolumeControls from './VolumeControls';

const AudioTracks: React.FC = () => {
  return (
    <div className="audio-tracks" style={{ display: 'flex', gap: '12px' }}>
      <VolumeControls label="Voice" />
      <VolumeControls label="Music" />
      <VolumeControls label="SFX" />
    </div>
  );
};

export default AudioTracks;
