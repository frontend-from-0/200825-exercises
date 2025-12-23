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
  {
    name: "omlette",
    ingredients: ["egg", "butter", "milk", "salt", "yellow cheese"],
    cookingTime: 8,
  },

  {
    name: "apple pie",
    ingredients: [
      "apple",
      "butter",
      "flour",
      "milk",
      "vanilla",
      "sugar",
      "egg",
      "cinnamon",
    ],
    cookingTime: 30,
  },

  {
    name: "meatball",
    ingredients: [
      "mincemeat",
      "breadcrumb",
      "spices",
      "egg",
      "parsley",
      "onion",
    ],
    cookingTime: 20,
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
console.log("------------");
console.log("Displaying all recipes");

function displayAllRecipes() {
  for (const recipe of recipes) {
    console.log(
      `Name: ${recipe.name}, Ingredients: ${recipe.ingredients}, Cooking time: ${recipe.cookingTime}`
    );
  }
}

displayAllRecipes();

console.log("End of recipes");
console.log("------------");
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
console.log("------------");
console.log("Adding new recipe");

function addRecipe(name, ingredients, cookingTime) {
  const newRecipe = {
    name,
    ingredients,
    cookingTime,
  };

  for (let i = 0; i < recipes.length; i++) {
    if (name === recipes[i].name) {
      console.log(`Recipe named ${name} already exists.`);
      return;
    }
  }
  recipes.push(newRecipe);
  console.log("New recipe added successfully.");
}

addRecipe("blabla", ["blablablablablabla"], 10);
addRecipe("apple pie", ["blablablablablabla"], 10);

console.log("Recipe added");
console.log("------------");
/*
-----------------------------------------------------------
  STEP 4: View a Recipe by Name
-----------------------------------------------------------
Function: viewRecipe(name)
- Looks for the recipe by name and logs all its info.
- If not found, shows a message.
*/
console.log("------------");
console.log("Viewing recipe by name");

function viewRecipe(name) {
  let count = 0;

  for (let i = 0; i < recipes.length; i++) {
    if (name === recipes[i].name) {
      console.log(
        `Name: ${recipes[i].name}, Ingredients: ${recipes[i].ingredients}, Cooking time: ${recipes[i].cookingTime}`
      );
      count++;
    }
  }

  if (count === 0) {
    console.log(`No recipes found with the name: ${name}`);
  }
}

viewRecipe(omlette);
viewRecipe(magnolia);

console.log("End of viewing recipe");
console.log("------------");
/*
-----------------------------------------------------------
  STEP 5: Update a Recipe
-----------------------------------------------------------
Function: updateRecipe(name, newIngredients, newCookingTime)
- Finds the recipe by name.
- Updates ingredients and cookingTime.
- Logs success or error message.
*/
console.log("------------");
console.log("Updating recipe");

function updateRecipe(name, newIngredients, newCookingTime) {
  for (let i = 0; i < recipes.length; i++) {
    if (name === recipes[i].name) {
      recipes[i].ingredients = newIngredients;
      recipes[i].cookingTime = newCookingTime;
      console.log(`Recipe of ${recipes[i].name} updated successfully`);
      return;
    }
  }

  console.log(`No recipe found with the name: ${name}`);
}

updateRecipe("omlette", "egg, milk etc.", 10);
updateRecipe("meat", "blablabla", 15);

console.log("End of updating recipe");
console.log("------------");
/*
-----------------------------------------------------------
  STEP 6: Delete a Recipe
-----------------------------------------------------------
Function: deleteRecipe(name)
- Finds and removes the recipe from the array.
- Logs success or error message.
*/
console.log("------------");
console.log("Deleting recipe");

function deleteRecipe(name) {
  for (let i = 0; i < recipes.length; i++) {
    if (name === recipes[i].name) {
      recipes.splice(i, 1);
      console.log(`Recipe named ${recipes[i].name} removed successfully.`);
      return;
    }
  }

  console.log(`No recipe found with the name: ${name}`);
}

deleteRecipe("omlette");
deleteRecipe("cake");

console.log("End of deleting recipe");
console.log("------------");
/*
-----------------------------------------------------------
  STEP 7: Extra Challenge – Filter Recipes
-----------------------------------------------------------
Function: filterByIngredient(ingredient)
- Shows all recipes that use a certain ingredient.

Function: filterByMaxTime(maxMinutes)
- Shows recipes that take <= maxMinutes to cook.
*/

console.log("------------");
console.log("Including some ingredients recipe");

function filterByIngredient(ingredient) {
  let count = 0;
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].ingredients.includes(ingredient)) {
      console.log(`Name: ${recipes[i].name} includes ${ingredient}`);
      count++;
    }
  }
  if (count === 0) {
    console.log(`No recipes includes: ${ingredient}`);
  }
}

filterByIngredient("milk");
filterByIngredient("cherry");

console.log("End of including something recipe");
console.log("------------");

console.log("------------");
console.log("Cooking time filtered recipe");

function filterByMaxTime(maxMinutes) {
  let count = 0;
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].cookingTime <= maxMinutes) {
      console.log(`Name: ${recipes[i].name} has less time than ${maxMinutes}`);
      count++;
    }
  }
  if (count === 0) {
    console.log(`No recipes found under ${maxMinutes} minutes.`);
  }
}

filterByMaxTime(20);
filterByMaxTime(5);

console.log("End of cooking time filtered recipe");
console.log("------------");


