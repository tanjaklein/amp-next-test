'use client';


import classes from './page.module.css';
import ImagePicker from '@/components/artimage/image-picker';
import { shareMeal} from '@/lib/actions';
import { useActionState } from "react";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json"; // Import the Amplify outputs file
import ArtworkFormSubmit from "@/components/artimage/meals-form-submit";

Amplify.configure(outputs)



export  function LoadPage () {
   const [state, formAction] = useActionState(shareMeal, { message: 'Meal shared successfully!' });

   console.log('LoadPage state:', state);
   

  return(
    <>
   <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name"  />
            </p>
            <p>
              <label htmlFor="description">Description</label>
              <input type="text" id="description" name="description"  />
            </p>
          </div>
          <p>
            <label htmlFor="price">Price</label>
            <input type="text" id="price" name="price"  />
          </p>
        
         
          <ImagePicker label="Your image" name="image" />
       
          <p className={classes.actions}>
            <ArtworkFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}

 

export default LoadPage;