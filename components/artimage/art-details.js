'use client';
import Link from 'next/link';

import {Image, Heading,Card, Flex, Badge, View, useTheme, Text, ThemeProvider, Divider} from '@aws-amplify/ui-react';
  import theme from '@/app/theme';



export default function ArtDetails({ artItem }) {
 
 // const xxx = generateDownloadLinks(image)

  //console.log('222ArtItem image:', xxx.url);

  const { tokens } = useTheme();

  return (
  
     <ThemeProvider theme={theme} >
        <View
              backgroundColor={tokens.colors.background.secondary}
              padding={tokens.space.small}
            >
              <Card>
                <Flex direction="row" alignItems="flex-start">
                  <Image
                   src={artItem?.image ?? undefined }
                   alt={artItem?.name ?? ''}
                   width="90%"
                  />
                  <Flex
                    direction="column"
                    alignItems="flex-start"
                    gap={tokens.space.xs}
                  >
                    <Flex>
                      <Badge size="small" variation="info">
                        {artItem?.isAvailable ? 'Available': 'Not Available'}
                      </Badge>
                     
                    </Flex>
        
                    <Heading level={5}>
                    {artItem?.name ?? ''}
                    </Heading>
        
                    <Text as="span">
                       {artItem?.description ?? ''}
                    </Text>
    
                     <Text as="span"  fontStyle="italic">
                       Price: R{artItem?.price}.00
                    </Text>
                      <Text as="span"  fontStyle="italic">
                       Created At: {artItem?.createdAt}
                    </Text>
                      <Link  href="/contact" 
                      color={tokens.colors.font.teal}>
                        Send an Email</Link>
                  </Flex>
                </Flex>
        
              </Card>
               <Divider
            orientation="horizontal" />
            </View>
            </ThemeProvider>
        
    
  );
  
}


