import Link from "next/link";
import classes from './page.module.css'
import ImageSlideshow from "@/components/images/image-slideshow";
export default function Home() {
  return (
    <>
      <header className={classes.header}>  
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
            <div className={classes.hero}>
              <h1>
                NextLevel Food for NextLevel Foodies
              </h1>
              <p>Taste & share food from all over the world.</p>
            </div>
            <div className={classes.cta}>
              <Link href="/community">Join the Community</Link>
              <Link href="/meals">Explore Meals</Link>
            </div>
        </div>
      </header>
      <main>
        <section className={classes['section']}>
          <h2>What is Meal Sharing?</h2>
          <p>
            Meal sharing is a community of foodies who share meals with each other. Whether 
            youre a chef or a foodie, you can join our community and share your meals with others. 
            You can also explore meals shared by others and join them for a meal.
          </p>

          <h2>How it Works</h2>
          <p>
            Meal sharing is simple. You can join our community by signing up. Once you sign up, you can 
            share your meals with others. You can also explore meals shared by others and join them for a meal.
          </p>

          <h2>Why Meal Sharing?</h2>
          <p>
            Meal sharing is a great way to meet new people and try new food. You can also learn how to cook 
            new dishes and share your own recipes with others. Meal sharing is a fun and easy way to connect 
            with others who love food.
          </p>
        </section>
      </main>    
    </>
  );
}
