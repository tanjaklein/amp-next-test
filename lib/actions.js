'use server';

import { redirect } from 'next/navigation';

import { saveMeal, sendTheEmail } from './meals';
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


export async function sendContactEmail (prevState, formData) {
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        body: formData.get('message')
    }
    console.log('sendContactEmail called with data:', data);

    const rsp = await sendTheEmail ({data})

   revalidatePath('/');
   redirect('/');

  }



