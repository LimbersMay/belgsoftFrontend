import {getProductsInCartLocal} from "../../data/waiter/getProductsInOrder.js";

export const getProductsInOrder = async () => {
    return await getProductsInCartLocal();
}
