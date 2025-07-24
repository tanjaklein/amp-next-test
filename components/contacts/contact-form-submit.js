'use client';

import { useFormStatus } from 'react-dom';

export default function ContactFormSubmit() {
  const { pending } = useFormStatus();

  console.log('ContactFormSubmit pending:', pending);
  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Send Email'}
    </button>
  );
}
