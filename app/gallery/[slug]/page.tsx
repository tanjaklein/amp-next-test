'use client';


import { getArtwork } from '@/utils/serveractions';
import React, { useState, useEffect, use } from 'react';

   import { Link, Card, Flex, Image, View, useTheme, Badge, Text, Divider, Heading} from '@aws-amplify/ui-react';
    




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
 
   const { tokens } = useTheme();
   const [error, setError] = useState('');
    const [state, setState] = useState('');
    const [artItem, setArtItem] = useState<MyArt>();
  
   const  pm  =  use (params);
    const slug =  pm.slug;

   //const params = useParams();
   //const slug = params.slug;


    console.log (" JJJJ Artwork slug= " + slug);
   //const ss =  params.slug;

  
 

   useEffect(() => {
    
    console.log (" useEffect Artwork slug" + slug);
    setState("loading");

     
      fetchArtworks(slug);
        
    
  }, [ ]);
  

  
 async function  fetchArtworks (slug:any) {

   console.log (" ZZZZZZ fetchArtwork" + slug);
    
    
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

     
  return (
    <View
          backgroundColor={tokens.colors.background.secondary}
          padding={tokens.space.medium}
        >
          <Card>
            <Flex direction="row" alignItems="flex-start">
              <Image
               src={artItem?.image ?? ''}
               alt={artItem?.name ?? ''}
               width="33%"
              />
              <Flex
                direction="column"
                alignItems="flex-start"
                gap={tokens.space.xs}
              >
                <Flex>
                  <Badge size="small" variation="info">
                    {artItem?.isAvailable ? 'Available': 'Not Available'}
                  </Badge>
                  <Badge size="small" variation="success">
                    Verified
                  </Badge>
                </Flex>
    
                <Heading level={5}>
                {artItem?.name ?? ''}
                </Heading>
    
                <Text as="span">
                   {artItem?.description ?? ''}
                </Text>

                 <Text as="span">
                   R{artItem?.price}.00
                </Text>
                  <Link  href="/contract" 
                  color="#4177c9ff">
                    Send an Email</Link>
              </Flex>
            </Flex>
    
          </Card>
           <Divider
        orientation="horizontal" />
        </View>
    
    
    /*
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          
         {state==='success' && (
        
          <Image
            src={artItem?.image ?? ''}
            alt={artItem?.name ?? ''}
            fill
             style={{
                  objectFit: 'contain',
              }}
                 placeholder="blur"
          blurDataURL="data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48RXJyb3I+PENvZGU+SHR0cFZlcnNpb25Ob3RTdXBwb3J0ZWQ8L0NvZGU+PE1lc3NhZ2U+VGhlIEhUVFAgdmVyc2lvbiBzcGVjaWZpZWQgaXMgbm90IHN1cHBvcnRlZC48L01lc3NhZ2U+PFJlcXVlc3RJZD43MkQ4NUVCQkMxQjg3QUVGPC9SZXF1ZXN0SWQ+PEhvc3RJZD5FdWxFc05sTWVLYnBHNStSVlc1bWFFTWlENzJNQ1pCTW8zbytGWmJuVnBYVVJrV1RQZkxoZC9iSWpoa0pUWDJ3czBOSVJQQVcyNGY1U3BwdUNEVkQwK25qQVkvbDNsVDQ8L0hvc3RJZD48L0Vycm9yPg=="
          
          />
           

         )
         }

 <div className={classes.headerText}>
                <h2>{artItem?.name} </h2>
                <p>price {artItem?.price} </p>
              </div>
          {state==='loading' && (<h2 className={classes.loading}> LOADING</h2>)}
          {state==='error' && (<h2 className={classes.loading}> ERROR SORRY</h2>)}
          <h1>{artItem?.name}</h1>
          <p className={classes.name}>
          <h1>{artItem?.price}</h1>
          <p className={classes.price}>
            price is {artItem?.price}
          </p>
          <p className={classes.description}>{artItem?.description}</p>
          </p>
        </div>
      </header>
      
    </>
    */
  );
}

