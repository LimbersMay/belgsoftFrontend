
export const createProductListItem = (title, quantity, price) => {

    return `
        <tr>
            <th>${title}</th>
            <th>${quantity}</th>
            <th>${'$ '+price}</th>
        </tr>
    `
}
