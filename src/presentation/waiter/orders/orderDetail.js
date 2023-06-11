
// Load the current order detail
import {processOrdersFromTableFromApi} from "../../../domain/waiter/processOrdersFromTableFromApi.js";
import {createProductListItem} from "../components/ProductItem.js";

(async () => {
    // get the tableId
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const tableId = urlParams.get('tableId');

    const tableNumber = urlParams.get('tableName')
    const area = urlParams.get('area')
 
    const tableOrders = await processOrdersFromTableFromApi(tableId);

    const tableOrdersReduced = tableOrders.flat().reduce((result, item) => {
        const existingItem = result.find((x) => x.menuId === item.menuId);
        if (existingItem) {
            existingItem.price += item.price;
            existingItem.quantity += 1;
        } else {
            result.push({ ...item, quantity: 1 });
        }
        return result;
    }, []);

    let total = 0;

    // table
    document.querySelector('.table').insertAdjacentHTML('afterbegin', `Mesa: <span>${tableNumber}</span>`);
    document.querySelector('.area').insertAdjacentHTML('afterbegin', `Area: <span>${area}</span>`);

    const orderDetailsContainer = document.querySelector('#productsList');

    for (const {name, price, quantity} of tableOrdersReduced) {

        const productListItem = createProductListItem(name, quantity, price);

        total += price * quantity;
        orderDetailsContainer.insertAdjacentHTML('afterbegin', productListItem);
    }

    document.querySelector('#total').innerHTML = `Total: ${total}`;

})();
