import React from 'react';
import KnowledgeSidebar from './KnowledgeSidebar';

interface KnowledgeLayoutProps {
  children: React.ReactNode;
}

const KnowledgeLayout: React.FC<KnowledgeLayoutProps> = ({ children }) => {
  return (
    <div className="knowledge-layout" style={{ display: 'flex', gap: '2rem', height: '100%' }}>
      <KnowledgeSidebar />
      <div className="knowledge-main" style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default KnowledgeLayout;
