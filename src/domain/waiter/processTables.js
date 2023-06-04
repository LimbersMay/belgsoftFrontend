import {getTables} from "../../data/waiter/get-tables.repository.js";

export const processTables = async () => {

    const token = localStorage.getItem("token");

    const response = await getTables(token);

    if (response.error) {
        return {
            error: response.error
        }
    }

    return {
        tables: response
    }
}
