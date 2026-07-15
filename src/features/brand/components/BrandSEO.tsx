import React from 'react';
import type { BrandSEO as IBrandSEO } from '../types/brand.types';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';

interface BrandSEOProps {
  seo: IBrandSEO;
}

export const BrandSEO: React.FC<BrandSEOProps> = ({ seo }) => {
  return (
    <Card padding="medium">
      <h3>SEO Strategy</h3>
      <div style={{ display: 'grid', gap: 16 }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600 }}>Main Keywords</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 4 }}>
            {seo.mainKeywords.map(k => <Badge key={k} variant="secondary">{k}</Badge>)}
          </div>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600 }}>Global SEO Description</label>
          <p style={{ fontSize: '0.875rem' }}>{seo.description}</p>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600 }}>Title Template</label>
          <code style={{ fontSize: '0.875rem' }}>{seo.titleTemplate}</code>
        </div>
      </div>
    </Card>
  );
};
