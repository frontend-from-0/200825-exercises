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
  for (const product in products) {
    totalPrice += products[product].quantity * products[product].price;
    const productQuantitySpan = document.getElementById(`${product}_quantity`);
    productQuantitySpan.textContent = products[product].quantity;

    const addCartButton = document.getElementById(`${product}_add`);
    addCartButton.addEventListener('click', () => addToCart(product));

    const removeCartButton = document.getElementById(`${product}_remove`);
    removeCartButton.addEventListener('click', () => removeFromCart(product));

    const decrementButton = document.getElementById(`${product}_decrement`);
    decrementButton.addEventListener('click', () => decrement(product,productQuantity));

    const incrementButton = document.getElementById(`${product}_increment`);
    incrementButton.addEventListener('click', () => increment(product,productQuantity));

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
}

function removeFromCart(product) {
  const oldQuantity = products[product].quantity;

  products[product].quantity = 0;

  totalPrice -= products[product].price * oldQuantity;
  totalPriceElement.textContent = totalPrice;

  const productCartItem = document.getElementById(`${product}_cart`);
  productCartItem.classList.add('hidden');
  saveCart();
}

function decrement(product, productQuantity) {
  if(products[product].quantity >1 ) {
    products[product].quantity--;
    productQuantity.textContent=products[product].quantity;
    totalPrice -= products[product].price;
    document.getElementById('total_price').textContent = totalPrice;
  } else {
    removeFromCart(product);
  }

  function increment ( product, productQuantity) {
    products[product].quantity++;
    productQuantity.textContent=products[product].quantity;
    totalPrice += products[product].price;
    document.getElementById('total_price').textContent=totalPrice;

  }
}

function saveCart() {
    localStorage.setItem('cart',JSON.stringify(products));
}