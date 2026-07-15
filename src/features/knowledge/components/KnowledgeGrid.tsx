import React from 'react';
import type { KnowledgeItem } from '../types/knowledge.types';
import KnowledgeCard from './KnowledgeCard';

interface KnowledgeGridProps {
  items: KnowledgeItem[];
  onSelectItem: (item: KnowledgeItem) => void;
}

const KnowledgeGrid: React.FC<KnowledgeGridProps> = ({ items, onSelectItem }) => {
  return (
    <div className="knowledge-grid" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '1.5rem'
    }}>
      {items.map(item => (
        <KnowledgeCard key={item.id} item={item} onClick={() => onSelectItem(item)} />
      ))}
    </div>
  );
};

export default KnowledgeGrid;
