import React from 'react';
import type { BrandTypography as IBrandTypography } from '../types/brand.types';
import { Card } from '../../../components/ui/Card';

interface BrandTypographyProps {
  typography: IBrandTypography;
}

export const BrandTypography: React.FC<BrandTypographyProps> = ({ typography }) => {
  return (
    <Card padding="medium">
      <h4>Typography</h4>
      <div>
        <div style={{ fontSize: '0.75rem', color: '#666' }}>Primary Font</div>
        <div style={{ fontSize: '1.25rem', fontFamily: typography.primaryFont }}>{typography.primaryFont}</div>
      </div>
      <div style={{ marginTop: 16 }}>
        <div style={{ fontSize: '0.75rem', color: '#666' }}>Base Size</div>
        <div>{typography.baseSize}</div>
      </div>
    </Card>
  );
};
