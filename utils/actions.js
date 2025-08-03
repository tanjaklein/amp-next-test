'use server';

import { redirect } from 'next/navigation';

import { saveArt, sendTheEmail } from './serveractions';
import { revalidatePath } from 'next/cache';

function isInvalidText(text) {
  return !text || text.trim() === '';
}

export async function shareArtwork(prevState, formData) {
    console.log ('shareArtwork called with formData:', formData);
  const artwork = {
    name: formData.get('name'),
    description: formData.get('description'),
   
    image: formData.get('image'),
    price: formData.get('price'),
  
  };

  if (
    isInvalidText(artwork.name) ||
    isInvalidText(artwork.description) 

    
  ) {
    return {
      message: 'Invalid input.',
    };
  }

  await saveArt(artwork);
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



