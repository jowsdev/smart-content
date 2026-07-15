import React from 'react';
import type { BrandSummary } from '../types/brand.types';
import { BrandCard } from './BrandCard';
import { spacing } from '../../../styles/spacing';

interface BrandGridProps {
  brands: BrandSummary[];
  onSelect: (id: string) => void;
}

export const BrandGrid: React.FC<BrandGridProps> = ({ brands, onSelect }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: spacing.lg,
      padding: spacing.md
    }}>
      {brands.map(brand => (
        <BrandCard key={brand.id} brand={brand} onSelect={onSelect} />
      ))}
    </div>
  );
};
