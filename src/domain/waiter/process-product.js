import {productRepository} from "../../data/waiter/product.repository.js";


export const processProduct = async (productName) => {

    // We get the token from the local storage
    const token = localStorage.getItem('token');

    // We get the foods from the data
    return await productRepository(token, productName);
}