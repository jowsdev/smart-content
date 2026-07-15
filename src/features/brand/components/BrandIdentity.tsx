import React from 'react';
import type { Brand } from '../types/brand.types';
import { Card } from '../../../components/ui/Card';
import { spacing } from '../../../styles/spacing';

interface BrandIdentityProps {
  brand: Brand;
}

export const BrandIdentity: React.FC<BrandIdentityProps> = ({ brand }) => {
  return (
    <div style={{ display: 'grid', gap: spacing.lg }}>
      <Card padding="medium">
        <h3>General Information</h3>
        <div style={{ display: 'grid', gap: 16 }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600 }}>Brand Name</label>
            <input type="text" defaultValue={brand.name} style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ddd' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600 }}>Description</label>
            <textarea defaultValue={brand.description} style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ddd', minHeight: 80 }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600 }}>Industry</label>
              <input type="text" defaultValue={brand.industry} style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ddd' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600 }}>Website</label>
              <input type="text" defaultValue={brand.website} style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ddd' }} />
            </div>
          </div>
        </div>
      </Card>

      <Card padding="medium">
        <h3>Core Values & Mission</h3>
        <div style={{ display: 'grid', gap: 16 }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600 }}>Mission Statement</label>
            <textarea defaultValue={brand.mission} style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ddd', minHeight: 60 }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600 }}>Vision</label>
            <textarea defaultValue={brand.vision} style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ddd', minHeight: 60 }} />
          </div>
        </div>
      </Card>
    </div>
  );
};
