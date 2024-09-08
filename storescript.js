let cartCount = 0;
let cartTotal = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
        const product = event.target.parentElement;
        const price = parseInt(product.getAttribute('data-price'));
        
        cartCount += 1;
        cartTotal += price;

        document.getElementById('cart-count').textContent = `Cart: ${cartCount} items`;
        document.getElementById('cart-total').textContent = `Total: ${cartTotal} KRW`;
    });
});
