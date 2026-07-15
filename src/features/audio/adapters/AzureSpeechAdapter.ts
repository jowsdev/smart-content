import { BaseAudioProvider } from './BaseAudioProvider';

export class AzureSpeechAdapter extends BaseAudioProvider {
  id = 'azure-speech';
  name = 'Azure AI Speech';
}
