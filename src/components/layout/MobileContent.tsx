import React from 'react';
import { cn } from '@/lib/utils';

interface MobileContentProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Set to true if BottomNavigation is present and fixed, to adjust padding.
   * Alternatively, provide the height of the bottom navigation.
   * Default bottom padding assumes a 56px (h-14) bottom navigation bar.
   */
  hasFixedBottomNav?: boolean;
}

const MobileContent: React.FC<MobileContentProps> = ({
  children,
  className,
  hasFixedBottomNav = true, // Default to true, assuming BottomNavigation is typically used and fixed
}) => {
  // Header is h-12 (48px). Bottom navigation is assumed h-14 (56px) if present and fixed.
  const paddingTop = 'pt-12'; // For the fixed header
  const paddingBottom = hasFixedBottomNav ? 'pb-14' : 'pb-0'; // For the fixed bottom navigation

  return (
    <main
      className={cn(
        'flex-1 overflow-y-auto',
        paddingTop,
        paddingBottom,
        className
      )}
    >
      <div className="px-4 py-4"> {/* Changed py-2 to py-4 for a bit more vertical spacing */}
        {children}
      </div>
    </main>
  );
};

export default MobileContent;
