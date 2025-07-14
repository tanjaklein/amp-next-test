"use client"
import React from "react";
import dynamic from "next/dynamic";
import { generateClient } from "aws-amplify/api";
import type { Schema } from "@/amplify/data/resource";
import { Amplify } from "aws-amplify";
import { useState, useEffect}  from "react";


import outputs from "@/amplify_outputs.json"; // Import the Amplify outputs file

Amplify.configure(outputs)


const App = dynamic(() => import("../App"), {
  ssr: false});

const client = generateClient<Schema>() ;// use this Data client for CRUDL requests


 



export  function Gallery () {
   const [todos, setTodos] = useState<Array<Schema["Artwork"]["type"]>>([]);

   useEffect(() => {
    client.models.Artwork.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);
   
  return(
    <>
   <header>
    Gallery page
   </header>
   <div>
     <p>Welcome to the Gallery page!</p>
     <ul>
        {todos.map((todo) => (
          <li 
                  key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    
     </div>
    

     
   </>
  )
}

export default Gallery;