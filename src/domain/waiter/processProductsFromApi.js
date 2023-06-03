import {getProductsRepository} from "../../data/waiter/getProducts.repository.js";


export const processProductsFromApi = async (productName) => {

    // We get the token from the local storage
    const token = localStorage.getItem('token');

    // We get the foods from the data
    return await getProductsRepository(token, productName);
}