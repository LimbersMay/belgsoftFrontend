import {API_URL} from "../api-url.js";

export const saveOrder = async (token, areaId, tableId, products) => {

    const response = await fetch(`${API_URL}/api/orders`, {
        method: 'POST',
        body: JSON.stringify({
            areaId,
            tableId,
            menuItems: products
        }),
        headers: {
            "x-token": token,
            'Content-Type': 'application/json'
        }
    });

    return await response.json();
}
