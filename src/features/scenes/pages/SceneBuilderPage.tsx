import React, { useState } from 'react';
import SceneLayout from '../components/layout/SceneLayout';
import SceneExplorer from '../components/browser/SceneExplorer';
import SceneGrid from '../components/browser/SceneGrid';
import SceneEditor from '../components/editor/SceneEditor';
import SceneTemplates from '../components/library/SceneTemplates';
import { useScenes } from '../hooks/useScenes';

const SceneBuilderPage: React.FC = () => {
  const { scenes, isLoading } = useScenes();
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <SceneLayout>
        <SceneEditor />
      </SceneLayout>
    );
  }

  return (
    <SceneLayout>
      <div style={{ width: '240px', borderRight: '1px solid #333', overflowY: 'auto', background: '#111' }}>
        <SceneExplorer />
        <SceneTemplates />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {isLoading ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>Loading scenes...</div>
          ) : (
            <SceneGrid scenes={scenes} />
          )}
          <div style={{ padding: '24px', textAlign: 'center' }}>
            <button
              onClick={() => setIsEditing(true)}
              style={{ background: '#0070f3', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '4px', cursor: 'pointer' }}
            >
              + Create New Scene
            </button>
          </div>
        </div>
      </div>
    </SceneLayout>
  );
};

export default SceneBuilderPage;
