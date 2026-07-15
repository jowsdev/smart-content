import React from 'react';
import { Scene } from '../../types/scene.types';

interface SceneCardProps {
  scene: Scene;
}

const SceneCard: React.FC<SceneCardProps> = ({ scene }) => {
  return (
    <div className="scene-card" style={{
      background: '#1a1a1a',
      borderRadius: '8px',
      overflow: 'hidden',
      border: '1px solid #333',
      cursor: 'pointer'
    }}>
      <div style={{ aspectRatio: '16/9', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        🎬
      </div>
      <div style={{ padding: '12px' }}>
        <h4 style={{ fontSize: '14px', marginBottom: '4px' }}>{scene.name}</h4>
        <div style={{ fontSize: '11px', color: '#666' }}>{scene.category} • {(scene.duration / 30).toFixed(1)}s</div>
      </div>
    </div>
  );
};

export default SceneCard;
