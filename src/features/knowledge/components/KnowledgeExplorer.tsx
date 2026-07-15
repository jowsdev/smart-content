import React, { useState } from 'react';
import type { KnowledgeItem } from '../types/knowledge.types';
import KnowledgeGrid from './KnowledgeGrid';
import KnowledgeToolbar from './KnowledgeToolbar';
import KnowledgeDetails from './KnowledgeDetails';

interface KnowledgeExplorerProps {
  items: KnowledgeItem[];
}

const KnowledgeExplorer: React.FC<KnowledgeExplorerProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<KnowledgeItem | null>(null);

  return (
    <div className="knowledge-explorer">
      <KnowledgeToolbar />
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ flex: 1 }}>
          <KnowledgeGrid items={items} onSelectItem={setSelectedItem} />
        </div>
        {selectedItem && (
          <aside style={{ width: '400px' }}>
            <KnowledgeDetails item={selectedItem} onClose={() => setSelectedItem(null)} />
          </aside>
        )}
      </div>
    </div>
  );
};

export default KnowledgeExplorer;
