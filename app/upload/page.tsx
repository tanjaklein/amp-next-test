'use client';

import ImagePicker from '@/components/artimage/image-picker';
import { shareArtwork} from '@/utils/actions';
import { useActionState } from "react";
import ArtworkFormSubmit from "@/components/artimage/artwork-form-submit";
import {View, CheckboxField,Radio, Flex, Input, Label, Divider, TextAreaField, Card, useTheme, Text } from '@aws-amplify/ui-react';





export  function LoadPage () {
   const [state, formAction] = useActionState(shareArtwork, { message: 'Artwork uploaded successfully!' });
    const { tokens } = useTheme();

   console.log('LoadPage state:', state);
   

  return(
     <>
         <View
          as="div"
      ariaLabel="View example"
      backgroundColor="var(--amplify-colors-white)"
      borderRadius="6px"
      border="1px solid var(--amplify-colors-black)"
      boxShadow="3px 3px 5px 6px var(--amplify-colors-neutral-60)"
      color="var(--amplify-colors-blue-60)"
      width={"50%" }
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
        width="30vw"
    >
       Upload your art work
        Or any other image you feel needs sharing!

    </Text>
       
        </Flex>
         <Flex as="form" action={formAction} direction="column" width="20rem">
          <Flex direction="row" gap="small" alignItems={'center'}>
            <Label htmlFor="name" ><Text as ='strong' color={tokens.colors.primary[80]}>Name:</Text></Label>
            <Input id="name" name="name" type="text" isRequired/>
          </Flex>
          <TextAreaField
     
      label= {<Text as ='strong' color={tokens.colors.primary[80]}>Description:</Text>} 
      name="description"
      placeholder="your description"
      id="description"
      rows={3}/>
           <Flex direction="row" gap="small" alignItems={'center'} >
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
 
          <ArtworkFormSubmit />  
    
        </Flex>
      </Flex>
      
        </View>
        
        </>
    /*
    <>
   <header className={classes.header}>
        <h1>
          Upload your <span className={classes.highlight}>art work</span>
        </h1>
        <p>Or any other image you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name"  />
            </p>
            <p>
              <label htmlFor="description">Description</label>
              <input type="text" id="description" name="description"  />
            </p>
          </div>
          <p>
            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price"  />
          </p>
        
         
          <ImagePicker label="Your image" name="image" />
       
          <p className={classes.actions}>
            <ArtworkFormSubmit />
          </p>
        </form>
      </main>
    </>
    */
  );
}

 

export default LoadPage;