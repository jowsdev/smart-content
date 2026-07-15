import { type ReactNode, type ButtonHTMLAttributes } from 'react';

/**
 * Variants for the Button component
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

/**
 * Sizes for the Button component
 */
export type ButtonSize = 'sm' | 'md' | 'lg' | 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The content of the button
   */
  children: ReactNode;

  /**
   * The visual variant to use
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * The size of the button
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * If true, the button will take up the full width of its container
   * @default false
   */
  fullWidth?: boolean;

  /**
   * If true, shows a loading spinner and disables the button
   * @default false
   */
  isLoading?: boolean;

  /**
   * Backward-compatible shorthand for variant="danger".
   */
  danger?: boolean;

  /**
   * Optional icon to show before the text
   */
  startIcon?: ReactNode;

  /**
   * Optional icon to show after the text
   */
  endIcon?: ReactNode;
}
