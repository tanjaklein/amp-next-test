'use server';

import { redirect } from 'next/navigation';

import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

function isInvalidText(text) {
  return !text || text.trim() === '';
}

export async function shareMeal(prevState, formData) {
    console.log ('shareMeal called with formData:', formData);
  const meal = {
    name: formData.get('name'),
    description: formData.get('description'),
   
    image: formData.get('image'),
    price: formData.get('price'),
  
  };

  if (
    isInvalidText(meal.name) ||
    isInvalidText(meal.description) 

    
  ) {
    return {
      message: 'Invalid input.',
    };
  }

  await saveMeal(meal);
  revalidatePath('/gallery');
  redirect('/gallery');
}
