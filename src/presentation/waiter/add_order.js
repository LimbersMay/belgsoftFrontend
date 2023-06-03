/** Work in progress **/

import {getProductInCartById, getProductsInCart} from "../../domain/waiter/getProductsInCart.js";
import {processProductFromApi} from "../../domain/waiter/processProductsFromApi.js";
import {createProductListItem} from "./components/ProductItem.js";

(async () => {

    const productsInCart = await getProductsInCart();

    if (!productsInCart) return;

    const productsFetchFromApi = Promise.all(
        productsInCart.map(async ({ menuId }) => processProductFromApi(menuId))
    )

    const productsData = await productsFetchFromApi;
    const productsListContainer = document.querySelector('#productsList');

    let total = 0;

    for (const {menuId, name, price} of productsData) {
        const { quantity } = await getProductInCartById(menuId);
        const productListItem = createProductListItem(name, quantity, price);

        total += price * quantity;
        productsListContainer.insertAdjacentHTML('afterbegin', productListItem);
    }

    // Set the total
    const priceElement = document.querySelector('#total');
    priceElement.innerHTML = `Total: $${total}`;
})()
