"use client"
import React from "react";
import dynamic from "next/dynamic";
import { generateClient } from "aws-amplify/api";
import type { Schema} from "@/amplify/data/resource";
import { Amplify } from "aws-amplify";
import { useState, useEffect}  from "react";
import { list,uploadData, getUrl, downloadData } from "aws-amplify/storage";


// Update the import path to match the actual file location and name
import   ArtsGrid   from "../../components/artimage/art-grid";


import outputs from "@/amplify_outputs.json"; // Import the Amplify outputs file

Amplify.configure(outputs)


const App = dynamic(() => import("../App"), {
  ssr: false});

const client = generateClient<Schema>() ;// use this Data client for CRUDL requests
//const emailclient = generateClient<EmailSchema>() ;// use this Data client for CRUDL requests



export  function Gallery () {
   const [arts, setArts] = useState<Array<Schema["Artwork"]["type"]>>([]);

     useEffect(() => {
    fetchNotes();
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

  async function fetchNotes() {
    const { data: notes } = await client.models.Artwork.list();
    console.log('Fetched notes:', notes);
    await Promise.all(
      notes.map(async (note) => {
        if (note.image) {
          const linkToStorageFile = await getUrl({
            path: `picture-submissions/${note.image}`,
          });
          console.log(linkToStorageFile.url);
          note.image = linkToStorageFile.url.href;
        }
        return note;
      })
    );
   
    setArts(notes);
  }
   
  return(
    <>
  
   <header>
    Gallery page
   </header>
   <div>
     <p>Welcome to the Gallery page!</p>
     <ArtsGrid arts={arts} />
     
    
     </div>
    

     
   </>
  )
}

export default Gallery;