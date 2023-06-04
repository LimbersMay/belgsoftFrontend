import {API_URL} from "../api-url.js";

/**
 *
 * @params message - the body to send to the server
 * @Params token - the authentication token received from backend
 *
 * @return status
 */

export const printOrder = async (token, productsInOrder, areaTitle, tableTitle) => {

    const response = await fetch(`${API_URL}/api/orders/print`, {
        method: 'POST',
        body: JSON.stringify({
            productsInOrder,
            areaTitle,
            tableTitle
        }),
        headers: {
            "x-token": token,
            'Content-Type': 'application/json'
        }
    });

    return await response.json();
}