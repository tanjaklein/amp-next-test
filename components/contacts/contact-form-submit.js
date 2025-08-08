'use client';

import { useFormStatus } from 'react-dom';
import { useActionState } from "react";
import {Button, useTheme } from '@aws-amplify/ui-react';



export default function ContactFormSubmit(newAction, newState) {
   const { tokens } = useTheme();
 const { isPending } = newState;
 //const isPending = {true: true}; // Placeholder for actual pending state, replace with your logic

  console.log('ContactFormSubmit pending:', isPending);
   console.log('NewAction pending:', newAction);
    console.log('NewState pending:', newState);
  return (
    <Button type="submit" backgroundColor={tokens.colors.primary['40']} 
    disabled={isPending}>
      {isPending ? 'Submitting...' : 'Send Email'}
    </Button>
  );
}
