// import fs from 'node:fs';
import { S3 } from '@aws-sdk/client-s3';


import slugify from 'slugify';
import xss from 'xss';
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Amplify } from "aws-amplify";
import { list,uploadData, getUrl, downloadData } from "aws-amplify/storage";

import { useState }  from 'react';

import outputs from "@/amplify_outputs.json"; // Import the Amplify outputs file


Amplify.configure(outputs);


const client = generateClient<Schema>() ;// use this Data client for CRUDL requests



export async function saveMeal(meal:any) {
  console.log ('saveMeal called with meal:', meal);
  meal.slug = slugify(meal.name, { lower: true });
  meal.name = xss(meal.name);
  meal.description = xss(meal.description);
  meal.price = parseInt(meal.price);
  if (isNaN(meal.price)) {
  throw new Error('Invalid price');
 }
 //meal.image = xss(meal.image);


  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;
  console.log('File name:', fileName);  

   if (meal.image)
  try {
    await uploadData({
          
          path: `picture-submissions/${fileName}`,

          data: meal.image,
        }).result
        ;
  } catch (error) {
    console.error('Error uploading data:', error);
  }


 
  meal.image = fileName;

  client.models.Artwork.create(meal).then((data) => {
    console.log('Artwork saved:', data);
  }).catch((error) => {
    console.error('Error saving Artwork:', error);
  });

  
}



/*async function listObjectsFromS3() {
   const [s3DownloadLinks, setS3DownloadLinks] = useState<HTMLAnchorElement[]>([]);
    const s3Objects = await list( {
      path: 'picture-submissions',
    });
   
    s3Objects.items.map(async (item) => {
      const downloadLink = await generateDownloadLinks(item.path);
      setS3DownloadLinks((s3DownloadLinks) => [
        ...s3DownloadLinks,
        downloadLink,
      ]);
    });
  }
    */

 export  async function generateDownloadLinks(fileKey: any) {
  console.log('generateDownloadLinks' + fileKey);
     const result =  downloadData(fileKey); 
       try {
    await downloadData(fileKey)
        
          
        .result
        ;
  } catch (error) {
    console.error('Error downloading data:', error);
  }


   //return downloadBlob(result, fileKey);
    return result;
    
  }

  async function downloadBlob(blob:any, filename:any) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    return a;
  }


  

  
