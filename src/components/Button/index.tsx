'use client';

import { FC, ButtonHTMLAttributes, ReactNode } from 'react';
import {
  BUTTON_BASE_STYLES,
  BUTTON_BORDER_RADIUS,
  BUTTON_SIZES,
  BUTTON_TEXT_SIZES,
  BUTTON_VARIANTS,
} from './constants';

export type ButtonVariant = 'primary' | 'back' | 'cancel' | 'outline' | 'text' | 'underline';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  children: ReactNode;
}

const getSizeClasses = (variant: ButtonVariant, size: ButtonSize): string => {
  const isTextVariant = variant === 'text' || variant === 'underline';
  return isTextVariant
    ? BUTTON_TEXT_SIZES[variant]
    : `${BUTTON_SIZES[size]} ${BUTTON_BORDER_RADIUS[size]}`;
};

const getButtonClasses = (
  variant: ButtonVariant,
  size: ButtonSize,
  additionalClasses: string
): string => {
  const sizeClasses = getSizeClasses(variant, size);
  return `${BUTTON_BASE_STYLES} ${BUTTON_VARIANTS[variant]} ${sizeClasses} ${additionalClasses}`;
};

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  return (
    <button
      className={getButtonClasses(variant, size, className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? '로딩 중...' : children}
    </button>
  );
};

export default Button;
