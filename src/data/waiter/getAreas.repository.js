import {API_URL} from "../api-url.js";

export const getAreas = async (token) => {
    const response = await fetch(`${API_URL}/api/areas`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'x-token': token
        }
    });

    return await response.json();
}
