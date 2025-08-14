import Link from 'next/link';

import {Image, Heading,Card, Flex, Badge, View, useTheme, Text} from '@aws-amplify/ui-react';



export default function ArtItem({ name, slug, image, description, price, isAvailable }) {
 
 // const xxx = generateDownloadLinks(image)

  //console.log('222ArtItem image:', xxx.url);

  const { tokens } = useTheme();

  return (
  
    <View
      backgroundColor={tokens.colors.background.secondary}
      padding={tokens.space.medium}
    >
   
      <Card
        width="100%"
        variation="elevated"
        padding={tokens.space.medium}
        borderRadius={tokens.radii.medium}
        >
            <Flex direction="row" alignItems="flex-start">
              <Image
               src={image ?? undefined}
               alt={name ?? ''}
               width="60%"
              />
              <Flex
                direction="column"
                alignItems="flex-start"
                gap={tokens.space.xs}
              >
                <Flex>
                  <Badge size="small" variation={isAvailable?"info":"success"}>
                    {isAvailable ? 'Available': 'Not Available'}
                  </Badge>
                  
                </Flex>
    
                <Heading level={5}>
                {name ?? ''}
                </Heading>
    
              
                 <Text as="span" fontStyle={"italic"}>
                  Price: R{price}.00
                </Text>
                    <Link href={`/gallery/${slug}`}
                    >
                      <Text color={tokens.colors.primary['80']}
                      textDecoration="bold">View Details</Text></Link>
              </Flex>
            </Flex>
    
          </Card>
    </View>
           
 
    
  );
  
}


