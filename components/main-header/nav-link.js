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
      fontWeight={"bold"}
      color={
        path===href // if not the current path
          ? "#bed1eeff" // use the primary color
          : "#bfd121ff" 
         
      }
    >
      {children}
    </Link>
  );
}
