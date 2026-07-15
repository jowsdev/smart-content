import React from 'react';
import { useKnowledge } from '../hooks/useKnowledge';
import KnowledgeLayout from '../components/KnowledgeLayout';
import KnowledgeExplorer from '../components/KnowledgeExplorer';
import { PageHeader, Spinner } from '../../../components/ui';

const KnowledgePage: React.FC = () => {
  const { items, loading } = useKnowledge();

  return (
    <div className="knowledge-page">
      <PageHeader
        title="Knowledge & Context Engine"
        description="Centralized repository for brand guides, documentation, and research context."
      />

      <KnowledgeLayout>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
            <Spinner size="lg" />
          </div>
        ) : (
          <KnowledgeExplorer items={items} />
        )}
      </KnowledgeLayout>
    </div>
  );
};

export default KnowledgePage;
