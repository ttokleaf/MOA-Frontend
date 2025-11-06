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

const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: 'calendar', label: '가계부', icon: CalendarIcon },
  { id: 'analysis', label: '분석', icon: AnalysisIcon },
  { id: 'chat', label: '챗봇', icon: ChatIcon },
  { id: 'calculator', label: '정산', icon: CalculateIcon },
  { id: 'my', label: '마이', icon: MyIcon },
];

interface NavigationProps {
  defaultActiveId?: NavigationItemId;
  onItemClick?: (id: NavigationItemId) => void;
}

function NavigationItemButton({
  item,
  isActive,
  isCenter,
  onClick,
}: {
  item: NavigationItem;
  isActive: boolean;
  isCenter: boolean;
  onClick: () => void;
}) {
  const baseClasses =
    'flex flex-col items-center justify-center gap-1 transition-colors cursor-pointer';
  const IconComponent = item.icon;

  if (isCenter) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${baseClasses} relative`}
        aria-label={item.id}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-green-normal)] transition-colors hover:bg-[var(--color-green-normal-hover)] active:bg-[var(--color-green-normal-active)]">
          <IconComponent width={33} height={25} />
        </div>
      </button>
    );
  }

  const textColorClass = isActive
    ? 'text-[var(--color-green-normal)]'
    : 'text-[var(--color-grey-light-active)]';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${textColorClass}`}
      aria-label={item.label}
    >
      <IconComponent
        width={20}
        height={20}
        className={
          isActive ? 'text-[var(--color-green-normal)]' : 'text-[var(--color-grey-light-active)]'
        }
      />
      {item.label && <span className="text-sm-custom font-regular">{item.label}</span>}
    </button>
  );
}

export default function Navigation({ defaultActiveId = 'calendar', onItemClick }: NavigationProps) {
  const [activeId, setActiveId] = useState<NavigationItemId>(defaultActiveId);

  const handleItemClick = (id: NavigationItemId) => {
    setActiveId(id);
    onItemClick?.(id);
  };

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
            isCenter={item.id === 'chat'}
            onClick={() => handleItemClick(item.id)}
          />
        ))}
      </div>
    </nav>
  );
}
