'use client';

import { Button, useTheme } from '@aws-amplify/ui-react';
import { useFormStatus } from 'react-dom';

export default function ArtworkFormSubmit() {
  const { pending } = useFormStatus();
  const { error } = useFormStatus();
    const { tokens } = useTheme();


  console.log('ArtworkFormSubmit pending:', pending);

  console.log('ArtworkFormSubmit error:', error);


  return (
     <Button backgroundColor={tokens.colors.primary['40']} >
      {pending ? 'Submitting...' : 'Upload ArtWork'}
    </Button>
  );
}
