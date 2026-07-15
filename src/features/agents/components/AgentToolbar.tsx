import React from 'react';
import { Button, SearchInput } from '../../../components/ui';

interface AgentToolbarProps {
  onSearch: (term: string) => void;
  onFilterCategory: (category: string) => void;
}

const AgentToolbar: React.FC<AgentToolbarProps> = ({ onSearch, onFilterCategory }) => {
  return (
    <div className="agent-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', backgroundColor: '#2a2a2a', padding: '1rem', borderRadius: '8px' }}>
      <div className="toolbar-search" style={{ width: '300px' }}>
        <SearchInput
          placeholder="Search agents..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div className="toolbar-actions" style={{ display: 'flex', gap: '0.5rem' }}>
        <Button variant="secondary" size="sm" onClick={() => onFilterCategory('all')}>All</Button>
        <Button variant="secondary" size="sm" onClick={() => onFilterCategory('favorites')}>Favorites</Button>
        <Button variant="primary" size="sm">Create Agent</Button>
      </div>
    </div>
  );
};

export default AgentToolbar;
