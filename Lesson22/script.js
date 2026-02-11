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

  loadFromLocalStorage();

  for (const product in products) {
    totalPrice += products[product].quantity * products[product].price;
    const productQuantitySpan = document.getElementById(`${product}_quantity`);
    productQuantitySpan.textContent = products[product].quantity;

    const addCartButton = document.getElementById(`${product}_add`);
    addCartButton.addEventListener('click', () => addToCart(product));

    const removeCartButton = document.getElementById(`${product}_remove`);
    removeCartButton.addEventListener('click', () => removeFromCart(product));

    // Select increment / decrement buttons for every product and add event listeners to them

    const decrementButton = document.getElementById(`${product}_decrement`);
    decrementButton.addEventListener('click', () => decrementFromCart(product));
    
    const incrementButton = document.getElementById(`${product}_increment`);
    incrementButton.addEventListener('click', () => incrementToQuantity(product));

    const productCartItem = document.getElementById(`${product}_cart`)
    if(products[product].quantity <= 0){
      productCartItem.classList.add('hidden');
      
      totalPrice = 0;
    }
    else{
      productCartItem.classList.remove('hidden')
    }
    
    
  }

  const clearCartButton = document.getElementById('cart_clear');
  clearCartButton.addEventListener('click', clearCart)

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

  saveToLocalStorage();
}

function removeFromCart(product) {
  const oldQuantity = products[product].quantity;

  products[product].quantity = 0;

  totalPrice -= products[product].price * oldQuantity;
  totalPriceElement.textContent = totalPrice;

  const productCartItem = document.getElementById(`${product}_cart`);
  productCartItem.classList.add('hidden');

  saveToLocalStorage();
}

function decrementFromCart(product) {
  products[product].quantity--;
  const newDecreasedQuantity = products[product].quantity;

  totalPrice -= products[product].price;
  totalPriceElement.textContent = totalPrice;

  const productQuantitySpan = document.getElementById(`${product}_quantity`);
  productQuantitySpan.textContent = newDecreasedQuantity;

  if(newDecreasedQuantity <= 0){
    removeFromCart(product);
  }

  saveToLocalStorage();
}

function incrementToQuantity(product){
  products[product].quantity++;
  const newQuantity = products[product].quantity;

  totalPrice += products[product].price;
  totalPriceElement.textContent = totalPrice;

  const productQuantitySpan = document.getElementById(`${product}_quantity`);
  productQuantitySpan.textContent = newQuantity;

  saveToLocalStorage();
}


function clearCart(){
  for(const product in products){
    products[product].quantity = 0;

    const productQuantitySpan = document.getElementById(`${product}_quantity`)
    productQuantitySpan.textContent = products[product].quantity;

    const productCartItem = document.getElementById(`${product}_cart`);
    productCartItem.classList.add('hidden');

    
  }
  totalPrice = 0;
  totalPriceElement.textContent = totalPrice;
  saveToLocalStorage();
}

function saveToLocalStorage(){
  localStorage.setItem('cartProducts', JSON.stringify(products));
  localStorage.setItem('cartTotal', totalPrice);
}


function loadFromLocalStorage(){
  const savedData = localStorage.getItem('cartProducts');
  
  if (savedData) {
    const savedProducts = JSON.parse(savedData);
        
    for (const key in savedProducts) {
      if (products[key]) {
        products[key].quantity = savedProducts[key].quantity;
      }
    }
  }
}