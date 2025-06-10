import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Home, Compass, PlusCircle, User, MessageSquare } from 'lucide-react'; // Added MessageSquare

// Define the type for Lucide icon components
type LucideIcon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & React.RefAttributes<SVGSVGElement>
>;

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

const navigationItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/', icon: Home },
  { id: 'explore', label: 'Explore', href: '/explore', icon: Compass },
  { id: 'post', label: 'Post', href: '/post', icon: PlusCircle }, // Common action, can be a link or modal trigger
  { id: 'messages', label: 'Messages', href: '/messages', icon: MessageSquare },
  { id: 'profile', label: 'Profile', href: '/profile', icon: User },
];

interface BottomNavigationProps {
  className?: string;
  onNavigate?: (href: string) => void; // Optional callback for navigation handling
  initialActiveItemId?: string;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  className,
  onNavigate,
  initialActiveItemId = 'home',
}) => {
  const [activeItemId, setActiveItemId] = useState<string>(initialActiveItemId);

  const handleItemClick = (item: NavItem) => {
    setActiveItemId(item.id);
    if (onNavigate) {
      onNavigate(item.href);
    } else {
      // Basic fallback if no handler (e.g. for demo purposes)
      console.log(`Navigating to ${item.href}`);
      // In a real app, you'd use react-router-dom's Link or useNavigate
    }
  };

  return (
    <nav
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 flex h-14 items-center justify-around border-t border-border bg-background shadow- ऊपर-sm',
        className
      )}
    >
      {navigationItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = activeItemId === item.id;
        return (
          <button
            key={item.id}
            onClick={() => handleItemClick(item)}
            className={cn(
              'flex flex-1 flex-col items-center justify-center space-y-1 py-2 text-xs',
              isActive ? 'text-primary' : 'text-muted-foreground',
              'hover:text-primary transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md'
            )}
            aria-label={item.label}
            aria-current={isActive ? 'page' : undefined}
          >
            <IconComponent className={cn('h-5 w-5', isActive ? 'fill-primary/20' : '')} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavigation;
