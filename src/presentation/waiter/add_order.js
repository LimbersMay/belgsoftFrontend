/** Work in progress **/
import {getProductInCartById, getProductsInCart} from "../../domain/waiter/getProductsInCart.js";
import {createProductListItem} from "./components/ProductItem.js";

(async () => {

    const productsInCart = await getProductsInCart();
    if (!productsInCart) return;

    const productsListContainer = document.querySelector('#productsList');

    let total = 0;

    for (const {menuId, title, price} of productsInCart) {
        const { quantity } = await getProductInCartById(menuId);
        const productListItem = createProductListItem(title, quantity, price);

        total += price * quantity;
        productsListContainer.insertAdjacentHTML('afterbegin', productListItem);
    }

    // Set the total
    const priceElement = document.querySelector('#total');
    priceElement.innerHTML = `Total: $${total}`;
})()
