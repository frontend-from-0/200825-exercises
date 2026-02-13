const totalPriceElement = document.getElementById('total');

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
const STORAGE_KEY = "shopping_cart";


function updateProductUI(product) {
  const qty = products[product].quantity;

  const productQuantitySpan = document.getElementById(`${product}_quantity`);
  if (productQuantitySpan) productQuantitySpan.textContent = qty;

  const productCartItem = document.getElementById(`${product}_cart`);
  if (productCartItem) {
    if (qty <= 0) productCartItem.classList.add('hidden');
    else productCartItem.classList.remove('hidden');
  }
}

function updateTotalUI() {
  totalPriceElement.textContent = totalPrice;
}

document.addEventListener('DOMContentLoaded', function () {
  loadCartFromStorage();
  
  for (const product in products) {
    totalPrice += products[product].quantity * products[product].price;
    const productQuantitySpan = document.getElementById(`${product}_quantity`);
    productQuantitySpan.textContent = products[product].quantity;
    updateProductUI(product);


    const addCartButton = document.getElementById(`${product}_add`);
    addCartButton.addEventListener('click', () => addToCart(product));

    const removeCartButton = document.getElementById(`${product}_remove`);
    removeCartButton.addEventListener('click', () => removeFromCart(product));

    // Select increment / decrement buttons for every product and add event listeners to them
    const incrementButton = document.getElementById(`${product}_increment`);
    if (incrementButton) {
      incrementButton.addEventListener('click', () => increment(product));
    }

    const decrementButton = document.getElementById(`${product}_decrement`);
    if (decrementButton) {
      decrementButton.addEventListener('click', () => decrement(product));
    }

  }

  const clearButton = document.getElementById('cart_clear');
  clearButton.addEventListener('click', clearCart);


  totalPriceElement.textContent = totalPrice;
});

function changeQuantity(product, delta) {
  const oldQty = products[product].quantity;
  const newQty = Math.max(0, oldQty + delta);
  const actualDelta = newQty - oldQty;

  if (actualDelta === 0) return;

  products[product].quantity = newQty;
  totalPrice += actualDelta * products[product].price;

  updateProductUI(product);
  updateTotalUI();
  persistCart();
}


function addToCart(product) {
  changeQuantity(product, +1);
}

function removeFromCart(product) {
  changeQuantity(product, -products[product].quantity);
}

function increment(product) {
  changeQuantity(product, +1);
}


function decrement(product) {
  changeQuantity(product, -1);
}


function clearCart() {
  for (const product in products) {
    products[product].quantity = 0;
    updateProductUI(product);
  }

  totalPrice = 0;
  updateTotalUI();

  persistCart();
}

function persistCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

function loadCartFromStorage() {
  const savedCart = localStorage.getItem(STORAGE_KEY);
  if (!savedCart) return;

  const parsedCart = JSON.parse(savedCart);

  for (const product in products) {
    if (parsedCart[product]) {
      products[product].quantity = parsedCart[product].quantity;
    }
  }
}
