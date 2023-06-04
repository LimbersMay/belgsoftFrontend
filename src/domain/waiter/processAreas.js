import {getAreas} from "../../data/waiter/getAreas.repository.js";

export const processAreas = async () => {

    const token = localStorage.getItem("token");

    const response = await getAreas(token);

    if (response.error) {
        return {
            error: response.error
        }
    }

    return {
        areas: response
    }
}
