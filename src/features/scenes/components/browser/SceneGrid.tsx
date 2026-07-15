import React from 'react';
import { Scene } from '../../types/scene.types';
import SceneCard from './SceneCard';

interface SceneGridProps {
  scenes: Scene[];
}

const SceneGrid: React.FC<SceneGridProps> = ({ scenes }) => {
  return (
    <div className="scene-grid" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '20px',
      padding: '20px'
    }}>
      {scenes.map(scene => (
        <SceneCard key={scene.id} scene={scene} />
      ))}
    </div>
  );
};

export default SceneGrid;
