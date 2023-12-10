document.addEventListener('deviceready', onDeviceReady, false);
  function onDeviceReady() {
    renderItems();
    renderCart();
  }
  function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // For simplicity, let's just check if the email and password are non-empty
    if (email && password) {
      // Successful login
      document.getElementById('login-page').style.display = 'none';
      document.getElementById('second-page').style.display = 'block';
    } else {
      // Display an error message or handle authentication logic here
      alert('Invalid login credentials');
    }
  }
const items = [
   { id: 1, name: 'Apple', price: 1.5, image: ' Apple'}
   { id: 2, name: 'Banana', price: 0.75, image: 'banana.jpg' },
   { id: 3, name: 'Orange', price: 1.0, image: 'orange.jpg' },
   { id: 4, name: 'Grapes', price: 2.0, image: 'grapes.jpg' },
   { id: 5, name: 'Strawberry', price: 1.8, image: 'strawberry.jpg' },
   { id: 6, name: 'Mango', price: 2.5, image: 'mango.jpg' },
     // Add more items as needed
     let cartItems = [];

     function addToCart(itemId) {
         const item = document.querySelector(`[data-id="${itemId}"]`);
         const itemName = item.dataset.name;
         const itemPrice = parseFloat(item.dataset.price);

         const existingItem = cartItems.find(cartItem => cartItem.id === itemId);

         if (existingItem) {
             existingItem.quantity += 1;
         } else {
             cartItems.push({
                 id: itemId,
                 name: itemName,
                 price: itemPrice,
                 quantity: 1
             });
         }

         updateCart();
     }

     function updateCart() {
         const cartContainer = document.getElementById('cart-items');
         cartContainer.innerHTML = '';

         cartItems.forEach(item => {
             const cartItem = document.createElement('div');
             cartItem.className = 'item';
             cartItem.innerHTML = `
                 <span>${item.name} x${item.quantity}</span>
                 <span>$${(item.price * item.quantity).toFixed(2)}</span>
                 <button onclick="removeFromCart(${item.id})">Remove</button>
             `;
             cartContainer.appendChild(cartItem);
         });
     }

     function removeFromCart(itemId) {
         cartItems = cartItems.filter(item => item.id !== itemId);
         updateCart();
     }

     function checkout() {
         const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
         alert(`Total: $${total.toFixed(2)}`);
     }
 </script>
</body>
</html>