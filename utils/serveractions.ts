


import slugify from 'slugify';
import xss from 'xss';
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Amplify } from "aws-amplify";
import { list,uploadData, getUrl, downloadData } from "aws-amplify/storage";


import outputs from "@/amplify_outputs.json"; // Import the Amplify outputs file


Amplify.configure(outputs);


const client = generateClient<Schema>() ;// use this Data client for CRUDL requests


export async function getArtwork (slug: any) {
  console.log('getArtwork called with slug:', slug);
  const { data: artworks, errors}  = await client.models.Artwork.list({
    filter: {
      slug: {eq: slug}
    }
});
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

  console.log('getArtwork returned:', artworks);
  return artworks;
}
export async function getArtworks () {
  console.log('getArtworks called');
  const artworks = await client.models.Artwork.list();
  console.log('getArtworks returned:', artworks);
  return artworks;
} 

export async function saveArt(artwork:any) {
  console.log ('saveArt called with meal:', artwork);
  artwork.slug = slugify(artwork.name, { lower: true });
  artwork.name = xss(artwork.name);
  artwork.description = xss(artwork.description);
 
  try {
    console.log ("Parsing Price : " + artwork.price);
  artwork.price = parseInt(artwork.price);
  }
  catch (error) {
    console.error('Error parsing price:', error);
    return error;
  }
 // if (isNaN(meal.price)) {
 // throw new Error('Invalid price');
 //}
 //meal.image = xss(meal.image);


  const extension = artwork.image.name.split('.').pop();
  const fileName = `${artwork.slug}.${extension}`;
  console.log('File name:', fileName);  

   if (artwork.image)
  try {
    await uploadData({
          
          path: `picture-submissions/${fileName}`,

          data: artwork.image,
        }).result
        ;
  } catch (error) {
    console.error('Error uploading data:', error);
  }


 
  artwork.image = fileName;

  client.models.Artwork.create(artwork).then((data) => {
    console.log('Artwork saved:', data);
  }).catch((error) => {
    console.error('Error saving Artwork:', error);
  });

  
}



 export async function generateDownloadLinks(fileKey: any) {
  console.log('generateDownloadLinks :' + fileKey);
   //  const result =  downloadData("cat.jpg"); 
       try {
    const linkToStorageFile =  await getUrl(
      {path: `picture-submissions/${fileKey}`})
        
         
       
        ;
        console.log('signed URL: ', linkToStorageFile.url);
        console.log('URL expires at: ', linkToStorageFile.expiresAt);
        return linkToStorageFile.url;
  } catch (error) {
    console.error('Error downloading data:', error);
  }


    
  }

  async function downloadBlob(blob:any, filename:any) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    return a;
  }


  
  export async function sendTheEmail({ data }: { data: any }) {
    
    
    console.log('sendContactEmail called with data:');

    const client = generateClient<Schema>() ;// use this Data client for CRUDL requests
    
    const response =  await client.queries.SendEmail({
      name: data.name,
      email: data.email,
      source: "tanjav@mweb.co.za",
      recipient: data.email,
      body: data.body,
      subject: data.subject
    });
    
    
    
    
        
    console.log("Response from sendTheEmail query:", response);

    
  }

  
