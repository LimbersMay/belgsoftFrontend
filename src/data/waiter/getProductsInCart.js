
export const getProductsInCartLocal = async () => {
    return JSON.parse(localStorage.getItem("productsInCart"));
}

export const getProductInCartLocalById = async (productId) => {
    const products = JSON.parse(localStorage.getItem("productsInCart"));
    return products.find(product => product.menuId === productId);
}
