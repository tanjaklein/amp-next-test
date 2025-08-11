'use client';


import {ThemeProvider, View, Button, Flex, Input, Label, Divider, TextAreaField, useTheme, Text } from '@aws-amplify/ui-react';


import { sendContactEmail } from '@/utils/actions';
import { useActionState } from "react";
   import theme from '@/app/theme';



export  function ContactPage () {
   const [state, formAction, isPending] = useActionState(sendContactEmail,undefined);
   

    const { tokens } = useTheme();
   console.log('ContactPage state:', state);

   return (
    <>
    <ThemeProvider theme={theme}>
    <View
     
      as="div"
  ariaLabel="View Contact form"
  backgroundColor="var(--amplify-colors-white)"
  borderRadius="6px"
 
  color="var(--amplify-colors-blue-60)"
  width="100%" 
  maxWidth="100%"
  padding="1rem"
 
    >
   
 
    <Flex as='div'  direction="column" alignItems={'center'} >
    <Flex>

<Text
  variation="info"
    as="strong"
    lineHeight="1.5em"
    fontStyle="bold"
    textDecoration="none"
  
>
  Send an  email, and we will get back to you. 
</Text>
    </Flex>
    <Flex as="form" action={formAction} direction="column" alignContent={'left'} gap="small" alignItems="stretch">

      <Flex direction="column" gap="small" alignItems={'left'}>

        <Label htmlFor="name" ><Text as ='strong' color={tokens.colors.primary[80]}>Name:</Text></Label>
        <Input id="name" name="name" type="text" isRequired />
      </Flex>
     <Flex direction="column" gap="small" alignItems={'left'}>

        <Label htmlFor="email" ><Text as ='strong'  color={tokens.colors.primary[80]}>Email:</Text></Label>
        <Input id="email" name="email" type="email" isRequired />
      </Flex>
      <Flex direction="column" gap="small" alignItems={'left'}>

        <Label htmlFor="subject"><Text as ='strong'  color={tokens.colors.primary[80]}>Subject:</Text></Label>
        <Input id="subject" type='text'name="subject" isRequired />
      </Flex>
             
      <TextAreaField
         label= {<Text as ='strong'  color={tokens.colors.primary[80]}>Message:</Text>} 
         name="message"
         placeholder="Your message"
         id="message"
  
         rows={5}/>
    
    <Button type="submit" backgroundColor={tokens.colors.primary['40']} 
       
       disabled={isPending}>
      {isPending ? 'Submitting...' : 'Send Email'}
    </Button>
    
    
  
            </Flex>
            </Flex>
   
    </View>
    </ThemeProvider>
    
    </>
   )
   

  }

 

export default ContactPage;