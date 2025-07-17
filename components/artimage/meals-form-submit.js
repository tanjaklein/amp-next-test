'use client';

import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  console.log('MealsFormSubmit pending:', pending);
  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Share Meal'}
    </button>
  );
}
