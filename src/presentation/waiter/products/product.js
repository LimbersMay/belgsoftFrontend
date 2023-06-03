// we fetch data from the domain
import {processProduct} from "../../../domain/waiter/process-product.js";
import {createProductCard} from "./components/ProductCard.js";

(async () => {

    const titles = {
        'foods': 'Comida',
        'drinks': 'Bebida',
        'desserts': 'Postre'
    }

    // check if url contains a query string
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productType = urlParams.get('category');

    // set the title
    const title = document.querySelector('#product-title');
    title.innerHTML = titles[productType];

    const foods = await processProduct(productType);
    const foodContainer = document.querySelector('.products-container');

    foods.forEach(({ menuId, name, image })=> {
        const foodCard = createProductCard(menuId, name, image);

        // insert before the end of the container
        foodContainer.insertAdjacentHTML('afterbegin', foodCard);
    });
})();

const saveButton = document.querySelector('#save-btn');

