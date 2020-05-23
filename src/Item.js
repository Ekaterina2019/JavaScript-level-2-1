class Item {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
    }

    renderProduct() {
        return `<div class="product-item">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}