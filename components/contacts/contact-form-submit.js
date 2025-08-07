'use client';

import { useFormStatus } from 'react-dom';
import {Button, useTheme } from '@aws-amplify/ui-react';



export default function ContactFormSubmit() {
   const { tokens } = useTheme();
  const { pending } = useFormStatus();

  console.log('ContactFormSubmit pending:', pending);
  return (
    <Button backgroundColor={tokens.colors.primary['40']} 
    disabled={pending}>
      {pending ? 'Submitting...' : 'Send Email'}
    </Button>
  );
}
