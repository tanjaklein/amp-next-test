'use client';


import classes from './page.module.css';

import ContactFormSubmit from '@/components/contacts/contact-form-submit';


import { sendContactEmail } from '@/lib/actions';
import { useActionState } from "react";



export  function ContactPage () {
   const [state, formAction] = useActionState(sendContactEmail, undefined);

   console.log('ContactPage state:', state);
   

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
            <input type="text" id="email" name="email"  />
          </p>
           
          </div>
           <p>
              <label htmlFor="subject">Subject</label>
              <textarea id="subject" name="subject"  />
            </p>
           <p>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message"  />
            </p>
        
        
         
                 
          <p className={classes.actions}>
            <ContactFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}

 

export default ContactPage;