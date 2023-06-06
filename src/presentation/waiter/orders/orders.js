import {processUserOrdersFromApi} from "../../../domain/waiter/processUserOrdersFromApi.js";
import {createOrderCard} from "./components/OrderCard.js";

(async () => {

    const userOrders = await processUserOrdersFromApi();

    /*
        orderExample:
            {
            "orderId": "0e7ab500-8091-44f2-afd7-64c0664a5abf",
            "customerName": null,
            "tableNumber": "5",
            "userName": "Bernard",
            "orderStatus": "PENDING",
            "area": "Area 1",
            "price": 156,
            "quantity": 210,
            "createdAt": "2023-06-04T06:53:12.000Z"
        }
     */

    const ordersContainer = document.querySelector('main');

    for (let { area, tableNumber, orderStatus, userName, quantity, price} of userOrders) {
        const orderCard = createOrderCard(area, tableNumber, orderStatus, userName, quantity, price)
        ordersContainer.insertAdjacentHTML('afterbegin', orderCard);
    }

})()
