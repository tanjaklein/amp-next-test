'use client';


import ContactFormSubmit from '@/components/contacts/contact-form-submit';
import {View, Button, Flex, Input, Label, Divider, TextAreaField, Card, useTheme, Text } from '@aws-amplify/ui-react';


import { sendContactEmail } from '@/utils/actions';
import { useActionState } from "react";



export  function ContactPage () {
   const [state, formAction] = useActionState(sendContactEmail,undefined);

    const { tokens } = useTheme();
   console.log('ContactPage state:', state);

   return (
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
    fontStyle="bold"
    textDecoration="none"
  
>
  Send an  email, and we will get back to you
</Text>
    </Flex>
     <Flex as="form" action={formAction} direction="column" width="20rem">
       <Flex direction="row" gap="small" alignItems={'center'}>
        <Label htmlFor="name" ><Text as ='strong' color={tokens.colors.primary[80]}>Name:</Text></Label>
        <Input id="name" name="name" type="text" isRequired />
      </Flex>
      <Flex direction="row" gap="small" alignItems={'center'}>
        <Label htmlFor="email" ><Text as ='strong'  color={tokens.colors.primary[80]}>Email:</Text></Label>
        <Input id="email" name="email" type="email" isRequired />
      </Flex>
       <Flex direction="row" gap="small" alignItems={'center'} >
        <Label htmlFor="subject"><Text as ='strong'  color={tokens.colors.primary[80]}>Subject:</Text></Label>
        <Input id="subject" type='text'name="subject" isRequired />
      </Flex>
         <Divider size="large" />
      
      <TextAreaField
         descriptiveText="Write your message"
         label= {<Text as ='strong'  color={tokens.colors.primary[80]}>Message:</Text>} 
         name="message"
         placeholder="Your message"
         id="message"
  
         rows={5}/>
    <ContactFormSubmit />
    
    </Flex>
       </Flex>
            
   
    </View>
    
    </>
   )
   

  }

 

export default ContactPage;