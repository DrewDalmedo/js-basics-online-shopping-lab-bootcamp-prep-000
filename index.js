var cart = [];

function genPrice(max) {
  // generates a number between 1 and max, max inclusive.
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newObject = { itemName: item, itemPrice: genPrice(100) };
 cart.unshift(newObject);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  /* TEMPLATE
   *  In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
   *  "In your cart, you have "
   *  `${temp[itemName]} at ${temp[itemPrice]}, `
   *  `and ${temp[itemName]} at ${temp[itemPrice]}.`
   */

   var cartOverview = "In your cart, you have ";
   for (var i = 0; i < cart.length; i++) {
     var tempItem = cart[i];
     if (i === cart.length - 1) {
       cartOverview += `and ${tempItem[itemName]} at ${tempItem[itemPrice]}.`;
     }
     else {
       cartOverview += `${tempItem[itemName]} at ${tempItem[itemPrice]}, `;
     }
   }

   return cartOverview;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
