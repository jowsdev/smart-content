import React from 'react';
import type { Brand } from '../types/brand.types';
import { Card } from '../../../components/ui/Card';
import { spacing } from '../../../styles/spacing';

interface BrandVoiceProps {
  brand: Brand;
}

export const BrandVoice: React.FC<BrandVoiceProps> = ({ brand }) => {
  const voices = ['Friendly', 'Professional', 'Luxury', 'Corporate', 'Minimal', 'Technical', 'Playful', 'Educational', 'Premium', 'Conversational', 'Custom'];

  return (
    <div style={{ display: 'grid', gap: spacing.lg }}>
      <Card padding="medium">
        <h3>Voice & Tone</h3>
        <div style={{ display: 'grid', gap: 16 }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600 }}>Brand Voice</label>
            <select defaultValue={brand.voice} style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ddd' }}>
              {voices.map(v => <option key={v}>{v}</option>)}
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600 }}>Brand Tone</label>
            <textarea defaultValue={brand.tone} style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ddd', minHeight: 80 }} />
          </div>
        </div>
      </Card>

      <Card padding="medium">
        <h3>Communication Values</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {brand.values.map(val => (
            <div key={val} style={{ padding: '4px 12px', backgroundColor: '#f0f0f0', borderRadius: 16, fontSize: '0.875rem' }}>{val}</div>
          ))}
          <button style={{ padding: '4px 12px', border: '1px dashed #ccc', borderRadius: 16, backgroundColor: 'transparent', cursor: 'pointer' }}>+ Add Value</button>
        </div>
      </Card>
    </div>
  );
};
