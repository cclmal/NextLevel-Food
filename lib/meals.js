import fs from 'node:fs'
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = new sql('meals.db');

// ! Modificar la logica de la siguinte funcion para haga una request a una API externa tipo GET
export async function getAllMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
//   throw new Error('Failed to fetch meals');
  const meals = db.prepare('SELECT * FROM meals').all();
  return meals;
}

// ! Modificar la logica de la siguinte funcion para haga una request a una API externa tipo GET
export async function getMeal(id){
  const meal = db.prepare('SELECT * FROM meals WHERE id = ?').get(id);
  return meal;
}


// ! Modificar la logica de la siguinte funcion para haga una request a una API externa tipo POST
export async function saveMeal(meal){

  meal.slug = slugify(meal.title, {lower: true});
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`)
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if(error){
      throw new Error('Failed to save image');
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(`
    INSERT INTO meals 
      (title, summary, instructions, creator, creator_email, image, slug) 
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(meal); 
}