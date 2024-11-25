// Function to add a product to the cart
function addToCart(productName, productPrice) {
    // Get the current cart from localStorage or create an empty array if it doesn't exist
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new product to the cart
    cart.push({ name: productName, price: productPrice });

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));


    alert(productName + " has been added to your cart!");
}
