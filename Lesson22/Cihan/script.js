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

const totalPriceElement = document.getElementById('total');

document.addEventListener('DOMContentLoaded', function () {
    
    loadCart();


  for (const product in products) {
    totalPrice += products[product].quantity * products[product].price;
    const productQuantitySpan = document.getElementById(`${product}_quantity`);
    productQuantitySpan.textContent = products[product].quantity;

    const addCartButton = document.getElementById(`${product}_add`);
    addCartButton.addEventListener('click', () => addToCart(product));

    const removeCartButton = document.getElementById(`${product}_remove`);
    removeCartButton.addEventListener('click', () => removeFromCart(product));

    const incrementButton = document.getElementById(`${product}_increment`);
    incrementButton.addEventListener('click', () => increment(product));

    const decrementButton = document.getElementById(`${product}_decrement`);
    decrementButton.addEventListener('click', () => decrement(product));

    const clearButton = document.getElementById('cart_clear');
    clearButton.addEventListener('click', () => clearItems(product));

    // Select increment / decrement buttons for every product and add event listeners to them
  }

  totalPriceElement.textContent = totalPrice;
});

function addToCart(product) {
  products[product].quantity++;
  const newQuantity = products[product].quantity;

  totalPrice += products[product].price;
  totalPriceElement.textContent = totalPrice;

  const productQuantitySpan = document.getElementById(`${product}_quantity`);
  productQuantitySpan.textContent = newQuantity;

  const productCartItem = document.getElementById(`${product}_cart`);
  productCartItem.classList.remove('hidden');

  saveCart()
}

function removeFromCart(product) {
  const oldQuantity = products[product].quantity;

  products[product].quantity = 0;

  totalPrice -= products[product].price * oldQuantity;
  totalPriceElement.textContent = totalPrice;

  const productCartItem = document.getElementById(`${product}_cart`);
  productCartItem.classList.add('hidden');

  saveCart()
}

function increment(product) {
    products[product].quantity++;
    const newQuantity = products[product].quantity;

    totalPrice += products[product].price;
    totalPriceElement.textContent = totalPrice;

    const productQuantitySpan = document.getElementById(`${product}_quantity`);
    productQuantitySpan.textContent = newQuantity;

    const productCartItem = document.getElementById(`${product}_cart`);
    productCartItem.classList.remove('hidden');

    saveCart()
}

function decrement(product) {
    if (products[product].quantity > 0) {
        products[product].quantity--;
        const newQuantity = products[product].quantity;

        totalPrice -= products[product].price;
        totalPriceElement.textContent = totalPrice;

        const productQuantitySpan = document.getElementById(`${product}_quantity`);
        productQuantitySpan.textContent = newQuantity;
    }else{
        removeFromCart(product)
    }

    saveCart()
}

function clearItems(product) {
    for (const product in products) {
    products[product].quantity = 0;
    const newQuantity = removeFromCart(product);

    const lastPrice = products[product].price = 0;
    totalPriceElement.textContent = lastPrice;
    }
    saveCart();
}

function saveCart() {
  for (const product in products) {
    localStorage.setItem(
      `${product}_quantity`,
      products[product].quantity
    );
  }

  localStorage.setItem("totalPrice", totalPrice);
}

function loadCart() {
  for (const product in products) {
    const savedQuantity = localStorage.getItem(`${product}_quantity`);

    if (savedQuantity !== null) {
      products[product].quantity = savedQuantity;
    }
  }

  const savedTotalPrice = localStorage.getItem("totalPrice");
  if (savedTotalPrice !== null) {
    totalPrice = savedTotalPrice;
  }
}