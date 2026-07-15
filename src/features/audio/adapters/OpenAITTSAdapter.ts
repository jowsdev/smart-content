import { BaseAudioProvider } from './BaseAudioProvider';

export class OpenAITTSAdapter extends BaseAudioProvider {
  id = 'openai-tts';
  name = 'OpenAI TTS';
}
