import React, { useState } from 'react';
import { useBrand } from '../hooks/useBrand';
import { BrandHeader } from '../components/BrandHeader';
import { BrandGrid } from '../components/BrandGrid';
import { BrandEditor } from '../components/BrandEditor';
import { CreateBrandDialog } from '../components/CreateBrandDialog';
import { Spinner } from '../../../components/ui/Spinner';
import { Button } from '../../../components/ui/Button';

const BrandPage: React.FC = () => {
  const [selectedBrandId, setSelectedBrandId] = useState<string | null>(null);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const { brands, activeBrand, isLoading, save } = useBrand(selectedBrandId || undefined);

  const handleSelect = (id: string) => setSelectedBrandId(id);
  const handleBack = () => setSelectedBrandId(null);

  if (isLoading) return <div style={{ display: 'flex', justifyContent: 'center', padding: 100 }}><Spinner size="large" /></div>;

  return (
    <div style={{ height: '100%' }}>
      {!selectedBrandId ? (
        <>
          <BrandHeader onCreate={() => setShowCreateDialog(true)} />
          <BrandGrid brands={brands} onSelect={handleSelect} />
        </>
      ) : (
        <>
          <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 16 }}>
            <Button variant="ghost" onClick={handleBack}>← Back to Kits</Button>
            <h2 style={{ margin: 0 }}>{activeBrand?.name}</h2>
          </div>
          {activeBrand && (
            <BrandEditor
              brand={activeBrand}
              onSave={async (updated) => {
                await save(updated);
                handleBack();
              }}
              onCancel={handleBack}
            />
          )}
        </>
      )}

      {showCreateDialog && (
        <CreateBrandDialog
          onClose={() => setShowCreateDialog(false)}
          onCreate={() => setShowCreateDialog(false)}
        />
      )}
    </div>
  );
};

export default BrandPage;
