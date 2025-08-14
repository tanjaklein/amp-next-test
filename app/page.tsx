'use client';
import schnitzel from '@/assets/schnitzel.jpg';

import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '@/amplify_outputs.json';
import  theme  from '@/app/theme';
   import { ThemeProvider,Link, Card, Flex, Image, View, useTheme, Badge, Text, Divider, Heading, Button} from '@aws-amplify/ui-react';
  

Amplify.configure(outputs);
export default function Home() {
   const { tokens  } = useTheme()


 console
.log('Theme tokens:', tokens);

console
.log('Theme name:', theme.name);




 
  return (
  
    <ThemeProvider theme={theme} >
  
<View
      backgroundColor={theme.tokens.colors.green[40].value}
      padding={tokens.space.medium}
     
    >
      <Card>
        <Flex direction="row" alignItems="flex-start">
          <Image
            alt="A crowd of people, cooking"
            src={schnitzel.src}
            width="33%"
          />
          <Flex
            direction="column"
            alignItems="flex-start"
            gap={tokens.space.xs}
          >
           
            <Heading level={5}>
             Allison Artist extraordinaire!
            </Heading>

            <Text as="span">
             Bold, expressive, and unapologetically original, Allison is a Johannesburg-based printmaker whose work pulses with individuality and depth. <br /><br />At 50, she brings decades of lived experience into every piece, transforming traditional printing techniques into vibrant narratives of identity, emotion, and place.

With her signature red hair and unmistakable style, she’s as much a visual force as the art she creates. <br /><br />Her studio is a sanctuary of ink, texture, and experimentation—where linocuts, monoprints, and etchings evolve into layered reflections of the world around her. Her work often explores themes of transformation, memory, and the interplay between chaos and control.

<br /><br />A fixture in South Africa’s contemporary art scene, Allison has exhibited in local galleries and collaborated with fellow artists across disciplines. Her prints are collected by those who seek not just beauty, but boldness—art that speaks with a voice as distinct as the woman behind it.
            </Text>
              <Link  href="/gallery" 
              color="#4177c9ff">
                View the Gallery</Link>
          </Flex>
        </Flex>
          

      </Card>
       <Divider
    orientation="horizontal" />
    </View>
    </ThemeProvider>


   

  );
}
