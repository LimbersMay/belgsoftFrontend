import {cleanProductsInCart} from "../../data/waiter/persistProductsInCart.repository.js";

export const processCleanProductsInCart = async () => {
    await cleanProductsInCart();
}
