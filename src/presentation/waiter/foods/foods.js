
// we fetch data from the domain

import {processProduct} from "../../../domain/waiter/process-product.js";
import {createProductCard} from "../components/card.js";

(async () => {
    const foods = await processProduct('foods');
    const foodContainer = document.getElementById('food-container');

    foods.forEach(food => {
        const foodCard = createProductCard(food.name, food.image);

        // insert before the end of the container
        foodContainer.insertAdjacentHTML('afterbegin', foodCard);
    });

})();
