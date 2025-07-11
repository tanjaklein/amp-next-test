import Link from 'next/link';
import Image from 'next/image';

import MainHeaderBackground from './main-header-background';
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Art
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/gallery">Browse Gallery</NavLink>
            </li>
            <li>
              <NavLink href="/contact">Send Email</NavLink>
            </li>
             <li>
              <NavLink href="/upload">Upload</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
