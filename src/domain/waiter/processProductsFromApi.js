import {getProductById, getProducts} from "../../data/waiter/getProducts.js";


export const processProductsFromApi = async (productName) => {

    // We get the token from the local storage
    const token = localStorage.getItem('token');

    // We get the foods from the data
    return await getProducts(token, productName);
}

export const processProductFromApi = async (productId) => {

    // We get the token from the local storage
    const token = localStorage.getItem('token');

    // We get the foods from the data
    return await getProductById(token, productId);
}
