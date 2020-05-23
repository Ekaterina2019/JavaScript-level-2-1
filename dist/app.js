'use strict';

const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50}
]
class BasketElement{
    constructor() {
        //this.renderProductInBasket();
    }
}
class BasketIcon {
    constructor() {
        this.basketIconEl = document.querySelector('.basketPanel')
        this.btnBasket = document.querySelector('.btn-cart')
        this.eventOpenCloseBasket()
    }
    eventOpenCloseBasket(){
        this.btnBasket.addEventListener('click',()=>{
            if(this.basketIconEl.style.display == 'none'){
                this.basketIconEl.style.display = 'block'
            }else if(this.basketIconEl.style.display == 'block') {
                this.basketIconEl.style.display = 'none'
            }
        })
    }
}
class BasketObject {
    constructor() {
        this.product = [{id: 1, title: 'Notebook', price: 2000,count: 1},{id: 4, title: 'Gamepad', price: 50, count: 1}]
        this.renderTotalSum()
        this.getTotalSum()
        this.addBasket()
    }

    addBasket(){
        const basketElement = new BasketElement()
        //this.addProductToObject()

    }

    getTotalSum() {
        let sum = 0;
        for (let i = 0; i<this.product.length;i++) {
            sum += this.product[i].price * this.product[i].count;
        }
        return sum;
    }
    renderTotalSum() {
        document.querySelector('.total').textContent = this.getTotalSum()
    }
}
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
window.addEventListener('load',()=>{
    const product = new Product()
    const basketIcon = new BasketIcon()
    const basketObject = new BasketObject()
    const basketElement = new BasketElement()
})

class Product {
    constructor(container = '.products'){
    this.container = container;
    this.renderPage();
    }
    renderPage (){
        for (let addProduct of products){
            const productsList = new Item(addProduct)
            const prodEl = document.querySelector(this.container);
            prodEl.insertAdjacentHTML("beforeend", productsList.renderProduct());
        }
    }
}
//# sourceMappingURL=maps/app.js.map
