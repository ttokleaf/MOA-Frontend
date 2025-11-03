export const BUTTON_BASE_STYLES =
  'inline-flex items-center justify-center font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed';

export const BUTTON_BORDER_RADIUS = {
  xs: 'rounded-[var(--rounded-sm)]',
  sm: 'rounded-[var(--rounded-sm)]',
  md: 'rounded-[var(--rounded-md)]',
  lg: 'rounded-[var(--rounded-md)]',
  xl: 'rounded-[var(--rounded-md)]',
} as const;

export const BUTTON_VARIANTS = {
  primary:
    'bg-[var(--color-green-normal)] text-white hover:bg-[var(--color-green-normal-hover)] active:bg-[var(--color-green-normal-active)]',
  back: 'bg-[var(--color-green-dark)] text-white hover:bg-[var(--color-green-dark-hover)] active:bg-[var(--color-green-dark-active)]',
  cancel:
    'bg-[var(--color-grey-light)] text-white hover:bg-[var(--color-grey-light-hover)] active:bg-[var(--color-grey-light-active)]',
  outline:
    'bg-[var(--color-green-light)] !text-[var(--color-green-normal)] border border-[var(--color-green-normal)] hover:bg-[var(--color-green-light-hover)] active:bg-[var(--color-green-light-active)]',
  text: 'text-[var(--color-green-darker)] hover:text-[var(--color-green-darker-hover)] active:text-[var(--color-green-darker-active)] font-medium',
  underline:
    'text-[var(--color-grey-normal)] hover:text-[var(--color-grey-normal-hover)] active:text-[var(--color-grey-normal-active)] font-medium underline decoration-[var(--color-grey-normal)] underline-offset-[4px]',
} as const;

export const BUTTON_TEXT_SIZES = {
  text: 'text-xs-custom',
  underline: 'text-sm-custom',
} as const;

export const BUTTON_SIZES = {
  xs: 'h-8 w-[100px] max-w-full text-base-custom',
  sm: 'h-8 w-[200px] max-w-full text-base-custom',
  md: 'h-10 w-[72px] max-w-full text-lg-custom',
  lg: 'h-10 w-[228px] max-w-full text-lg-custom',
  xl: 'h-10 w-[300px] max-w-full text-lg-custom',
} as const;
