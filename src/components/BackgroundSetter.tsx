'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface ClientBackgroundProps {
  children: React.ReactNode;
}

export default function BackgroundSetter({ children }: ClientBackgroundProps) {
  const pathname = usePathname();
  const [backgroundColor, setBackgroundColor] = useState('bg-white'); // Default color

  useEffect(() => {
    // Apply background color based on the route
    if (pathname.startsWith('/newsletter')) {
      setBackgroundColor('tertiary-pink-bg');
    } else {
      setBackgroundColor('bg-white'); // Reset to default for other routes
    }
  }, [pathname]);

  return <div className={backgroundColor}>{children}</div>;
}
