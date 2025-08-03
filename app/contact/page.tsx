'use client';


import classes from './page.module.css';

import ContactFormSubmit from '@/components/contacts/contact-form-submit';
import { Button, Flex, Input, Label, Heading, TextAreaField } from '@aws-amplify/ui-react';


import { sendContactEmail } from '@/utils/actions';
import { useActionState } from "react";



export  function ContactPage () {
   const [state, formAction] = useActionState(sendContactEmail, undefined);

   console.log('ContactPage state:', state);

   return (
    <>
    <Flex as='div'  direction="column">
      <Flex>

   
   


<Heading
  width='30vw'
  level={4} 
>
  Send an  email, and we will get back to you
</Heading>
    </Flex>
     <Flex as="form" direction="column" width="20rem">
      <Flex direction="column" gap="small">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" isRequired />
      </Flex>
       <Flex direction="column" gap="small">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" width="75%" />
      </Flex>
      <TextAreaField
  descriptiveText="Write your message"
  label="Last Message"
  name="Message"
  placeholder="your message"
  rows={3}/>
      <Button type="submit">Submit</Button>
    </Flex>
       </Flex>
    </>
   )
   
/*
  return(
    <>
   <header className={classes.header}>
        <h1>
          Send an  <span className={classes.highlight}>email</span>
        </h1>
        <p>And we will get back to you!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name"  />
            </p>
              <p>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email"  />
          </p>
           
          </div>
           <p>
              <label htmlFor="subject">Subject</label>
             <input type="text" id="subject" name="subject" required />
            </p>
           <p>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" 
              rows={10} required />
            </p>
                
          <p className={classes.actions}>
            <ContactFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
*/
  }

 

export default ContactPage;