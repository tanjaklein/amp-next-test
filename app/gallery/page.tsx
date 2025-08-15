
import React from "react";
import { Amplify } from "aws-amplify";
import { Suspense } from 'react';
import classes from './page.module.css';


// Update the import path to match the actual file location and name
import   ArtsGrid   from "../../components/artimage/art-grid";


import { getArtworks } from "@/utils/serveractions";





async function Artwork() {
  console.log('Fetching artworks...');
  const arts = await getArtworks();

  return <ArtsGrid arts={arts} />;
}

export  function Gallery () {
 
  return(
    <>
  
  
    <Suspense fallback={<p className={classes.loading}>Fetching Gallery...</p>}>
          <Artwork />
        </Suspense>
     
    
   </>
  )
}

export default Gallery;