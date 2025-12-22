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
 const recipes = [
  { name: 'Soup', ingredients: ['water', 'butter', 'salt', 'carrot'], cookingTime: 20 },
  { name: 'Salad', ingredients: ['arugula', 'onion', 'cucumber', 'parsley'], cookingTime: 10},
  { name: 'Chicken Mexican', ingredients: ['chicken', 'mexican peppers', 'onion', 'garlic'], cookingTime: 30}
 ]

  console.log('-----------------------');

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

 console.log('-----------------------');

function displayAllRecipes() {
  console.log('Displaying all the recipes');
  for (const recipe of recipes) {
    console.log(`Name: ${recipe.name}`);
    console.log(`Ingredients: ${recipe.ingredients.join(', ')}`);
    console.log(`Cooking Time: ${recipe.cookingTime} minutes`);
    console.log('-----------------------');
  }
}

displayAllRecipes();

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

console.log('-----------------------');
console.log('Function: addRecipe(name, ingredients, cookingTime) - adds a new recipe if a recipe with the same name does not already exist.');
function addRecipe(name, ingredients, cookingTime) {
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name.toLowerCase() === name.toLowerCase()) {
      console.log(`Warning: A recipe with the name "${name}" already exists.`);
      return;
    }
  }

  const newRecipe = {
    name: name,
    ingredients: ingredients,
    cookingTime: cookingTime
  };

  recipes.push(newRecipe);
  console.log(`Success: Recipe "${name}" added to the recipe book.`);
}

addRecipe('Pasta', ['pasta', 'tomato', 'garlic'], 20);
addRecipe('Soup', ['water', 'butter', 'salt', 'carrot'], 20); 

console.log('-----------------------');


/*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/

function viewRecipe(name) {
  const recipe = recipes.find(recipe => recipe.name.toLowerCase() === name.toLowerCase());
  if (recipe) {
    console.log(`Name: ${recipe.name}`);
    console.log(`Ingredients: ${recipe.ingredients.join(', ')}`);
    console.log(`Cooking Time: ${recipe.cookingTime} minutes`);
  } else {
    console.log(`Recipe with the name "${name}" not found.`);
  }
}

viewRecipe('Salad');
viewRecipe('Pizza');

console.log('-----------------------');


/*
-----------------------------------------------------------
  STEP 5: Update a Recipe
-----------------------------------------------------------
Function: updateRecipe(name, newIngredients, newCookingTime)
- Finds the recipe by name.
- Updates ingredients and cookingTime.
- Logs success or error message.
*/

console.log('-----------------------');

function updateRecipe(name, newIngredients, newCookingTime) {
  const recipe = recipes.find(recipe => recipe.name.toLowerCase() === name.toLowerCase());
  if (recipe) {
    recipe.ingredients = newIngredients;
    recipe.cookingTime = newCookingTime;
    console.log(`Success: Recipe "${name}" updated.`);
  } else {
    console.log(`Recipe with the name "${name}" not found.`);
  }
}

updateRecipe('Chicken Mexican', ['chicken', 'mexican spices', 'onion', 'garlic'], 35);
updateRecipe('Pizza', ['dough', 'tomato sauce', 'cheese'], 25);

console.log('-----------------------');


/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/

console.log('-----------------------');

function deleteRecipe(name) {
  const recipeIndex = recipes.findIndex(recipe => recipe.name.toLowerCase() === name.toLowerCase());
  if (recipeIndex !== -1) {
    recipes.splice(recipeIndex, 1);
    console.log(`Success: Recipe "${name}" deleted from the recipe book.`);
  } else {
    console.log(`Recipe with the name "${name}" not found.`);
  }
}

deleteRecipe('Salad');
deleteRecipe('Pizza');

console.log('-----------------------');


/*
-----------------------------------------------------------
  STEP 7: Extra Challenge – Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.

Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/

console.log('-----------------------');

function filterByIngredient(ingredient) {
  const filteredRecipes = recipes.filter(recipe => 
    recipe.ingredients.some(ing => ing.toLowerCase() === ingredient.toLowerCase())
  );

  if (filteredRecipes.length > 0) {
    console.log(`Recipes with ingredient "${ingredient}":`);
    for (const recipe of filteredRecipes) {
      console.log(` ${recipe.name}`);
    }
  } else {
    console.log(`No recipes found with the ingredient "${ingredient}".`);
  }
}

filterByIngredient('onion');
filterByIngredient('beef');

console.log('-----------------------');

function filterByMaxTime(maxMinutes) {
  const filteredRecipes = recipes.filter(recipe => recipe.cookingTime <= maxMinutes);

  if (filteredRecipes.length > 0) {
    console.log(`Recipes that take ${maxMinutes} minutes or less:`);
    for (const recipe of filteredRecipes) {
      console.log(`${recipe.name} (${recipe.cookingTime} minutes)`);
    }
  } else {
    console.log(`No recipes found that take ${maxMinutes} minutes or less.`);
  }
}

filterByMaxTime(25);
filterByMaxTime(15);

console.log('-----------------------');