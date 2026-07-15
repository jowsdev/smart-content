export interface CaptionStyle {
  id: string;
  name: string;
  fontFamily: string;
  fontSize: number;
  color: string;
  backgroundColor?: string;
  outlineColor?: string;
  outlineWidth?: number;
  shadowColor?: string;
  shadowBlur?: number;
  textAlign: 'left' | 'center' | 'right';
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  borderRadius?: number;
  padding?: number;
}
