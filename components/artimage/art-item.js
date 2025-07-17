import Link from 'next/link';
import Image from 'next/image';
import mealIcon from '@/assets/icons/meal.png';
import { generateDownloadLinks } from '@/lib/meals';


import classes from './art-item.module.css';

export default function ArtItem({ name, slug, image, description, price }) {
  console.log('ArtItem image:', image);
  //const xxx = generateDownloadLinks(image)

  // console.log('ArtItem image:', xxx);


  return (
    <article className={classes.artItem}>
      <header>
        <div className={classes.image} width={300} height={300}>
          <Image
            src= "/next.svg"
            alt={name}
            fill
           
            
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
  );
}
