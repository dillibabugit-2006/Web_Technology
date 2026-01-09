let cartCount = 0;
let cartItems = []; // store items
let cartVisible = false; // track cart visibility

function addToCart(productName, price) {
  cartCount++;
  cartItems.push({name: productName, price: price});

  // Update cart count
  document.getElementById("cart-count").innerText = cartCount;

  // Update cart items list (even if hidden)
  updateCartDisplay();
}

// Toggle cart items display when cart is clicked
function toggleCart() {
  let cartItemsDiv = document.getElementById("cart-items");
  cartVisible = !cartVisible;
  if(cartVisible) {
    cartItemsDiv.classList.remove("hidden");
  } else {
    cartItemsDiv.classList.add("hidden");
  }
}

// Update cart content
function updateCartDisplay() {
  let cartItemsDiv = document.getElementById("cart-items");
  cartItemsDiv.innerHTML = ""; // clear previous

  let total = 0;
  cartItems.forEach((item, index) => {
    cartItemsDiv.innerHTML += `${index + 1}. ${item.name} - $${item.price}<br>`;
    total += item.price;
  });

  if(cartItems.length > 0){
    cartItemsDiv.innerHTML += `<hr>Total: $${total}`;
  }
}
