'use client';

import "@aws-amplify/ui-react/styles.css";
   import { Card, Flex, Image, View, useTheme, Badge, Text, StepperField, Heading} from '@aws-amplify/ui-react';


import Link from 'next/link';

import MainHeaderBackground from './main-header-background';
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import NavLink from './nav-link';

export default function MainHeader() {
  const { tokens } = useTheme();

  return (
    <>
  
    <MainHeaderBackground />

    <View
    as="span"
     backgroundColor={tokens.colors.green[40]}
     
      
      padding={tokens.space.medium}
    >
      <Card >
        <Flex direction="row" justifyContent="space-between" >
          
         <Flex direction="row" alignItems="flex-start" opacity={10}>
                 
           <Image src={logoImg.src} alt="A plate with food on it" width="10%"  />
          <Heading
  width='30vw'
  level={3} 
>
   Nextlevel Art
</Heading>
                      
          
        </Flex>
        <Flex direction="row" alignItems="flex-start">
         
                <NavLink href="/">Home</NavLink>
         
              <NavLink href="/gallery">Browse Gallery</NavLink>
         
          
              <NavLink href="/upload">Upload</NavLink>
          
             <NavLink href="/contact">Contact</NavLink>
          

         </Flex>
          
        </Flex>
      </Card>
    </View>
  </>

    /*
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
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/gallery">Browse Gallery</NavLink>
            </li>
            <li>
              <NavLink href="/contact">Contact</NavLink>
            </li>
             <li>
              <NavLink href="/upload">Upload</NavLink>
            </li>
          </ul>
        </nav>
      </header>

    </>
    */
  );
}
