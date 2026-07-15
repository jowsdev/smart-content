import React, { useState } from 'react';
import AssetLayout from '../components/layout/AssetLayout';
import AssetExplorer from '../components/browser/AssetExplorer';
import AssetGrid from '../components/browser/AssetGrid';
import AssetSearch from '../components/search/AssetSearch';
import AssetFilters from '../components/search/AssetFilters';
import AssetInspector from '../components/inspector/AssetInspector';
import CollectionTree from '../components/collections/CollectionTree';
import { useAssets } from '../hooks/useAssets';
import { Asset } from '../types/asset.types';

const AssetLibraryPage: React.FC = () => {
  const { assets, isLoading } = useAssets();
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  return (
    <AssetLayout>
      <div style={{ width: '240px', borderRight: '1px solid #333', overflowY: 'auto', background: '#111' }}>
        <AssetExplorer />
        <CollectionTree />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <AssetSearch />
        <AssetFilters />
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {isLoading ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>Loading assets...</div>
          ) : (
            <div onClick={() => setSelectedAsset(assets[0])}>
              <AssetGrid assets={assets} />
            </div>
          )}
        </div>
      </div>

      {selectedAsset && (
        <div style={{ width: '320px', borderLeft: '1px solid #333', overflowY: 'auto', background: '#111' }}>
          <div style={{ padding: '16px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between' }}>
            <strong>Asset Details</strong>
            <button onClick={() => setSelectedAsset(null)} style={{ background: 'transparent', border: 'none', color: '#888' }}>✕</button>
          </div>
          <AssetInspector asset={selectedAsset} />
        </div>
      )}
    </AssetLayout>
  );
};

export default AssetLibraryPage;
