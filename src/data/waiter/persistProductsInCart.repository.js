
export const persistProductsInCart = async (products) => {

    const productsFromLocalStorage = JSON.parse(localStorage.getItem("products"));

    if (!productsFromLocalStorage) {
        localStorage.setItem("productsInCart", JSON.stringify(products));
        return;
    }

    productsFromLocalStorage.push(products);
    localStorage.setItem("productsInCart", JSON.stringify(productsFromLocalStorage));
}