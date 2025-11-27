'use client';

import { useState } from 'react';
import {
  CalendarIcon,
  AnalysisIcon,
  ChatIcon,
  CalculateIcon,
  MyIcon,
} from '@/components/Icons/index';

type NavigationItemId = 'calendar' | 'analysis' | 'chat' | 'calculator' | 'my';

interface NavigationItem {
  id: NavigationItemId;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface NavigationProps {
  defaultActiveId?: NavigationItemId;
  onItemClick?: (id: NavigationItemId) => void;
}

interface NavigationItemButtonProps {
  item: NavigationItem;
  isActive: boolean;
  isCenter: boolean;
  onClick: () => void;
}

const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: 'calendar', label: '가계부', icon: CalendarIcon },
  { id: 'analysis', label: '분석', icon: AnalysisIcon },
  { id: 'chat', label: '챗봇', icon: ChatIcon },
  { id: 'calculator', label: '정산', icon: CalculateIcon },
  { id: 'my', label: '마이', icon: MyIcon },
];

const CENTER_BUTTON_ID: NavigationItemId = 'chat';

function getTextColorClass(isActive: boolean): string {
  return isActive ? 'text-[var(--color-green-normal)]' : 'text-[var(--color-grey-light-active)]';
}

function getIconColorClass(isActive: boolean): string {
  return isActive ? 'text-[var(--color-green-normal)]' : 'text-[var(--color-grey-light-active)]';
}

function getBaseButtonClasses(): string {
  return 'flex flex-col items-center justify-center gap-1 transition-colors cursor-pointer';
}

function getChatButtonClasses(): string {
  return 'flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-green-normal)] transition-colors hover:bg-[var(--color-green-normal-hover)] active:bg-[var(--color-green-normal-active)]';
}

function ChatNavigationButton({ item, onClick }: { item: NavigationItem; onClick: () => void }) {
  const IconComponent = item.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${getBaseButtonClasses()} relative`}
      aria-label={item.id}
    >
      <div className={getChatButtonClasses()}>
        <IconComponent width={33} height={25} />
      </div>
    </button>
  );
}

function RegularNavigationButton({
  item,
  isActive,
  onClick,
}: {
  item: NavigationItem;
  isActive: boolean;
  onClick: () => void;
}) {
  const IconComponent = item.icon;
  const textColorClass = getTextColorClass(isActive);
  const iconColorClass = getIconColorClass(isActive);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${getBaseButtonClasses()} ${textColorClass}`}
      aria-label={item.label}
    >
      <IconComponent width={20} height={20} className={iconColorClass} />
      {item.label && <span className="text-sm-custom font-regular">{item.label}</span>}
    </button>
  );
}

function NavigationItemButton({ item, isActive, isCenter, onClick }: NavigationItemButtonProps) {
  if (isCenter) {
    return <ChatNavigationButton item={item} onClick={onClick} />;
  }

  return <RegularNavigationButton item={item} isActive={isActive} onClick={onClick} />;
}

export default function Navigation({ defaultActiveId = 'calendar', onItemClick }: NavigationProps) {
  const [activeId, setActiveId] = useState<NavigationItemId>(defaultActiveId);

  const handleItemClick = (id: NavigationItemId) => {
    setActiveId(id);
    onItemClick?.(id);
  };

  const isCenterItem = (id: NavigationItemId): boolean => id === CENTER_BUTTON_ID;

  return (
    <nav
      className="fixed right-0 bottom-0 left-0 z-50 border-t border-[var(--color-grey-lighter-hover)] bg-white"
      role="navigation"
      aria-label="하단 네비게이션"
    >
      <div className="mx-auto flex max-w-[var(--layout-width)] items-center justify-around px-4 py-3">
        {NAVIGATION_ITEMS.map((item) => (
          <NavigationItemButton
            key={item.id}
            item={item}
            isActive={activeId === item.id}
            isCenter={isCenterItem(item.id)}
            onClick={() => handleItemClick(item.id)}
          />
        ))}
      </div>
    </nav>
  );
}
