'use client';
import ArtItem from './art-item';
import classes from './art-grid.module.css';
import { Collection} from '@aws-amplify/ui-react';


interface Art {
  slug: string;
  // add other properties as needed, e.g. title: string;
   id: string;
  name: string;
  image: string|null;
  description: string|null;
  price: number|null
  createdAt: string|null;
  updatedAt: string|null;
  isAvailable: boolean|null;
}

interface ArtsGridProps {
  arts: Art[];
}

export default function ArtsGrid({ arts }: ArtsGridProps) {
  return (
  <>
 
   
    <ul className={classes.arts}>
      {arts.map((art) => (
        <li key={art.slug}>
          <ArtItem {...art} />
        </li>
      ))}
    </ul>
  </>
   
  );
}


