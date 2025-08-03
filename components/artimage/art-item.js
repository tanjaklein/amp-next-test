import Link from 'next/link';
import Image from 'next/image';
import mealIcon from '@/assets/icons/meal.png';
import { generateDownloadLinks } from '@/utils/serveractions';
import burgerImg from '@/assets/burger.jpg';
import { Card, Flex, Badge, View, useTheme} from '@aws-amplify/ui-react';


import classes from './art-item.module.css';

export default function ArtItem({ name, slug, image, description, price }) {
 
 // const xxx = generateDownloadLinks(image)

  //console.log('222ArtItem image:', xxx.url);

  const { tokens } = useTheme();

  return (
   <>
    <View
      backgroundColor={tokens.colors.background.secondary}
      padding={tokens.space.medium}
    >
    <Card>
        <Flex>
              <Badge size="small" variation="info">
                Plus
              </Badge>
              <Badge size="small" variation="success">
                Verified
              </Badge>
            </Flex>

      </Card>
      </View>

  
    <article className={classes.artItem}>
      <header>
        <div className={classes.image} width={300} height={300}>
          <Image
            src= { image || burgerImg }
            alt={name}
            fill
             style={{
            objectFit: 'contain',
        }}
           placeholder="blur"
    blurDataURL="data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48RXJyb3I+PENvZGU+SHR0cFZlcnNpb25Ob3RTdXBwb3J0ZWQ8L0NvZGU+PE1lc3NhZ2U+VGhlIEhUVFAgdmVyc2lvbiBzcGVjaWZpZWQgaXMgbm90IHN1cHBvcnRlZC48L01lc3NhZ2U+PFJlcXVlc3RJZD43MkQ4NUVCQkMxQjg3QUVGPC9SZXF1ZXN0SWQ+PEhvc3RJZD5FdWxFc05sTWVLYnBHNStSVlc1bWFFTWlENzJNQ1pCTW8zbytGWmJuVnBYVVJrV1RQZkxoZC9iSWpoa0pUWDJ3czBOSVJQQVcyNGY1U3BwdUNEVkQwK25qQVkvbDNsVDQ8L0hvc3RJZD48L0Vycm9yPg=="
    
            
          />
        </div>
        <div className={classes.headerText}>
          <h2>{name}</h2>
          <p>price {price}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.desription}>{description}</p>
        <div className={classes.actions}>
          <Link href={`/gallery/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
    </>
  );
}
