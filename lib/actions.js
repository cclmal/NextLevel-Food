'use server'

import { redirect } from "next/navigation";
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache";


function isInvalidText(text) {
    return text.trim() === '';
}



export async function shareMeal(formData){
    'use server'

    const meal = {
        title: formData.get('title'),  
        summary: formData.get('summary'),      
        instructions: formData.get('instructions'),                
        image: formData.get('image'),        
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    }

    if(isInvalidText(meal.title) 
        || isInvalidText(meal.summary) 
        || isInvalidText(meal.instructions) 
        || isInvalidText(meal.creator) 
        || isInvalidText(meal.creator_email)
        || !meal.creator_email.includes('@')
        || !meal.image
        || meal.image.size === 0
    ){
       return { 
            success: false,
            message: 'Invalid input. Please fill in all fields and provide a valid email address.'
        } ;
    }

    await saveMeal(meal);
    revalidatePath('/meals');
    redirect('/meals');
}
