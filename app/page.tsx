'use client';
import schnitzel from '@/assets/schnitzel.jpg';

import "@aws-amplify/ui-react/styles.css";
   import { Link, Card, Flex, Image, View, useTheme, Badge, Text, Divider, Heading} from '@aws-amplify/ui-react';


export default function Home() {
   const { tokens } = useTheme();
  return (
<View
      backgroundColor={tokens.colors.background.secondary}
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
            <Flex>
              <Badge size="small" variation="info">
                Plus
              </Badge>
              <Badge size="small" variation="success">
                Verified
              </Badge>
            </Flex>

            <Heading level={5}>
             Join our community and share your favorite recipes!
            </Heading>

            <Text as="span">
              Find new friends & like-minded people
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



  );
}
