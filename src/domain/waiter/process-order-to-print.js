import {getProductsInOrder} from "./getProductsInOrder.js";
import {printOrder} from "../../data/waiter/print-order.repository.js";

export const processOrderToPrint = async (areaTitle, tableTitle) => {

    const productsInCart = await getProductsInOrder();
    const token = localStorage.getItem("token");

    const productsToPrint = productsInCart.map(product => ([
        product.title, product.quantity
    ]));

    const response = await printOrder(token, productsToPrint, areaTitle, tableTitle);

    if (response.errors) {
        console.error(response.message);
        console.log(response.errors)
        return {
            error: response.message
        }
    }
}
