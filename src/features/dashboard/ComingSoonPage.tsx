import React from 'react';
import { PageHeader } from '../../components/ui';

interface ComingSoonPageProps {
  title: string;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ title }) => {
  return (
    <div className="coming-soon">
      <PageHeader
        title={title}
        description="This feature is coming soon to Smart Content."
      />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '300px',
        backgroundColor: '#2a2a2a',
        borderRadius: '8px',
        border: '1px dashed #444',
        color: '#888'
      }}>
        Module Placeholder
      </div>
    </div>
  );
};

export default ComingSoonPage;
