import React from 'react';
import type { BrandService as IBrandService } from '../types/product.types';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

interface BrandServicesProps {
  services: IBrandService[];
}

export const BrandServices: React.FC<BrandServicesProps> = ({ services }) => {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {services.map(s => (
        <Card key={s.id} padding="medium" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h4 style={{ margin: 0 }}>{s.name}</h4>
            <div style={{ fontSize: '0.75rem', color: '#666' }}>{s.category}</div>
          </div>
          <Button variant="ghost" size="small">Edit</Button>
        </Card>
      ))}
      <Button variant="outline" fullWidth>+ Add New Service</Button>
    </div>
  );
};
