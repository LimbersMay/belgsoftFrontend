import {getProductsInCart} from "./getProductsInCart.js";
import {saveOrder} from "../../data/waiter/saveOrder.repository.js";

export const processOrder = async (areaId, tableId) => {

    const productsInCart = await getProductsInCart();

    if (!productsInCart) return;

    const token = localStorage.getItem("token");

    const response = await saveOrder(token, areaId, tableId, productsInCart);

    if (response.error) {
        return {
            error: response.error
        }
    }

    return {
        ok: true
    }
}
