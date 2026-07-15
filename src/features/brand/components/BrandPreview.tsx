import React from 'react';
import type { Brand } from '../types/brand.types';
import { Card } from '../../../components/ui/Card';
import { brandService } from '../services/brand.service';
import { colors } from '../../../styles/colors';

interface BrandPreviewProps {
  brand: Brand;
}

export const BrandPreview: React.FC<BrandPreviewProps> = ({ brand }) => {
  const context = brandService.compileContext(brand);

  return (
    <Card padding="medium">
      <h3 style={{ marginTop: 0 }}>Context Compiler Output</h3>
      <p style={{ fontSize: '0.875rem', color: colors.text.secondary }}> This is the information that will be injected into AI prompts when this brand is active.</p>
      <pre style={{
        backgroundColor: '#1e1e1e',
        color: '#d4d4d4',
        padding: 16,
        borderRadius: 4,
        fontSize: '0.875rem',
        whiteSpace: 'pre-wrap',
        fontFamily: 'monospace'
      }}>
        {context}
      </pre>
    </Card>
  );
};
