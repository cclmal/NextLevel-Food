import MealItem from './meal-item';
import classes from './meals-grid.module.css';


export default function MealsGrid({meals, styles}) {
  return (
    <ul className={classes.meals}>
      {
        meals && meals.length > 0 ?  
        meals.map(meal => <li key={meal.id}>
          <MealItem {...meal} />
        </li>)
        : <p className={styles.nomeals}>No meals yet, start sharing one!</p>
      }
    </ul>
  );
}