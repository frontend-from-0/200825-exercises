/*
===========================================================
  RECIPE BOOK APPLICATION
===========================================================
In this mini-project, you will create a simple Recipe Book 
to store and manage recipes.

You'll practice:
1. Arrays and objects
2. Loops (for, for-of, findIndex)
3. Conditionals (if-else)
4. CRUD operations (Create, Read, Update, Delete)
5. Extra challenge: Filter by ingredient or cooking time

Run this file in Node.js or the browser console to test.
*/

/*
-----------------------------------------------------------
  STEP 1: Setup and Initial Recipes
-----------------------------------------------------------
1. Create a variable 'recipes' with a suitable data type with a few starter recipes.
2. Each recipe  should have:
   - name (string)
   - ingredients (array of strings)
   - cookingTime (number, in minutes)
*/
console.log('Step 1')
const recipes = [{
  name: 'pancake',
  ingredients: ['egg', 'salt', 'milk', 'flour'],
  cookingTime: 15
}]


console.log('---------------------')

/*
-----------------------------------------------------------
  STEP 2: Display All Recipes
-----------------------------------------------------------
Function: displayAllRecipes()
- Logs each recipe from recipes in a nice format:
  Name: Pasta
  Ingredients: pasta, tomato, garlic
  Cooking Time: 20 minutes
*/

recipes.push({name: 'pasta', ingredients: ['pasta', 'tomato', 'garlic'], cookingTime: 20})
function displayAllRecipes(){
console.log('Displaying all recipes...')


  
console.log(recipes)
console.log('---------------------')

}

displayAllRecipes()

/*
-----------------------------------------------------------
  STEP 3: Add a New Recipe
-----------------------------------------------------------
Function: addRecipe(name, ingredients, cookingTime)
- Checks if a recipe with the same name exists.
- If yes, log a warning and return.
- If not, add the new recipe and log success.
- ingredients should be an array like ['egg', 'milk', 'flour']
*/
function addRecipe(name, ingredients, cookingTime){
  console.log('Step 3');
  console.log(`Adding ${name.toUpperCase()}...`)
  const newRecipe = {
    name: String(name),
    ingredients: Array.isArray(ingredients) ? ingredients : [ingredients],
    cookingTime: Number(cookingTime)
  }
  for(let i = 0; i < recipes.length; i++){
    if(recipes[i].name.toLowerCase() === name.toLowerCase()){
      console.warn(`You cannot add recipe with same name that: ${name}`);
      return;
    }
  }

  recipes.push(newRecipe)
  
  console.log('---------------------')
  }

addRecipe('fish', ['fish','salt'], 25 )
displayAllRecipes()

/*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/
function viewRecipe(name){
  console.log('Step 4');
  console.log(`Viewing ${name.toUpperCase()}...`)
  for( let i = 0; i < recipes.length; i++){
    if(recipes[i].name.toLowerCase() === name.toLowerCase()){
      console.log("Here is your recipe: ", recipes[i]);
      return;
    }
  }
  console.log(`There isn't anything about ${name}`);

  console.log('---------------------');
}

viewRecipe('pasta')
viewRecipe('burger')

/*
-----------------------------------------------------------
  STEP 5: Update a Recipe
-----------------------------------------------------------
Function: updateRecipe(name, newIngredients, newCookingTime)
- Finds the recipe by name.
- Updates ingredients and cookingTime.
- Logs success or error message.
*/
function updateRecipe(name, newIngredients, newCookingTime){
  console.log('Step 5');
  console.log(`Updating ${name.toUpperCase()}...`)

  for(let i = 0; i < recipes.length; i++){
    if(recipes[i].name.toLowerCase() === name.toLowerCase()){
      if(newIngredients !== undefined){
        recipes[i].ingredients = newIngredients;
      }
      if(newCookingTime !== undefined){
        recipes[i].cookingTime = newCookingTime;
      }
      console.log(`The ${name.toUpperCase()} is updated successfully!`)
      return;
    }
  }
  console.log(`Recipe ${name} not found. Cannot update. `)



  console.log('---------------------');
}

updateRecipe('fish', ['fish, salt, lemon'], undefined)
updateRecipe('salad',['tomato', 'cucumber'], 5)
/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/
function deleteRecipe(name){
  console.log('Step 6');
  console.log(`Deleting ${name.toUpperCase()}...`)

  for(let i = 0; i < recipes.length; i++){
    if(recipes[i].name.toLowerCase() === name.toLowerCase()){
      recipes.splice(i,1);
      console.log(`${name.toUpperCase()} was deleted successfully! `);
      return ;
    }
  }
  console.log(`The recipe named by ${name.toLowerCase()} cannot find!`);

  console.log('---------------------');
}

deleteRecipe('fish')
displayAllRecipes()
/*
-----------------------------------------------------------
  STEP 7: Extra Challenge – Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.

Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/



function filterByIngredient(ingredient){
  
  console.log('Step 7 Ingredient Filter')
  console.log(`You can cook they with ${ingredient}:`)
  const filteredIngredient = recipes.filter(function (recipe){
    return recipe.ingredients.includes(ingredient);
  })

  console.log(filteredIngredient);
  console.log('---------------------');
}


filterByIngredient('egg')

function filterByMaxTime(maxMinutes){
  console.log('Step 7 Time Filter')

  console.log(`Shorter than ${maxMinutes} recipes are here:`)
  const shorterRecipes = recipes.filter(function (recipe){
    return recipe.cookingTime <= maxMinutes;
  })


  console.log(shorterRecipes)
  console.log('---------------------');
}


filterByMaxTime(20)