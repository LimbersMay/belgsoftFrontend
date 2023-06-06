import {getProductsInOrder} from "./getProductsInOrder.js";
import {saveOrder} from "../../data/waiter/saveOrder.repository.js";

export const processOrder = async (areaId, tableId) => {

    const productsInCart = await getProductsInOrder();

    if (!productsInCart) return;

    const token = localStorage.getItem("token");

    const response = await saveOrder(token, areaId, tableId, productsInCart);

    if (response.error) {
        console.log(response.error)
        return {
            error: response.error
        }
    }

    if (response.errors) {
        console.log(response.errors)
        return {
            error: response.errors
        }
    }

    return {
        ok: true
    }
}