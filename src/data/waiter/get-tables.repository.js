import {API_URL} from "../api-url.js";

export const getTables = async (token) => {
    const response = await fetch(`${API_URL}/api/tables`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'x-token': token
        }
    });

    return await response.json();
}