import React from 'react';
import AudioStudioLayout from '../components/layout/AudioStudioLayout';
import VoiceLibrary from '../components/voices/VoiceLibrary';
import TTSEditor from '../components/generation/TTSEditor';
import AudioMixer from '../components/mixer/AudioMixer';
import AudioPlayer from '../components/preview/AudioPlayer';
import STTPanel from '../components/transcription/STTPanel';
import MusicLibrary from '../components/music/MusicLibrary';
import { useVoices } from '../hooks/useVoices';

const AudioStudioPage: React.FC = () => {
  const { voices } = useVoices();

  return (
    <AudioStudioLayout>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
          <div style={{ width: '280px', borderRight: '1px solid #333', overflowY: 'auto', background: '#111' }}>
            <VoiceLibrary voices={voices} />
            <MusicLibrary />
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
            <TTSEditor />
            <STTPanel />
          </div>

          <div style={{ width: '300px', borderLeft: '1px solid #333', overflowY: 'auto', background: '#111' }}>
            <AudioMixer />
          </div>
        </div>

        <div style={{ height: '80px', borderTop: '1px solid #333' }}>
          <AudioPlayer />
        </div>
      </div>
    </AudioStudioLayout>
  );
};

export default AudioStudioPage;
