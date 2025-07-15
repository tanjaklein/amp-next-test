import Link from 'next/link';
import Image from 'next/image';
import mealIcon from './burger.jpg';


import classes from './art-item.module.css';

export default function ArtItem({ name, id, image, description, price }) {
  return (
    <article className={classes.artItem}>
      <header>
        <div className={classes.image} width={300} height={300}>
          <Image
          src={`http://amplify-ampnexttest-tanja-allisonartimages1234567b-ozmq1robkg1j.s3.us-east-1.amazonaws.com/${image}`}
         
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
          <Link href={`/gallery/${id}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
