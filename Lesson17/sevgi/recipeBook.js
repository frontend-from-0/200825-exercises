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
  {name: "scrambled eggs", ingredients: ["egg", "salt", "butter"], cookingTime: 5},
  {name: "chocolate cake", ingredients: ["egg", "sugar", "butter", "milk", "flour", "cocoa", "baking powder", "chocolate"], cookingTime: 35},
  {name: "tomato soup", ingredients: ["olive oil", "butter", "flour", "tomato sauce", "tomato", "water", "milk", "salt"], cookingTime: 20},
  {name: "meatballs", ingredients: ["mince", "egg", "onion", "garlic", "bread crumbs", "tomato sauce", "spices", "parsley", "salt"], cookingTime: 30},
];

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

function displayAllRecipes(){
  console.log('------------------');
  console.log('Displaying all recipes...');

  for (let i = 0; i < recipes.length; i++){
    const currentRecipe = recipes[i];

    console.log(`Name: ${currentRecipe.name}`);
    console.log(`Ingredients: ${currentRecipe.ingredients.join(', ')}`);
    console.log(`Cooking Time: ${currentRecipe.cookingTime} minutes`);
  }

  console.log('End of recipe list.');
  console.log('------------------');
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

function addRecipe(name, ingredients, cookingTime) {
  console.log('------------------');
  console.log(`Adding a recipe with name ${name}...`);
  const newRecipe = {
    name,
    ingredients,
    cookingTime,
  };
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name === name) {
      console.warn(
        `Recipe with name ${name} already exists. \nExisting recipe: Name: ${recipes[i].name}, Ingredients: ${recipes[i].ingredients.join(', ')}, Cooking Time: ${recipes[i].cookingTime}`,
      );
      return;
    }
  }
  recipes.push(newRecipe);
  console.log('Recipe added successfully.');
  console.log('------------------');
}

addRecipe(
  "pancake",
  ["egg", "milk", "flour", "butter"],
  15
);

displayAllRecipes();

/*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/

function viewRecipe(name) {
  console.log('------------------');
  console.log(`Viewing a recipe with name: ${name}...`);

  let count = 0;

  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name === name) {
      console.log(
        `Name: ${recipes[i].name}, Ingredients: ${recipes[i].ingredients.join(', ')}, Cooking Time: ${recipes[i].cookingTime}`,
      );
      count++;
    }
  }

  if (count === 0) {
    console.log(`No recipe found with the name: ${name}`);
  }

  console.log('------------------');
}

viewRecipe("chocolate cake");
viewRecipe("lemon cake");

/*
-----------------------------------------------------------
  STEP 5: Update a Recipe
-----------------------------------------------------------
Function: updateRecipe(name, newIngredients, newCookingTime)
- Finds the recipe by name.
- Updates ingredients and cookingTime.
- Logs success or error message.
*/

function updateRecipe(name, newIngredients, newCookingTime) {
  console.log('------------------');
  console.log(`Updating a recipe with name: ${name}...`);

  for (const recipe of recipes) {
    if (recipe.name === name) {
      recipe.ingredients = newIngredients;
      recipe.cookingTime = newCookingTime;
      console.log('Recipe updated successfully.');
      return;
    }
  }
  console.log(`No recipe found with the name: ${name}`);
  console.log('------------------');
}

updateRecipe("scrambled eggs", ["egg", "salt", "butter", "red pepper"], 6);

/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/

function deleteRecipe(name) {
  console.log('------------------');
  console.log(`Deleting a recipe with name: ${name}...`);

  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name === name) {
      recipes.splice(i, 1);
      console.log('Recipe removed successfully.');
      console.log('------------------');
      return;
    }
  }
  console.log(`No recipe found with the name: ${name}`);
  console.log('------------------');
}

deleteRecipe("tomato soup");

/*
-----------------------------------------------------------
  STEP 7: Extra Challenge – Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.
*/

function filterByIngredient(ingredient) {
  console.log('------------------');
  console.log(`Recipes that include: ${ingredient}`);

  let found = false;

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];

    if (recipe.ingredients.includes(ingredient)) {
      console.log(`Name: ${recipe.name}`);
      console.log(`Ingredients: ${recipe.ingredients.join(', ')}`);
      console.log(`Cooking Time: ${recipe.cookingTime} minutes`);
      console.log('---');
      found = true;
    }
  }

  if (found === false) {
    console.log('No recipe found with that ingredient.');
  }

  console.log('------------------');
}


/*
Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/

function filterByMaxTime(maxMinutes) {
  console.log('------------------');
  console.log(`Recipes with cooking time <= ${maxMinutes} minutes`);

  let found = false;

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];

    if (recipe.cookingTime <= maxMinutes) {
      console.log(`Name: ${recipe.name}`);
      console.log(`Ingredients: ${recipe.ingredients.join(', ')}`);
      console.log(`Cooking Time: ${recipe.cookingTime} minutes`);
      console.log('---');
      found = true;
    }
  }

  if (found === false) {
    console.log('No recipe found within that time.');
  }

  console.log('------------------');
}

filterByIngredient("egg");
filterByIngredient("garlic");

filterByMaxTime(15);
filterByMaxTime(5);