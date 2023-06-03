import {persistProductsInCart} from "../../data/waiter/persistProductsInCart.repository.js";

export const processProductsInCart = async (products = []) => {
    /*
        products = [
            {
                menuId: 'Menu-id-from-backend',
                quantity: 2
            }

        ]

     */

    // verify if all products have 0 quantity
    const productsWithMoreThan1Quantity = products.filter(product => product.quantity > 0);

    if (!productsWithMoreThan1Quantity) return null;

    await persistProductsInCart(productsWithMoreThan1Quantity);
}