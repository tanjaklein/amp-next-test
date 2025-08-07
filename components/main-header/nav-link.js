'use client';


import "@aws-amplify/ui-react/styles.css";
   import { Link, useTheme } from '@aws-amplify/ui-react';

import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }) {
  const path = usePathname();
   const { tokens } = useTheme();
   

  return (

    
    
    <Link
      href={href}
      color={
        path===href // if not the current path
          ? tokens.colors.primary['80']
          : tokens.colors.neutral['80']
         
      }
    >
      {children}
    </Link>
  );
}
