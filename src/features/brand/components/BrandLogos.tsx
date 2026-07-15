import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

interface BrandLogosProps {
  logo?: string;
}

export const BrandLogos: React.FC<BrandLogosProps> = ({ logo }) => {
  return (
    <Card padding="medium">
      <h4>Brand Logos</h4>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <div style={{ width: 80, height: 80, border: '1px dashed #ccc', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {logo ? <img src={logo} alt="Logo" style={{ maxWidth: '100%' }} /> : <span style={{ color: '#999' }}>No Logo</span>}
        </div>
        <Button variant="outline" size="small">Upload New</Button>
      </div>
    </Card>
  );
};
