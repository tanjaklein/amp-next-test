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
     isAvailable: formData.get('isAvailable') === 'on',
  
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
  const newBod = `Message from ` + formData.get('email') + `\n (` +formData.get('message')  + `)`;
  

    console.log('sendContactEmail called with formData:', formData);
    console.log('newBod:', newBod);
    
    if (
      isInvalidText(formData.get('email')) ||
      isInvalidText(formData.get('name')) ||
      isInvalidText(formData.get('subject')) ||
      isInvalidText(newBod)
    ) {
      return {
        message: 'Invalid input.',
      };
    }

  const data = {
      name: formData.get('name'),
        email: 'tanjav@mweb.co.za',
       source: formData.get('email'),
       recipient:['tanja.valkinxxx@gmail.com'],
      
      
        subject: formData.get('subject'),
        body: newBod
    }
    console.log('sendContactEmail called with data:', data);

    const rsp = await sendTheEmail ({data})

   revalidatePath('/contact');
   redirect('/contact');
   return { message: rsp.message };

  }



