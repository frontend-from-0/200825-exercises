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


document.addEventListener("DOMContentLoaded", () => {
  totalPrice = 0;
  for (let product in products) {
    const productQuantity = document.getElementById(`${product}_quantity`);
    productQuantity.textContent = products[product].quantity;
    totalPrice += products[product].quantity * products[product].price;

    const productCart = document.getElementById(`${product}_cart`);
    if (products[product].quantity > 0) {
      productCart.classList.remove("hidden");
    } else {
      productCart.classList.add("hidden");
    }

    const addToCartButton = document.getElementById(`${product}_add`);
    addToCartButton.addEventListener("click", () =>
      addToCart(product, productQuantity)
    );
    const removeProduct = document.getElementById(`${product}_remove`);
    removeProduct.addEventListener("click", () => removeFromCart(product));

    const decrementButton = document.getElementById(`${product}_decrement`);
    decrementButton.addEventListener("click", () =>
      decrement(product, productQuantity)
    );

    const incrementButton = document.getElementById(`${product}_increment`);
    incrementButton.addEventListener("click", () =>
      increment(product, productQuantity)
    );
  }

  document.getElementById("total_price").textContent = totalPrice;

  const clearCartButton = document.getElementById("clear_cart");
  if (clearCartButton) {
    clearCartButton.addEventListener("click", clearCart);
  }
  window.addEventListener("beforeunload", saveCart);
});

function addToCart(product, productQuantity) {
  console.log("Clicked add to cart button.");
  products[product].quantity++;
  productQuantity.textContent = products[product].quantity;
  totalPrice += products[product].price;
  document.getElementById("total_price").textContent = totalPrice;

  document.getElementById(`${product}_cart`).classList.remove("hidden");
}

function removeFromCart(product) {
  console.log("Clicked remove to cart button.");
  totalPrice -= products[product].quantity * products[product].price;
  products[product].quantity = 0;
  document.getElementById("total_price").textContent = totalPrice;
  document.getElementById(`${product}_cart`).classList.add("hidden");
}

function decrement(product, productQuantity) {
  console.log("Clicked decrement by one.");

  if (products[product].quantity > 1) {
    products[product].quantity--;
    productQuantity.textContent = products[product].quantity;
    totalPrice -= products[product].price;
    document.getElementById("total_price").textContent = totalPrice;
  } else {
    removeFromCart(product);
  }
}

function increment(product, productQuantity) {
  console.log("Clicked increment by one.");

  products[product].quantity++;
  productQuantity.textContent = products[product].quantity;
  totalPrice += products[product].price;
  document.getElementById("total_price").textContent = totalPrice;
}

function clearCart() {
  console.log("Clicked clear whole cart at once.");
  for (let product in products) {
    products[product].quantity = 0;
    document.getElementById(`${product}_cart`).classList.add("hidden");
  }
  totalPrice = 0;
  document.getElementById("total_price").textContent = totalPrice;
  saveCart();
}

function loadCart() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    Object.assign(products, JSON.parse(savedCart));
  }
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(products));
}

loadCart();