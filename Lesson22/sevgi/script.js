const products = {
  apples: {
    quantity: 1,
    price: 1,
  },
  bananas: {
    quantity: 1,
    price: 1,
  },
  bread: {
    quantity: 1,
    price: 1,
  },
  eggs: {
    quantity: 1,
    price: 1,
  },
};

let totalPrice = 0;

const totalPriceElement = document.getElementById("total");

document.addEventListener("DOMContentLoaded", function () {
  for (const product in products) {
    totalPrice += products[product].quantity * products[product].price;
    const productQuantitySpan = document.getElementById(`${product}_quantity`);
    productQuantitySpan.textContent = products[product].quantity;

    const addCartButton = document.getElementById(`${product}_add`);
    addCartButton.addEventListener("click", () => addToCart(product));

    const removeCartButton = document.getElementById(`${product}_remove`);
    removeCartButton.addEventListener("click", () => removeFromCart(product));

    const incrementButton = document.getElementById(`${product}_increment`);
    incrementButton.addEventListener("click", () => incrementProduct(product));

    const decrementButton = document.getElementById(`${product}_decrement`);
    decrementButton.addEventListener("click", () => decrementProduct(product));
  }

  totalPriceElement.textContent = totalPrice;

  const clearCartButton = document.getElementById("cart_clear");
  clearCartButton.addEventListener("click", clearCart);
});

function addToCart(product) {
  products[product].quantity++;
  const newQuantity = products[product].quantity;

  totalPrice += products[product].price;
  totalPriceElement.textContent = totalPrice;

  const productQuantitySpan = document.getElementById(`${product}_quantity`);
  productQuantitySpan.textContent = newQuantity;

  const productCartItem = document.getElementById(`${product}_cart`);
  productCartItem.classList.remove("hidden");
}

function removeFromCart(product) {
  const oldQuantity = products[product].quantity;

  products[product].quantity = 0;

  totalPrice -= products[product].price * oldQuantity;
  totalPriceElement.textContent = totalPrice;

  const productCartItem = document.getElementById(`${product}_cart`);
  productCartItem.classList.add("hidden");
}

function incrementProduct(product) {
  products[product].quantity++;
  totalPrice += products[product].price;
  totalPriceElement.textContent = totalPrice;

  const productQuantitySpan = document.getElementById(`${product}_quantity`);
  productQuantitySpan.textContent = products[product].quantity;

  const productCartItem = document.getElementById(`${product}_cart`);
  productCartItem.classList.remove("hidden");
}

function decrementProduct(product) {
  if (products[product].quantity > 0) {
    products[product].quantity--;
    totalPrice -= products[product].price;
    totalPriceElement.textContent = totalPrice;

    const productQuantitySpan = document.getElementById(`${product}_quantity`);
    productQuantitySpan.textContent = products[product].quantity;

    const productCartItem = document.getElementById(`${product}_cart`);

    if (products[product].quantity === 0) {
      productCartItem.classList.add("hidden");
    }
  }
}

function clearCart() {
  totalPrice = 0;
  totalPriceElement.textContent = totalPrice;

  for (const product in products) {
    products[product].quantity = 0;

    const productQuantitySpan = document.getElementById(`${product}_quantity`);
    productQuantitySpan.textContent = 0;

    const productCartItem = document.getElementById(`${product}_cart`);
    productCartItem.classList.add("hidden");
  }
}
