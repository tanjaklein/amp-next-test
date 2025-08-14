'use server';


import { getArtwork } from '@/utils/serveractions';
import React, {  } from 'react';
import ArtDetails from '@/components/artimage/art-details';
import { Suspense } from 'react';
import classes from './page.module.css';

   

interface MyArt {
  id: string;
  name: string;
  image: string|null;
  description: string|null;
  price: number|null
  createdAt: string|null;
  updatedAt: string|null;
  isAvailable: boolean|null;


}



async function fetchArtwork(slug: string) {
  console.log('Fetching artwork for slug:', slug);
 
  const arts: MyArt[] = await getArtwork(slug);

  return <ArtDetails artItem={arts[0]} />;
}

 

  
export default async function  DetailsPage ({ params }: { params: { slug: string } }) {

  
  const artDetails = await fetchArtwork(params.slug);

  return (
    <>
     <Suspense fallback={<p className={classes.loading}>Fetching Artwork...</p>}>
      {artDetails}
     </Suspense>
    </>
  );
}

