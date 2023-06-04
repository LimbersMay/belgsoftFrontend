
export const getProductsInCartLocal = async () => {
    return JSON.parse(localStorage.getItem("productsInOrder"));
}