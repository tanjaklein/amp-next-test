
'use client';


   import { Card, Flex, Image, View, useTheme, Badge, Text, StepperField, Button} from '@aws-amplify/ui-react';

 

export  function Foo(){
   const { tokens } = useTheme();
   return (
   <Card variation="elevated">
     <Flex>
      <Button backgroundColor={tokens.colors.pink[10]}>Button 1</Button>
      <Button backgroundColor={tokens.colors.pink[20]}>Button 2</Button>
      <Button backgroundColor={tokens.colors.pink[40]}>Button 3</Button>
    </Flex>
  <Flex alignItems="flex-start">
    <Image src="/next.svg"
      alt="Amplify" width="8rem"/>
    <Flex direction="column" gap="xs">
      <Flex>
        <Badge variation="success">New</Badge>
      </Flex>
      <Text fontSize="large" fontWeight="semibold">
        Product title
      </Text>
      <Text color="font.tertiary">
        Product description
      </Text>
      <Text
        fontSize="large"
        color="secondary">
        $199.99
      </Text>
      <Flex>
        <StepperField
          label="Quantity"
          min={0}
          max={10}
          step={1}
          defaultValue={1}
          labelHidden
        />
        <Button variation="primary">Add to cart</Button>
      </Flex>
    </Flex>
  </Flex>
</Card>
   )
}

export default Foo;