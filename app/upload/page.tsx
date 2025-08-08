'use client';

import ImagePicker from '@/components/artimage/image-picker';
import { shareArtwork} from '@/utils/actions';
import { useActionState } from "react";
import {Authenticator, View, CheckboxField,Flex, Input, Label, Button, TextAreaField, useTheme, Text } from '@aws-amplify/ui-react';





export  function LoadPage () {
   const [state, formAction, isPending] = useActionState(shareArtwork, { message: 'Artwork uploaded successfully!' });
    const { tokens } = useTheme();

   console.log('LoadPage state:', state);
   

  return(
     <>
     <Authenticator>

    
         <View
          as="div"
      ariaLabel="View example"
      backgroundColor="var(--amplify-colors-white)"
      borderRadius="6px"
     
     
      color="var(--amplify-colors-blue-60)"
      width={"100%" }
      maxWidth="100%"
      padding="1rem"
     
        >
       
     
        <Flex as='div'  direction="column" alignItems={'center'} >
          <Flex >
    
    <Text
      variation="info"
        as="strong"
        lineHeight="1.5em"
        fontWeight={400}
        fontSize="1em"
        fontStyle="normal"
        textDecoration="none"
      
    >
       Upload your art work, Or any other image you feel needs sharing!

    </Text>
       
        </Flex>
         <Flex as="form" action={formAction} direction="column" width="box" alignContent={'left'} gap="small">
          <Flex direction="column" gap="small" alignItems={'left'}>
            <Label htmlFor="name" ><Text as ='strong' color={tokens.colors.primary[80]}>Name:</Text></Label>
            <Input id="name" name="name" type="text" isRequired/>
          </Flex>
          <TextAreaField
     
      label= {<Text as ='strong' color={tokens.colors.primary[80]}>Description:</Text>} 
      name="description"
      placeholder="your description"
      id="description"
      rows={3}/>
           <Flex direction="column" gap="small" alignItems={'left'} >
            <Label htmlFor="price"><Text as ='strong' color={tokens.colors.primary[80]}>Price:</Text></Label>
            <Input id="price" name="price" type='number' isRequired  />
          </Flex>
           
          

            <CheckboxField
              name="isAvailable"
              label={<Text as="span" color={tokens.colors.primary[80]}>Available</Text>}
              value="on"
              defaultChecked={true}
            />
          
          <ImagePicker label="Your image" name="image" />
 
          <Button type="submit"  backgroundColor={tokens.colors.primary['40']} >
               {isPending ? 'Submitting...' : 'Upload ArtWork'}
             </Button>
    
        </Flex>
      </Flex>
      
        </View>
         </Authenticator>
        </>
    
  );
}

 

export default LoadPage;