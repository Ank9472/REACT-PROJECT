import React, { useState } from 'react';

function IngredientInput() {
  const [ingredients, setIngredients] = useState([]);
  const ingredientListItems = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>);

  function addIngredient(event) {
    event.preventDefault(); 
    const formData = new FormData(event.target);
    const newIngredient = formData.get("ingredient");
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
  }

  return (
    <div className='mt-10 flex justify-left ml-7'>
      <form onSubmit={addIngredient} className='add-Ingredient-form'>
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
        <ul className='text-white' aria-live='polite'>
          {ingredientListItems}
        </ul>
      </form>
    </div>
  );
}

export default IngredientInput;
