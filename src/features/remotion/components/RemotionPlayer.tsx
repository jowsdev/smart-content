import React from 'react';
import { useRemotionPlayer } from '../hooks/useRemotionPlayer';

interface RemotionPlayerProps {
  compositionId: string;
}

const RemotionPlayer: React.FC<RemotionPlayerProps> = ({ compositionId }) => {
  const { isPlaying, togglePlay } = useRemotionPlayer();

  return (
    <div className="remotion-player" style={{
      background: '#000',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <div style={{ color: '#666' }}>Remotion Engine View: {compositionId}</div>

      <div style={{
        position: 'absolute',
        bottom: '20px',
        display: 'flex',
        gap: '12px'
      }}>
        <button
          onClick={togglePlay}
          style={{
            background: '#fff',
            color: '#000',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export default RemotionPlayer;
