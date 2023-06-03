import {getProductInCartLocalById, getProductsInCartLocal} from "../../data/waiter/getProductsInCart.js";

export const getProductsInCart = async () => {
    return await getProductsInCartLocal();
}

export const getProductInCartById = async (productId) => {
    return await getProductInCartLocalById(productId);
}
