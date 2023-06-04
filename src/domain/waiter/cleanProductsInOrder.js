import {cleanProductsInCart} from "../../data/waiter/persistProductsInOrder.repository.js";

export const processCleanProductsInCart = async () => {
    await cleanProductsInCart();
}
