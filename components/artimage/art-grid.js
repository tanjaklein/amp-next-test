import ArtItem from './art-item';
import classes from './art-grid.module.css';
import { Collection} from '@aws-amplify/ui-react';


export default function ArtsGrid({ arts }) {
  return (
  
 /*
 <Collection
      items={arts}
      type="list"
      direction="row"
      gap="20px"
      wrap="nowrap"
      itemRenderer={(art) => (
        <div key={art.slug}>
          <ArtItem {...art} />
        </div>
      )}
    />
*/



   
    <ul className={classes.arts}>
      {arts.map((art) => (
        <li key={art.slug}>
          <ArtItem {...art} />
        </li>
      ))}
    </ul>
   
  );
}


