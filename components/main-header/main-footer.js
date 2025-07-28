import Link from 'next/link';
import Image from 'next/image';


import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import NavLink from './nav-link';
import MainFooterBackground from './main-footer-background';

export default function MainFooter() {
  return (
    <>
      <MainFooterBackground/>
      <footer className={classes.footer}>
       

        <nav className={classes.nav}>
          <ul>
             <li>
              <NavLink href="/">Home</NavLink>
          
            
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
