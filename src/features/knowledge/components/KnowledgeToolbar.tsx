import React from 'react';
import { Button, SearchInput } from '../../../components/ui';

const KnowledgeToolbar: React.FC = () => {
  return (
    <div className="knowledge-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
      <div style={{ width: '400px' }}>
        <SearchInput placeholder="Search knowledge library..." />
      </div>
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <Button variant="secondary">Filter</Button>
        <Button variant="secondary">Collections</Button>
        <Button variant="primary">Add Knowledge</Button>
      </div>
    </div>
  );
};

export default KnowledgeToolbar;
