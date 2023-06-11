
export const createOrderCard = (area, tableNumber, orderStatus, waiterName, productQuantity, check, tableId) => {
    return `
        <div class="container order-container">   
            <p id="order">Area: <span>${area}</span></p>
            <hr>
            <p class="waiter">Mesero: <span>${waiterName}</span></p>
            <p class="waiter">Estado: <span>${orderStatus}</span></p>
            <div class="grid order-container2">
                <div class="table-area">
                    <p id="table">Mesa: <span>${tableNumber}</span></p>
                </div>
                <div class="product-total">
                    <p>Productos: <span>${productQuantity}</span></p>
                    <p id="total">Total: <span>${check}</span></p>
                </div>
                <div class="event l">
                    <a class="button1" href="details.html?tableName=${tableNumber}&area=${area}&tableId=${tableId}"">Detalles</a>
                    <a class="button1 colorbb" href="#">Solicitar cancelación</a>
                </div>
            </div>
        </div>
    `
}
