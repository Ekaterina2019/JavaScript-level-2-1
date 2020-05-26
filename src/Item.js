class Item {
    constructor(product) {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
    }

    renderProduct() {
        return `<div class="product-item">
                <p>${this.id}</p>
                <p>${this.title}</p>
                <p>${this.price}</p>
                <button data-price="${this.price}" data-title="${this.title}" data-id="${this.id}" class="buy-btn">Купить</button>
            </div>`
    }
}