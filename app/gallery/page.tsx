"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() ;// use this Data client for CRUDL requests

export async function getData() {
   // Fetch records from the database and use them in your frontend component.
   // (THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
   
   // For example, in a React component, you can use this snippet in your
   // function's RETURN statement
   //
const { data: arts } = await client.models.Artwork.list();
   return <ul>{arts.map(todo => <li key={todo.id}>{todo.name}</li>)}</ul>;
}

export  function Gallery () {
   
  return(
    <>
   <header>
    Gallery page
   </header>
   <div>
     <p>Welcome to the Gallery page!</p>
     <p>{getData()}</p>
     </div>
    

     
   </>
  )
}

export default Gallery;