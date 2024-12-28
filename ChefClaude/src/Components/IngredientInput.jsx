import React, { useState } from 'react'
function IngredientInput() {
  const ingredients = ["Chickens", "Oregano", "Tomatoes"]
  console.log(ingredients);
  const ingredientListItems = ingredients.map(ingredient => (  
    <li key={ingredient}>{ingredient}</li>
      ))
      function FormSubmit (event) {
        event.preventDefault()
         console.log("Form submitted") 
         const formData = new FormData(event.currentTarget)
         const newIngredient = formData.get("ingredient")
         ingredients.push(newIngredient)
         console.log(ingredients)
      }  
  return (
    <div className='mt-10 flex justify-left ml-7'>
      <form onSubmit={FormSubmit}>
        <input 
          className='rounded-sm w-96 h-7 text-black' 
          type="text" 
          placeholder="e.g. oregano"
          aria-label='Add ingredient'
          name="ingredient"
        />
        <div className='ml-4 inline-block'>
          <button type="submit" className='bg-green-900 text-white text-center rounded-sm h-7'>
            +Add ingredient
          </button>
        </div>
        <ul className='text-white'>
           {ingredientListItems}  
        </ul>
      </form>
    </div>
  )
}
export default IngredientInput
