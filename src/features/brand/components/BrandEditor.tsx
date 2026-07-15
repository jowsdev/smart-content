import React, { useState } from 'react';
import type { Brand } from '../types/brand.types';
import { BrandSidebar } from './BrandSidebar';
import { BrandIdentity } from './BrandIdentity';
import { BrandVoice } from './BrandVoice';
import { BrandAudience } from './BrandAudience';
import { BrandProducts } from './BrandProducts';
import { BrandServices } from './BrandServices';
import { BrandVariables } from './BrandVariables';
import { BrandColors } from './BrandColors';
import { BrandTypography } from './BrandTypography';
import { BrandLogos } from './BrandLogos';
import { BrandSocialLinks } from './BrandSocialLinks';
import { BrandSEO } from './BrandSEO';
import { BrandGuidelines } from './BrandGuidelines';
import { BrandPreview } from './BrandPreview';
import { BrandLayout } from './BrandLayout';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { spacing } from '../../../styles/spacing';

interface BrandEditorProps {
  brand: Brand;
  onSave: (brand: Brand) => void;
  onCancel: () => void;
}

export const BrandEditor: React.FC<BrandEditorProps> = ({
  brand,
  onSave,
  onCancel
}) => {
  const [activeSection, setActiveSection] = useState('identity');

  const renderSection = () => {
    switch (activeSection) {
      case 'identity': return <BrandIdentity brand={brand} />;
      case 'voice': return <BrandVoice brand={brand} />;
      case 'audience': return <BrandAudience audiences={brand.audiences} />;
      case 'products': return (
        <div style={{ display: 'grid', gap: spacing.lg }}>
          <section>
            <h3>Products</h3>
            <BrandProducts products={brand.products} />
          </section>
          <section>
            <h3>Services</h3>
            <BrandServices services={brand.services} />
          </section>
        </div>
      );
      case 'variables': return <BrandVariables variables={brand.variables} />;
      case 'assets': return (
        <div style={{ display: 'grid', gap: spacing.lg }}>
          <BrandLogos logo={brand.logo} />
          <BrandColors colors={brand.colors} />
          <BrandTypography typography={brand.typography} />
          <BrandSocialLinks links={brand.socialLinks} />
        </div>
      );
      case 'seo': return <BrandSEO seo={brand.seo} />;
      case 'guidelines': return <BrandGuidelines guidelines={brand.guidelines} />;
      case 'preview': return <BrandPreview brand={brand} />;
      default: return null;
    }
  };

  return (
    <div>
      <BrandLayout
        sidebar={<BrandSidebar activeSection={activeSection} onSectionChange={setActiveSection} />}
        content={
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.lg }}>
            <div style={{ minHeight: 500 }}>
              {renderSection()}
            </div>

            <Card padding="medium" style={{ display: 'flex', justifyContent: 'flex-end', gap: spacing.md }}>
              <Button variant="ghost" onClick={onCancel}>Cancel</Button>
              <Button variant="primary" onClick={() => onSave(brand)}>Save Brand Kit</Button>
            </Card>
          </div>
        }
      />
    </div>
  );
};
