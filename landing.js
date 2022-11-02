var count = 0;

var signUpForm = document.querySelector("#email-submit");

var emailInput = document.querySelector("#input-box");

var footer = document.querySelector("footer");

var cartCount = document.querySelector("#cart-number");

var earbudsBtn = document.querySelector("#earbuds-button");

var headphonesBtn = document.querySelector("#headphones-button");

var speakersBtn = document.querySelector("#speakers-button");

var partySpeakersBtn = document.querySelector("#party-speakers-button");


function addToCart() {
  count = count + 1;
  if (count === 1) {
    cartCount.textContent = "Cart: 1 item";
  } else {
    cartCount.textContent = "Cart: " + count + " items";
  } 
}

earbudsBtn.addEventListener("click", addToCart);

headphonesBtn.addEventListener("click", addToCart);

speakersBtn.addEventListener("click", addToCart);

partySpeakersBtn.addEventListener("click", addToCart);




function emailFormHandler() {
  var confirmationMsg = document.createElement("p");
  confirmationMsg.textContent = "Welcome to the family, " + emailInput.value + "!";
  signUpForm.remove(); footer.appendChild(confirmationMsg);
}

var subscribeBtn = document.querySelector("#subscribe-btn");

subscribeBtn.addEventListener("click", emailFormHandler);


var cartBtn = document.querySelector("#button");


var clearCartBtn = document.querySelector("#clear-cart");

function clearCart() {
  count = -1;
  addToCart();
}

clearCartBtn.addEventListener("click", clearCart);