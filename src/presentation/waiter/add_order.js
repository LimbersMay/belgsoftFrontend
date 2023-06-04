/** Work in progress **/
import {getProductsInCart} from "../../domain/waiter/getProductsInCart.js";
import {createProductListItem} from "./components/ProductItem.js";
import {processAreas} from "../../domain/waiter/processAreas.js";
import {createSelectOption} from "./components/SelectOption.js";
import {processTables} from "../../domain/waiter/processTables.js";
import {processCleanProductsInCart} from "../../domain/waiter/cleanProductsInCart.js";
import {processOrder} from "../../domain/waiter/processOrder.js";

// Load the orders from localStorage
(async () => {

    const productsInCart = await getProductsInCart();
    if (!productsInCart) return;

    const productsListContainer = document.querySelector('#productsList');

    let total = 0;

    for (const {title, price, quantity} of productsInCart) {
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

    const tableId = document.querySelector('#table-number').value;
    const areaId = document.querySelector("#area-number").value;

    await processOrder(areaId, tableId);

    // clean the products in cart
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
