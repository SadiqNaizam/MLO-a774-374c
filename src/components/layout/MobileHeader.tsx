import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, Search, Bell } from 'lucide-react';

interface MobileHeaderProps {
  title?: string;
  className?: string;
  onMenuClick?: () => void;
  onSearchClick?: () => void;
  onNotificationsClick?: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  title = 'App Name',
  className,
  onMenuClick,
  onSearchClick,
  onNotificationsClick,
}) => {
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex h-12 items-center justify-between border-b border-border bg-background px-4 shadow-sm',
        className
      )}
    >
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={onMenuClick} aria-label="Menu">
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="ml-2 text-lg font-semibold text-foreground">{title}</h1>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" onClick={onSearchClick} aria-label="Search">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" onClick={onNotificationsClick} aria-label="Notifications">
          <Bell className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default MobileHeader;
