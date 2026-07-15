import React from 'react';
import { Asset } from '../../types/asset.types';

interface AssetUsageProps {
  asset: Asset;
}

const AssetUsage: React.FC<AssetUsageProps> = ({ asset }) => {
  return (
    <div className="asset-usage">
      <h4 style={{ fontSize: '14px', marginBottom: '12px', color: '#888' }}>Usage</h4>
      {asset.usage.length === 0 ? (
        <div style={{ fontSize: '12px', color: '#666' }}>Not used in any projects</div>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px' }}>
          {asset.usage.map(ref => <li key={ref}>• {ref}</li>)}
        </ul>
      )}
    </div>
  );
};

export default AssetUsage;
