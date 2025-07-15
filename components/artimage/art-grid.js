import ArtItem from './art-item';
import classes from './art-grid.module.css';


export default function ArtsGrid({ arts }) {
  return (
    <ul className={classes.arts}>
      {arts.map((art) => (
        <li key={art.id}>
          <ArtItem {...art} />
        </li>
      ))}
    </ul>
  );
}


