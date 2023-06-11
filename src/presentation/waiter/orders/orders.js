import {processUserOrdersFromApi} from "../../../domain/waiter/processUserOrdersFromApi.js";
import {createOrderCard} from "./components/OrderCard.js";

(async () => {

    const userOrders = await processUserOrdersFromApi();

    const usersOrdersReduced = Object.values(userOrders.reduce((accumulator, currentObj) => {
        const { tableNumber, price, quantity, ...rest } = currentObj;
        if (!accumulator[tableNumber]) {
            accumulator[tableNumber] = {
                ...rest,
                tableNumber,
                price,
                quantity
            };
        } else {
            accumulator[tableNumber].price += price;
            accumulator[tableNumber].quantity += quantity;
        }
        return accumulator;
    }, {}));

    const ordersContainer = document.querySelector('main');

    for (let { area, tableNumber, orderStatus, userName, quantity, price, tableId} of usersOrdersReduced) {
        const orderCard = createOrderCard(area, tableNumber, orderStatus, userName, quantity, price, tableId )
        ordersContainer.insertAdjacentHTML('afterbegin', orderCard);
    }

})()
