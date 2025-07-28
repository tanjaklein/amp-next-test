'use client';

import { useFormStatus } from 'react-dom';

export default function ArtworkFormSubmit() {
  const { pending } = useFormStatus();
  const { error } = useFormStatus();


  console.log('ArtworkFormSubmit pending:', pending);

  console.log('ArtworkFormSubmit error:', error);


  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Upload ArtWork'}
    </button>
  );
}
