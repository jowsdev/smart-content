import React from 'react';
import type { Product } from '../types/product.types';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';

interface BrandProductsProps {
  products: Product[];
}

export const BrandProducts: React.FC<BrandProductsProps> = ({ products }) => {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {products.map(p => (
        <Card key={p.id} padding="medium" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h4 style={{ margin: 0 }}>{p.name}</h4>
            <div style={{ fontSize: '0.75rem', color: '#666' }}>{p.category} • ${p.price}</div>
          </div>
          <Button variant="ghost" size="small">Edit</Button>
        </Card>
      ))}
      <Button variant="outline" fullWidth>+ Add New Product</Button>
    </div>
  );
};
