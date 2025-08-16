
'use client';
import StaticallyRenderedPage from '@/utils/myserver';


   import { Card, Flex, Image, View, useTheme, Badge, Text, StepperField, Button} from '@aws-amplify/ui-react';

 

export  function Foo(){
   const { tokens } = useTheme();
   return (
   <Card variation="elevated">
    {StaticallyRenderedPage ("seal.jpg")}
</Card>
   )
}

export default Foo;