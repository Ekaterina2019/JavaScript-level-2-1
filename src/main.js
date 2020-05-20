'use strict';

const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50}
]

const product={
    init(products){
        this.renderPage (products)
    },
    renderPage (list){
        for (let i=0;i<list.length;i++){
            const productsList = this.renderProduct(list[i].title, list[i].price)
            const product = document.querySelector('.products');
            product.insertAdjacentHTML("beforeend", productsList);
        }
    },
    renderProduct(title = 'Gamepad', price = 50){
        return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`}
}

product.init(products)