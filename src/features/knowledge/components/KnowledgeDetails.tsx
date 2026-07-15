import React from 'react';
import type { KnowledgeItem } from '../types/knowledge.types';
import { Card, Badge, Button } from '../../../components/ui';

interface KnowledgeDetailsProps {
  item: KnowledgeItem;
  onClose: () => void;
}

const KnowledgeDetails: React.FC<KnowledgeDetailsProps> = ({ item, onClose }) => {
  return (
    <Card className="knowledge-details">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <Badge variant="info">{item.type}</Badge>
        <Button variant="ghost" size="sm" onClick={onClose}>Close</Button>
      </div>

      <h3 style={{ margin: '0 0 1rem 0' }}>{item.name}</h3>
      <p style={{ fontSize: '0.9rem', color: '#ccc', lineHeight: '1.6' }}>{item.description}</p>

      <div style={{ marginTop: '2rem' }}>
        <h4 style={{ fontSize: '0.9rem', color: '#888', textTransform: 'uppercase' }}>Documents</h4>
        <div style={{ display: 'grid', gap: '0.75rem', marginTop: '0.75rem' }}>
          {item.documents.map(doc => (
            <div key={doc.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', backgroundColor: '#252525', borderRadius: '4px', fontSize: '0.85rem' }}>
              <span style={{ fontSize: '1.2rem' }}>📄</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500 }}>{doc.name}</div>
                <div style={{ fontSize: '0.75rem', color: '#666' }}>{doc.format} • {(doc.size / 1024).toFixed(1)} KB</div>
              </div>
              <Button variant="outline" size="sm">Preview</Button>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '1rem', backgroundColor: '#252525', borderRadius: '8px', fontSize: '0.85rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.7rem', color: '#888', textTransform: 'uppercase' }}>Author</label>
          <span>{item.author}</span>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.7rem', color: '#888', textTransform: 'uppercase' }}>Collection</label>
          <span>{item.collectionId}</span>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.7rem', color: '#888', textTransform: 'uppercase' }}>Created</label>
          <span>{new Date(item.createdAt).toLocaleDateString()}</span>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.7rem', color: '#888', textTransform: 'uppercase' }}>Status</label>
          <Badge variant="success">{item.status}</Badge>
        </div>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem' }}>
        <Button variant="primary" fullWidth>Edit Knowledge</Button>
        <Button variant="secondary">Actions</Button>
      </div>
    </Card>
  );
};

export default KnowledgeDetails;
