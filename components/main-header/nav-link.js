'use client';


import "@aws-amplify/ui-react/styles.css";
   import { Link } from '@aws-amplify/ui-react';

import { usePathname } from 'next/navigation';
import classes from './nav-link.module.css';

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      color={
        path.startsWith(href)
          ? "#007EB9"
          : "#b900a0ff"
      }
    >
      {children}
    </Link>
  );
}
