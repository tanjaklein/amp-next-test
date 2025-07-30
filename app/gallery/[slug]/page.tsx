'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getArtwork } from '@/lib/serveractions';
import classes from './page.module.css';
import React, { useState, useEffect, use , useRef } from 'react';
import { useParams } from 'react-router-dom';
import type { Schema } from "../../../amplify/data/resource";
import { Artwork } from 'aws-sdk/clients/elastictranscoder';



/*export async function generateMetadata({ params }) {
  const artItem = getArtwork(params.slug);

  if (!artItem) {
    notFound();
  }

  return {
    name: artItem.name,
    description: artItem.description,
  };
}


    id : a.string().required(), // Unique identifier for each artwork
       slug: a.string().required(), // Slug for URL-friendly identification
       name: a.string().required(),
       image: a.string(),
       description: a.string(),
       price: a.integer(),
       createdAt: a.string(), // Default to current time
       updatedAt: a.string(), // Default to current time
       isAvailable: a.boolean().default(true), /
*/

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
export default  function ArtDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
 // export default  function ArtDetailsPage() {

  //const artItem = getArtwork(params.slug);
  
   //console.log (" Artwork slug" + slug);
   const [error, setError] = useState('');
    const [state, setState] = useState('');
    const [artItem, setArtItem] = useState<MyArt>();
  
   const  pm  =  use (params);
    const slug =  pm.slug;

   //const params = useParams();
   //const slug = params.slug;


    console.log (" JJJJ Artwork slug= " + slug);
   //const ss =  params.slug;

  // Removed duplicate declaration of artItem
  
  //console.log (" Artwork slug" + ss);
 

   useEffect(() => {
    
    console.log (" ZZZZZZ Artwork slug" + slug);
    setState("loading");

     
      fetchArtworks(slug);
     
    
    
  }, [ ]);
  

   console.log (" KKKKKKK  Artwork slug= " + slug);

 async function  fetchArtworks (slug:any) {

   console.log (" ZZZZZZ fetchArtwork" + slug);
    
     // const artItemDataArray = getArtwork(slug).then ((res) => {

    
     // const artItemData = Array.isArray(artItemDataArray) ? artItemDataArray[0] : artItemDataArray;
      setState("loading");
try {
     const res = await getArtwork(slug);

//getArtwork(slug).then ((res) => {
      const artItemData: MyArt = res[0] as MyArt;
      console.log (" Artwork found" + artItemData.name);
        

      setArtItem({
        id: artItemData.id,
        name: artItemData.name,
        image: artItemData.image,
        description: artItemData.description,
        price: artItemData.price,
        createdAt: artItemData.createdAt,
        updatedAt: artItemData.updatedAt,
        isAvailable: artItemData.isAvailable,
      });
       setState('success');
     
      } 
      catch (e) {
         setState('error');
        setError(error);
      }
    }

      console.log (" HELLOOOOOOOO");
  
  
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          
         {state==='success' && (<Image
            src={artItem?.image ?? ''}
            alt={artItem?.name ?? ''}
            fill
          />
         )}

            {state==='poo' && (<h1 className={classes.loading}> POO</h1>)}

          {state==='loading' && (<h2 className={classes.loading}> LOADING</h2>)}
          {state==='error' && (<h2 className={classes.loading}> ERROR SORRY</h2>)}
          <h1>{artItem?.name}</h1>
          <p className={classes.name}>
          <h1>{artItem?.price}</h1>
          <p className={classes.price}>
            by {artItem?.price}
          </p>
          <p className={classes.description}>{artItem?.description}</p>
          </p>
        </div>
      </header>
      
    </>
  );
}

