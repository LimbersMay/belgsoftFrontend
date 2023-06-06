/** Work in progress **/
import {getProductsInOrder} from "../../domain/waiter/getProductsInOrder.js";
import {createProductListItem} from "./components/ProductItem.js";
import {processAreas} from "../../domain/waiter/processAreas.js";
import {createSelectOption} from "./components/SelectOption.js";
import {processTables} from "../../domain/waiter/processTables.js";
import {processCleanProductsInCart} from "../../domain/waiter/cleanProductsInOrder.js";
import {processOrder} from "../../domain/waiter/processOrder.js";
import {processOrderToPrint} from "../../domain/waiter/process-order-to-print.js";

// Load the orders from localStorage
(async () => {

    const productsInOrder = await getProductsInOrder();
    if (!productsInOrder) return;

    const productsListContainer = document.querySelector('#productsList');

    let total = 0;

    for (const {title, price, quantity} of productsInOrder) {
        const productListItem = createProductListItem(title, quantity, price);

        total += price * quantity;
        productsListContainer.insertAdjacentHTML('afterbegin', productListItem);
    }

    // Set the total
    const priceElement = document.querySelector('#total');
    priceElement.innerHTML = `Total: $${total}`;
})();

// Load the areas and tables in selects
(async () => {

    // areas
    const {areas, error} = await processAreas();

    if (error) {
        console.error(areas.error);
        return;
    }

    const areaSelect = document.querySelector('#area-number');

    for (let {areaId, name} of areas) {
        const optionElement = createSelectOption(areaId, name);
        areaSelect.insertAdjacentHTML('afterbegin', optionElement);
    }

    // tables
    const {tables, error: tableError} = await processTables();

    if (tableError) {
        console.error(areas.error);
        return;
    }

    const tableSelect = document.querySelector('#table-number');

    for (let {tableId, number} of tables) {
        const optionElement = createSelectOption(tableId, number);
        tableSelect.insertAdjacentHTML('afterbegin', optionElement);
    }
})();


const saveOrder = async (event) => {
    event.preventDefault();

    const tableElement = document.querySelector('#table-number');
    const areaElement = document.querySelector("#area-number");

    const areaTitle = areaElement.options[areaElement.selectedIndex].text
    const tableTitle = tableElement.options[tableElement.selectedIndex].text

    const tableId = tableElement.value;
    const areaId = areaElement.value;

    // send the order to the server
    await processOrder(areaId, tableId);

    // request print the order details
    await processOrderToPrint(areaTitle, tableTitle);

    // clean the products in order
    await processCleanProductsInCart();

    // clean the list container
    const productsListContainer = document.querySelector('#productsList');
    productsListContainer.innerHTML = '';

    // Set the total
    const priceElement = document.querySelector('#total');
    priceElement.innerHTML = `Total: $0`;
}

const formContainer = document.querySelector('.form');
formContainer.addEventListener('submit', saveOrder)
