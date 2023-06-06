import {getUserOrders} from "../../data/waiter/getOrders.repository.js";

export const processUserOrdersFromApi = async () => {
    const token = localStorage.getItem("token");
    return await getUserOrders(token);
}
