import React from 'react';
import type { BrandColors as IBrandColors } from '../types/brand.types';
import { Card } from '../../../components/ui/Card';
import { spacing } from '../../../styles/spacing';

interface BrandColorsProps {
  colors: IBrandColors;
}

export const BrandColors: React.FC<BrandColorsProps> = ({ colors }) => {
  return (
    <Card padding="medium">
      <h4>Brand Colors</h4>
      <div style={{ display: 'flex', gap: spacing.md }}>
        <div style={{ flex: 1 }}>
          <div style={{ height: 60, backgroundColor: colors.primary, borderRadius: 4, marginBottom: 4 }} />
          <div style={{ fontSize: '0.75rem', textAlign: 'center' }}>Primary: {colors.primary}</div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ height: 60, backgroundColor: colors.secondary, borderRadius: 4, marginBottom: 4 }} />
          <div style={{ fontSize: '0.75rem', textAlign: 'center' }}>Secondary: {colors.secondary}</div>
        </div>
      </div>
    </Card>
  );
};
