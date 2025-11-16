'use client';

import { SettingsIcon, SymbolLogoIcon } from '@/components/Icons/index';

interface HeaderProps {
  showSettings?: boolean;
  onSettingsClick?: () => void;
}

function HeaderLogo() {
  return (
    <div className="flex items-center">
      <SymbolLogoIcon width={40} height={20} />
    </div>
  );
}

function HeaderSettingsButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex items-center justify-center"
      aria-label="설정"
    >
      <SettingsIcon
        width={20}
        height={20}
        className="text-[var(--color-grey-normal)] transition-colors group-hover:text-[var(--color-grey-normal-hover)] group-active:text-[var(--color-grey-normal-active)]"
      />
    </button>
  );
}

export default function Header({ showSettings = true, onSettingsClick }: HeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-0 z-50" role="header">
      <div className="mx-auto flex max-w-[var(--layout-width)] items-center justify-between px-5 py-4">
        <HeaderLogo />
        {showSettings && <HeaderSettingsButton onClick={onSettingsClick} />}
      </div>
    </header>
  );
}
