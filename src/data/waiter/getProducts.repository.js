
export const getProductsRepository = async (token, product) => {
    const response = await fetch(`http://localhost:3000/api/menu/${product}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'x-token': token
        }
    });

    return await response.json();
}
