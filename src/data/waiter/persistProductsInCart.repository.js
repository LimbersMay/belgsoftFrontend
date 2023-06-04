
export const persistProductsInCart = async (products) => {

    const productsFromLocalStorage = JSON.parse(localStorage.getItem("productsInCart"));

    if (!productsFromLocalStorage) {
        localStorage.setItem("productsInCart", JSON.stringify(products));
        return;
    }

    productsFromLocalStorage.push(...products);
    localStorage.setItem("productsInCart", JSON.stringify(productsFromLocalStorage));
}

export const cleanProductsInCart = async () => {
    localStorage.removeItem("productsInCart");
}
