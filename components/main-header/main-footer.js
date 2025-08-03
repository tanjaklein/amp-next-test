'use client';

import "@aws-amplify/ui-react/styles.css";
   import { Card, Flex, Image, View, useTheme, Badge, Text, StepperField, Heading} from '@aws-amplify/ui-react';
   import NavLink from './nav-link';


export default function MainFooter() {
   const { tokens } = useTheme();

  return (
     <View
    as="div"
     backgroundColor={tokens.colors.green[40]}
     
      
      padding={tokens.space.medium}
      alignItems="baseline"
       style={{
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      zIndex: 100,
    }}
    >
      <Card >
        <Flex direction="row" justifyContent="space-between" >
          
         
        <Flex direction="row" alignItems="flex-start">
         
                <NavLink href="/">Home</NavLink>
         
                      

         </Flex>
          
        </Flex>
      </Card>
    </View>
 
  );
}
