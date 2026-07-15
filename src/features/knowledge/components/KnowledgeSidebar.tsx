import React from 'react';
import { useCollections } from '../hooks/useCollections';
import { Card, Badge } from '../../../components/ui';

const KnowledgeSidebar: React.FC = () => {
  const { collections, loading } = useCollections();

  return (
    <aside className="knowledge-sidebar" style={{ width: '280px' }}>
      <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Collections</h3>
      {loading ? (
        <p>Loading collections...</p>
      ) : (
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          {collections.map((collection) => (
            <Card key={collection.id} style={{ cursor: 'pointer', padding: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: collection.color }}></div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{collection.name}</span>
                </div>
                <Badge variant="default">{collection.itemCount}</Badge>
              </div>
            </Card>
          ))}
        </div>
      )}

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Scopes</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', display: 'grid', gap: '0.5rem' }}>
          <li><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Global Library</a></li>
          <li><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Workspace Context</a></li>
          <li><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Project Assets</a></li>
          <li><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Shared with me</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default KnowledgeSidebar;
