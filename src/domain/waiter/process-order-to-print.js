import {getProductsInOrder} from "./getProductsInOrder.js";
import {printOrder} from "../../data/waiter/print-order.repository.js";

export const processOrderToPrint = async (areaTitle, tableTitle) => {

    const productsInCart = await getProductsInOrder();
    const token = localStorage.getItem("token");

    const productsToPrint = productsInCart.map(product => ([
        product.title, product.quantity
    ]));

    printOrder(token, productsToPrint, areaTitle, tableTitle);
}
