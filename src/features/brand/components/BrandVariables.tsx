import React from 'react';
import type { BrandVariable } from '../types/variable.types';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';

interface BrandVariablesProps {
  variables: BrandVariable[];
}

export const BrandVariables: React.FC<BrandVariablesProps> = ({ variables }) => {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 16 }}>
        {variables.map(v => (
          <Card key={v.id} padding="small">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <code style={{ fontSize: '0.75rem', color: '#6366f1' }}>{'{{' + v.category + '.' + v.key + '}}'}</code>
              <Badge variant="outline">{v.category}</Badge>
            </div>
            <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{v.label}</div>
            <div style={{ fontSize: '0.875rem', marginTop: 4 }}>{v.value}</div>
          </Card>
        ))}
      </div>
      <Button variant="outline">+ Add Global Variable</Button>
    </div>
  );
};
