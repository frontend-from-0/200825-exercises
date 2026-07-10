/*
===========================================================
  SHOPPING CART APPLICATION
===========================================================
In this project, you'll create a simple Shopping Cart to
simulate adding items, removing items, calculating totals,
and applying discounts.

You'll practice:
1. Classes and objects
2. Encapsulation and abstraction
3. Methods (functions inside a class)
4. Arrays and basic array methods (push, filter, find)
5. Conditional statements (if-else)

Below is a step-by-step guide with comments explaining
each part. You can test each step by running the code in
Node.js or a browser console.
*/

/*
-----------------------------------------------------------
  STEP 1: Create the ShoppingCart Class
-----------------------------------------------------------
1. Define a `ShoppingCart` class.
2. Add a constructor that initializes an empty private 
   array `#items` to store the cart items.
3. Add a `viewCart` method to display all items in the cart.
*/
class ShoppingCart {
  #items;
  #total;

  constructor() {
    this.#items = [];
    this.#total = 0;
  }

  viewCart() {
    console.log("Viewing the cart");
    for (const item of this.#items) {
      console.log(
        `Name: ${item.name}, Price: ${item.price.amount} ${item.price.currency} Quantity: ${item.quantity}`
      );
    }
  }

  /*
-----------------------------------------------------------
  STEP 2: Add Items to the Cart
-----------------------------------------------------------
1. Create an `addItem` method in the `ShoppingCart` class.
2. The method should:
   - Accept `name`, `price`, and `quantity` as parameters.
   - Check if the item already exists in the cart.
     - If it exists, increase the quantity.
     - Otherwise, add the new item to the `#items` array.
*/

  // newItem should be an object
  addItem(newItem) {
    console.log(
      `Adding a new item to the cart. Item name ${newItem.name}, quantity: ${newItem.quantity}`
    );
    for (let i = 0; i < this.#items.length; i++) {
      if (this.#items[i].name.includes(newItem.name)) {
        this.#items[i].quantity++;
        this.#total += newItem.price.amount;
        return;
      }
    }
    this.#items.push(newItem);
    this.#total += newItem.price.amount;
  }

  /*
-----------------------------------------------------------
  STEP 3: Remove Items from the Cart
-----------------------------------------------------------
1. Add a `removeItem` method to the `ShoppingCart` class.
2. The method should:
   - Accept the `name` of the item to remove.
   - Remove the item from the `#items` array if it exists.
*/
  removeItem(name) {
    console.log(`Attempting to remove: ${name}`);
    const initialLength = this.#items.length;

    this.#items = this.#items.filter((item) => item.name !== name);

    if (this.#items.length < initialLength) {
      console.log(`Successfully removed ${name}.`);
    }
    this.getTotal();
  }

  /*
-----------------------------------------------------------
  STEP 4: Calculate the Total Cost
-----------------------------------------------------------
1. Add a `getTotal` method to the `ShoppingCart` class.
2. The method should:
   - Calculate and return the total cost of all items in 
     the cart.
// Duplicate removeItem removed — use the ShoppingCart.prototype.removeItem method defined inside the class.
}*/

  getTotal() {
    let total = 0;
    for (const item of this.#items) {
      total += item.price.amount * item.quantity;
    }
    this.#total = total;
    console.log(`Current Total: ${this.#total} USD`);
    return this.#total;
  }

  /*
-----------------------------------------------------------
  STEP 5: Apply a Discount
-----------------------------------------------------------
1. Add an `applyDiscount` method to the `ShoppingCart` class.
2. The method should:
   - Accept a discount code (e.g., 'SAVE10', 'SAVE20').
   - Apply a percentage discount to the total cost if the 
     code is valid.
3. Use an object to store discount codes and their values.
*/
  applyDiscount(code) {
    console.log(`Applying discount code: ${code}`);

    const discountCodes = {
      SAVE10: 0.1,
      SAVE20: 0.2,
      WELCOME50: 0.5,
    };

    const discountRate = discountCodes[code.toUpperCase()];

    if (discountRate) {
      const discountAmount = this.#total * discountRate;
      this.#total -= discountAmount;
      console.log(`Discount applied! You saved: ${discountAmount} USD.`);
      console.log(`New total after discount: ${this.#total} USD`);
      return this.#total;
    } else {
      console.log("Invalid discount code.");
      return this.#total;
    }
  }
  get total() {
    return this.#total;
  }
}

const myCart = new ShoppingCart();

myCart.addItem({
  name: "Laptop",
  price: { amount: 1200, currency: "USD" },
  quantity: 1,
});
myCart.addItem({
  name: "Mouse",
  price: { amount: 50, currency: "USD" },
  quantity: 2,
});

myCart.removeItem("Mouse");
myCart.viewCart();
myCart.getTotal();
myCart.applyDiscount("SAVE20");
