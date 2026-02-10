const products = {
  apples: { quantity: 1, price: 1 },
  bananas: { quantity: 1, price: 1 },
  bread: { quantity: 1, price: 1 },
  eggs: { quantity: 1, price: 1 },
};

let totalPrice = 0;
const totalPriceElement = document.getElementById("total");

document.addEventListener("DOMContentLoaded", function () {
  const savedCart = localStorage.getItem("mart_cart");
  if (savedCart) {
    const parsedCart = JSON.parse(savedCart);
    for (const key in parsedCart) {
      if (products[key]) {
        products[key].quantity = parsedCart[key].quantity;
      }
    }
  }

  totalPrice = 0;
  for (const product in products) {
    totalPrice += products[product].quantity * products[product].price;

    const productQuantitySpan = document.getElementById(`${product}_quantity`);
    if (productQuantitySpan) {
      productQuantitySpan.textContent = products[product].quantity;
    }

    const productCartItem = document.getElementById(`${product}_cart`);
    if (productCartItem) {
      if (products[product].quantity > 0) {
        productCartItem.classList.remove("hidden");
      } else {
        productCartItem.classList.add("hidden");
      }
    }

    setupButton(`${product}_add`, () => addToCart(product));
    setupButton(`${product}_remove`, () => removeFromCart(product));
    setupButton(`${product}_increment`, () => changeQuantity(product, 1));
    setupButton(`${product}_decrement`, () => changeQuantity(product, -1));
  }

  setupButton("cart_clear", clearCart);

  if (totalPriceElement) {
    totalPriceElement.textContent = totalPrice;
  }
});

function setupButton(id, action) {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener("click", action);
}

function saveToLocalStorage() {
  localStorage.setItem("mart_cart", JSON.stringify(products));
}

function updateUI(product) {
  const productQuantitySpan = document.getElementById(`${product}_quantity`);
  if (productQuantitySpan) {
    productQuantitySpan.textContent = products[product].quantity;
  }

  let currentTotal = 0;
  for (const key in products) {
    currentTotal += products[key].quantity * products[key].price;
  }
  totalPrice = currentTotal;
  if (totalPriceElement) {
    totalPriceElement.textContent = totalPrice;
  }
}

function changeQuantity(product, amount) {
  const newQty = products[product].quantity + amount;
  if (newQty >= 0) {
    products[product].quantity = newQty;

    const cartItem = document.getElementById(`${product}_cart`);
    if (newQty === 0) {
      if (cartItem) cartItem.classList.add("hidden");
    } else {
      if (cartItem) cartItem.classList.remove("hidden");
    }

    updateUI(product);
    saveToLocalStorage();
  }
}

function addToCart(product) {
  products[product].quantity++;
  updateUI(product);

  const cartItem = document.getElementById(`${product}_cart`);
  if (cartItem) cartItem.classList.remove("hidden");

  saveToLocalStorage();
}

function removeFromCart(product) {
  products[product].quantity = 0;
  updateUI(product);

  const cartItem = document.getElementById(`${product}_cart`);
  if (cartItem) cartItem.classList.add("hidden");

  saveToLocalStorage();
}

function clearCart() {
  for (const product in products) {
    products[product].quantity = 0;
    updateUI(product);
    const cartItem = document.getElementById(`${product}_cart`);
    if (cartItem) cartItem.classList.add("hidden");
  }
  saveToLocalStorage();
}
