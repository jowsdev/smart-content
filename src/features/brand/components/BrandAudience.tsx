import React from 'react';
import type { Audience } from '../types/audience.types';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { spacing } from '../../../styles/spacing';

interface BrandAudienceProps {
  audiences: Audience[];
}

export const BrandAudience: React.FC<BrandAudienceProps> = ({ audiences }) => {
  return (
    <div style={{ display: 'grid', gap: spacing.lg }}>
      {audiences.map(audience => (
        <Card key={audience.id} padding="medium">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <h3 style={{ margin: 0 }}>{audience.name}</h3>
            <Button variant="ghost" size="small">Edit</Button>
          </div>
          <p style={{ fontSize: '0.875rem', marginBottom: 16 }}>{audience.persona}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666' }}>PAIN POINTS</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 4 }}>
                {audience.painPoints.map(p => <Badge key={p} variant="outline">{p}</Badge>)}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666' }}>GOALS</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 4 }}>
                {audience.goals.map(g => <Badge key={g} variant="secondary">{g}</Badge>)}
              </div>
            </div>
          </div>
        </Card>
      ))}
      <Button variant="outline" fullWidth>+ Add New Audience Persona</Button>
    </div>
  );
};
