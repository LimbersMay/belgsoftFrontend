/** Work in progress **/
import {getProductsInCart} from "../../domain/waiter/getProductsInCart.js";
import {createProductListItem} from "./components/ProductItem.js";

(async () => {

    const productsInCart = await getProductsInCart();
    if (!productsInCart) return;

    const productsListContainer = document.querySelector('#productsList');

    let total = 0;

    for (const {title, price, quantity} of productsInCart) {
        const productListItem = createProductListItem(title, quantity, price);

        total += price * quantity;
        productsListContainer.insertAdjacentHTML('afterbegin', productListItem);
    }

    // Set the total
    const priceElement = document.querySelector('#total');
    priceElement.innerHTML = `Total: $${total}`;
})()
