import React from 'react';
import { Card } from '../../../components/ui/Card';
import { SOCIAL_PLATFORMS } from '../constants/socialPlatforms';

interface BrandSocialLinksProps {
  links: Record<string, string>;
}

export const BrandSocialLinks: React.FC<BrandSocialLinksProps> = ({ links }) => {
  return (
    <Card padding="medium">
      <h4>Social Links</h4>
      <div style={{ display: 'grid', gap: 8 }}>
        {SOCIAL_PLATFORMS.map(platform => (
          <div key={platform} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ fontSize: '0.875rem', width: 80 }}>{platform}</span>
            <input
              type="text"
              placeholder="https://..."
              defaultValue={links[platform]}
              style={{ flex: 1, padding: '4px 8px', borderRadius: 4, border: '1px solid #ddd' }}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};
