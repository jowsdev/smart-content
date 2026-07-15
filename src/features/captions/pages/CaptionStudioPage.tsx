import React from 'react';
import CaptionLayout from '../components/layout/CaptionLayout';
import CaptionEditor from '../components/editor/CaptionEditor';
import StyleBrowser from '../components/styles/StyleBrowser';
import CaptionPreview from '../components/preview/CaptionPreview';
import CaptionInspector from '../components/editor/CaptionInspector';
import ExportPanel from '../components/importExport/ExportPanel';
import TranslationPanel from '../components/translation/TranslationPanel';

const CaptionStudioPage: React.FC = () => {
  return (
    <CaptionLayout>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
          <div style={{ width: '280px', borderRight: '1px solid #333', overflowY: 'auto', background: '#111' }}>
            <StyleBrowser />
            <TranslationPanel />
            <ExportPanel />
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <CaptionPreview />
            <CaptionEditor />
          </div>

          <div style={{ width: '300px', borderLeft: '1px solid #333', overflowY: 'auto', background: '#111' }}>
            <CaptionInspector />
          </div>
        </div>
      </div>
    </CaptionLayout>
  );
};

export default CaptionStudioPage;
