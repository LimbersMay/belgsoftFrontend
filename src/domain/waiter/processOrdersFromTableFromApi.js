import {getTableOrders} from "../../data/waiter/getOrders.repository.js";

export const processOrdersFromTableFromApi = async (tableId) => {
    const token = localStorage.getItem("token");

    return await getTableOrders(token, tableId);
}
