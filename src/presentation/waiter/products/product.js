// we fetch data from the domain
import {processProductsFromApi} from "../../../domain/waiter/processProductsFromApi.js";
import {createProductCard} from "./components/ProductCard.js";
import {processProductsInOrder} from "../../../domain/waiter/processProductsInOrder.js";

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

    const products = await processProductsFromApi(productType);
    const foodContainer = document.querySelector('.products-container');

    products.forEach(({price, menuId, name, image })=> {
        const foodCard = createProductCard({id: menuId, imgUrl: image, title: name, price});

        // insert before the end of the container
        foodContainer.insertAdjacentHTML('afterbegin', foodCard);
    });
})();

const saveProducts = async () => {
    const productsElements = document.getElementsByClassName('product-container');

    /*
        productsToSaveStructure = [
            {
                menuId: 'Menu-id-from-backend',
                quantity: 2
            }

        ]

     */

    const productsToSave = [

    ]

    for (let productsElement of productsElements) {

        const quantity = productsElement.querySelector('.quantity').value;

        const menuId = productsElement.id;
        const price = productsElement.dataset.price;
        const title = productsElement.dataset.title;

        productsToSave.push(
            {
                menuId,
                quantity,
                price,
                title
            }
        )
    }

    await processProductsInOrder(productsToSave);
}

const saveButton = document.querySelector('#save-btn');
saveButton.addEventListener('click', saveProducts);

