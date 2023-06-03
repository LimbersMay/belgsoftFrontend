
export const createProductCard = (id, title, imgUrl) => {
    return `
        <div id="${id}" class="product-container">
            <section>
                <h2>${title}</h2> <!-- with js -->
                <div class="menu-item-with-grid">
                    <div class="element"><img src=${imgUrl} alt=${title}></div>
                    <div class="element"><label for="${title}">Cantidad: </label></div>
                    <div class="element"><input class="quantity input-text input-text2" id="${title}" type="text" value="0"></div>
                </div>
            </section>
        </div>
    `
}
