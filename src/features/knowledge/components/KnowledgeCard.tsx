import React from 'react';
import type { KnowledgeItem } from '../types/knowledge.types';
import { Card, Badge } from '../../../components/ui';

interface KnowledgeCardProps {
  item: KnowledgeItem;
  onClick: () => void;
}

const KnowledgeCard: React.FC<KnowledgeCardProps> = ({ item, onClick }) => {
  return (
    <Card onClick={onClick} className="knowledge-card">
      <div style={{ marginBottom: '1rem' }}>
        <Badge variant="info">{item.type}</Badge>
      </div>
      <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{item.name}</h4>
      <p style={{ margin: 0, fontSize: '0.85rem', color: '#aaa', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
        {item.description}
      </p>
      <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {item.tags.slice(0, 3).map(tag => (
          <Badge key={tag} variant="default">{tag}</Badge>
        ))}
        {item.tags.length > 3 && <span style={{ fontSize: '0.75rem', color: '#666' }}>+{item.tags.length - 3}</span>}
      </div>
      <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #333', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#888' }}>
        <span>{item.documents.length} docs</span>
        <span>{item.language}</span>
      </div>
    </Card>
  );
};

export default KnowledgeCard;
