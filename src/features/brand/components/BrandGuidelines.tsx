import React from 'react';
import type { BrandGuidelines as IBrandGuidelines } from '../types/brand.types';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { spacing } from '../../../styles/spacing';

interface BrandGuidelinesProps {
  guidelines: IBrandGuidelines;
}

export const BrandGuidelines: React.FC<BrandGuidelinesProps> = ({ guidelines }) => {
  return (
    <div style={{ display: 'grid', gap: spacing.lg }}>
      <Card padding="medium">
        <h3>Writing & Tone</h3>
        <div style={{ display: 'grid', gap: 16 }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600 }}>Writing Style</label>
            <p style={{ fontSize: '0.875rem' }}>{guidelines.writingStyle}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#666' }}>PREFERRED VOCABULARY</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 4 }}>
                {guidelines.preferredVocabulary.map(v => <Badge key={v} variant="success">{v}</Badge>)}
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#666' }}>FORBIDDEN WORDS</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 4 }}>
                {guidelines.forbiddenWords.map(v => <Badge key={v} variant="error">{v}</Badge>)}
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card padding="medium">
        <h3>Formatting & Compliance</h3>
        <div style={{ display: 'grid', gap: 16 }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600 }}>Emoji Rules</label>
            <p style={{ fontSize: '0.875rem' }}>{guidelines.emojiRules}</p>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600 }}>Compliance Rules</label>
            <p style={{ fontSize: '0.875rem' }}>{guidelines.complianceRules}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
