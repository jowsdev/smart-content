import React, { useState } from 'react';
import ImageStudioLayout from '../components/layout/ImageStudioLayout';
import PromptEditor from '../components/prompt/PromptEditor';
import PromptHistory from '../components/prompt/PromptHistory';
import PromptVariables from '../components/prompt/PromptVariables';
import GenerationPanel from '../components/generation/GenerationPanel';
import GenerationPreview from '../components/generation/GenerationPreview';
import GenerationStatus from '../components/generation/GenerationStatus';
import ImageGallery from '../components/gallery/ImageGallery';
import ImageMetadata from '../components/gallery/ImageMetadata';
import ImageEditor from '../components/editing/ImageEditor';
import { useGeneratedImages } from '../hooks/useGeneratedImages';
import { GeneratedImage } from '../types/image.types';

const ImageStudioPage: React.FC = () => {
  const { images, isLoading } = useGeneratedImages();
  const [selectedImage, setSelectedAsset] = useState<GeneratedImage | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <ImageStudioLayout>
      <div style={{ width: '300px', borderRight: '1px solid #333', overflowY: 'auto', background: '#111' }}>
        <PromptHistory />
        <PromptVariables />
        <GenerationPanel />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ background: '#1a1a1a', borderBottom: '1px solid #333' }}>
          <PromptEditor />
        </div>
        <div style={{ flex: 1, overflowY: 'auto', background: '#000' }}>
          <GenerationPreview />
          <div style={{ padding: '20px' }}>
            <h3 style={{ fontSize: '14px', marginBottom: '16px', color: '#888' }}>Your Gallery</h3>
            {isLoading ? (
              <div style={{ color: '#444' }}>Loading gallery...</div>
            ) : (
              <div onClick={() => { setSelectedAsset(images[0]); setIsEditing(false); }}>
                <ImageGallery images={images} />
              </div>
            )}
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
          <GenerationStatus />
        </div>
      </div>

      {(selectedImage || isEditing) && (
        <div style={{ width: '320px', borderLeft: '1px solid #333', overflowY: 'auto', background: '#111' }}>
          <div style={{ padding: '16px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between' }}>
            <strong>{isEditing ? 'Image Editor' : 'Image Details'}</strong>
            <button onClick={() => { setSelectedAsset(null); setIsEditing(false); }} style={{ background: 'transparent', border: 'none', color: '#888' }}>✕</button>
          </div>
          {isEditing ? (
            <ImageEditor />
          ) : (
            <>
              <ImageMetadata image={selectedImage!} />
              <div style={{ padding: '20px' }}>
                <button
                  onClick={() => setIsEditing(true)}
                  style={{ width: '100%', background: '#0070f3', color: '#fff', border: 'none', padding: '12px', borderRadius: '6px' }}
                >
                  Open in Editor
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </ImageStudioLayout>
  );
};

export default ImageStudioPage;
