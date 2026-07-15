import React from 'react';
import type { BrandSummary } from '../types/brand.types';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { spacing } from '../../../styles/spacing';
import { colors } from '../../../styles/colors';

interface BrandCardProps {
  brand: BrandSummary;
  onSelect: (id: string) => void;
}

export const BrandCard: React.FC<BrandCardProps> = ({ brand, onSelect }) => {
  return (
    <Card padding="medium">
      <div style={{ display: 'flex', gap: spacing.md, alignItems: 'center', marginBottom: spacing.md }}>
        <div style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: colors.background.light, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {brand.logo ? <img src={brand.logo} alt={brand.name} style={{ width: '100%' }} /> : <span>{brand.name[0]}</span>}
        </div>
        <div>
          <h3 style={{ margin: 0, fontSize: '1rem' }}>{brand.name}</h3>
          <span style={{ fontSize: '0.75rem', color: colors.text.muted }}>{brand.industry}</span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: spacing.sm, marginBottom: spacing.lg }}>
        <Badge variant="secondary">{brand.productCount} Products</Badge>
        <Badge variant="secondary">{brand.variableCount} Variables</Badge>
      </div>
      <Button variant="outline" fullWidth onClick={() => onSelect(brand.id)}>Manage Brand</Button>
    </Card>
  );
};
