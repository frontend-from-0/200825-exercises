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

let recipes = [
  {
    name: "Pasta",
    ingredients: ["pasta", "tomato sauce", "cheese"],
    cookingTime: 20,
  },
  {
    name: "Omelette",
    ingredients: ["eggs", "milk", "salt", "cheese"],
    cookingTime: 10,
  },
  {
    name: "Salad",
    ingredients: ["lettuce", "tomato", "cucumber", "olive oil"],
    cookingTime: 5,
  },
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

function displayAllRecipes() {
console.log('-----------');
console.log('Displaying all recipes');
  if (recipes.length === 0) {
    console.log("No recipes available.");
    return;
  }

  for (let recipe of recipes) {
    console.log("Name:", recipe.name);
    console.log("Ingredients:", recipe.ingredients.join(", "));
    console.log("Cooking Time:", recipe.cookingTime, "minutes");
    console.log("--------------------");
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

function addRecipe(name, ingredients, cookingTime) {
  for (let recipe of recipes) {
    if (recipe.name === name) {
      console.log("Warning: This recipe already exists.");
      return;
    }
  }

  let newRecipe = {
    name: name,
    ingredients: ingredients,
    cookingTime: cookingTime,
  };

  recipes.push(newRecipe);
  console.log("Recipe added successfully.");
}

addRecipe(
  "Cake",
  ["egg", "milk", "flour", "butter", "baking powder", "vanillin"],
  40
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
  for (let recipe of recipes) {
    if (recipe.name === name) {
      console.log("Name:", recipe.name);
      console.log("Ingredients:", recipe.ingredients.join(", "));
      console.log("Cooking Time:", recipe.cookingTime, "minutes");
      return;
    }
  }

  console.log("Recipe not found.");
}

viewRecipe("Pasta");
console.log("--------------------");
viewRecipe("Mantı");

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
  for (let recipe of recipes) {
    if (recipe.name === name) {
      recipe.ingredients = newIngredients;
      recipe.cookingTime = newCookingTime;

      console.log("Recipe updated successfully.");
      return;
    }
  }

  console.log("Recipe not found.");
}

updateRecipe("Pasta", ["pasta", "tomato sauce", "cheese", "basil"], 25);
viewRecipe("Pasta");

updateRecipe(
  "Yaglama",
  ["flour", "tomato", "onion", "pepper", "oil", "mince"],
  40
);

/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/

function deleteRecipe(name) {
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name === name) {
      recipes.splice(i, 1);
      console.log("Recipe deleted successfully.");
      return;
    }
  }

  console.log("Recipe not found.");
}

deleteRecipe("Salad");
displayAllRecipes();

deleteRecipe("Burger");

/*
-----------------------------------------------------------
  STEP 7: Extra Challenge – Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.

Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/

function filterByIngredient(ingredient) {
  let found = false;

  for (let recipe of recipes) {
    if (recipe.ingredients.includes(ingredient)) {
      console.log("Name:", recipe.name);
      console.log("Ingredients:", recipe.ingredients.join(", "));
      console.log("Cooking Time:", recipe.cookingTime, "minutes");
      console.log("--------------------");
      found = true;
    }
  }

  if (!found) {
    console.log("No recipes found with this ingredient.");
  }
}

function filterByMaxTime(maxMinutes) {
  let found = false;

  for (let recipe of recipes) {
    if (recipe.cookingTime <= maxMinutes) {
      console.log("Name:", recipe.name);
      console.log("Ingredients:", recipe.ingredients.join(", "));
      console.log("Cooking Time:", recipe.cookingTime, "minutes");
      console.log("--------------------");
      found = true;
    }
  }

  if (!found) {
    console.log("No recipes found within this time.");
  }
}

filterByIngredient("cheese");
filterByIngredient("chicken");

filterByMaxTime(15);
filterByMaxTime(3);
