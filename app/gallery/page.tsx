"use client"
import React from "react";
import { generateClient } from "aws-amplify/api";
import type { Schema} from "@/amplify/data/resource";
import { Amplify } from "aws-amplify";
import { useState, useEffect}  from "react";
import { getUrl} from "aws-amplify/storage";


// Update the import path to match the actual file location and name
import   ArtsGrid   from "../../components/artimage/art-grid";


import outputs from "@/amplify_outputs.json"; // Import the Amplify outputs file
import { View } from "@aws-amplify/ui-react";

Amplify.configure(outputs)


//const App = dynamic(() => import("../App"), {
 // ssr: false});

const client = generateClient<Schema>() ;// use this Data client for CRUDL requests


export  function Gallery () {
   const [arts, setArts] = useState<Array<Schema["Artwork"]["type"]>>([]);

     useEffect(() => {
    fetchArtworks();
  }, []);
  /* useEffect(() => {
    client.models.Artwork.observeQuery().subscribe({
      next: (data) => setArts([...data.items]),
    });
  }, []);*/

  //useEffect(() => {
   // client.models.Artwork.list().then((data) => {
    //  setArts(data.data);
   // });
  //}, []);

  async function fetchArtworks() {
    const { data: artworks } = await client.models.Artwork.list();
    console.log('Fetched arts:', artworks);
    await Promise.all(
      artworks.map(async (art) => {
        if (art.image) {
          const linkToStorageFile = await getUrl({
            path: `picture-submissions/${art.image}`,
          });
          console.log(linkToStorageFile.url);
          art.image = linkToStorageFile.url.href;
        }
        return art;
      })
    );
   
    setArts(artworks);
  }
   
  return(
    <>
  
  
   <View as='div'>
     
     <ArtsGrid arts={arts} />
     
    
     </View>
    

     
   </>
  )
}

export default Gallery;