
export const persistProductsInCart = async (products) => {

    const productsFromLocalStorage = JSON.parse(localStorage.getItem("productsInOrder"));

    if (!productsFromLocalStorage) {
        localStorage.setItem("productsInOrder", JSON.stringify(products));
        return;
    }

    productsFromLocalStorage.push(...products);
    localStorage.setItem("productsInOrder", JSON.stringify(productsFromLocalStorage));
}

export const cleanProductsInCart = async () => {
    localStorage.removeItem("productsInOrder");
}
