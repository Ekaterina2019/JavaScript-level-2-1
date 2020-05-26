class Basket{
    constructor() {
        this.products = {}
        this.basketGetButtonBuy()
    }

    basketGetButtonBuy(){
        return new Promise(resolve => {
            setTimeout(()=>{
                let buttonBuy = document.querySelectorAll('.buy-btn')
                console.log(buttonBuy)
                buttonBuy.forEach((btn)=> {
                    btn.addEventListener('click', (event)=>{
                        let id = event.srcElement.dataset.id
                        let price = event.srcElement.dataset.price
                        let title = event.srcElement.dataset.title
                        this.addProduct({ id: id, price: price, title: title })
                    })
                })
            },1000)
        })
    }

    addProduct(product){
        this.addProductToObject(product);
        this.renderProductInBasket(product);
        this.renderTotalSum();
        //this.addRemoveBtnsListeners();
    }

    addProductToObject(product) {
        if (this.products[product.id] == undefined) {
            this.products[product.id] = {
                price: product.price,
                name: product.title,
                count: 1
            }
        } else {
            this.products[product.id].count++;
        }
    }

    renderProductInBasket(product) {
        let productExist = document.querySelector(`.productCount[data-id="${product.id}"]`);
        if (productExist) {
            productExist.textContent++;
            return;
        }
        let productRow =
            `<tr>
                    <td>${product.id}</td>
                    <td>${product.title}</td>
                    <td>${product.price}</td>
                    <td style="text-align: center;" class="productCount" data-id="${product.id}">1</td>
                    </tr>`
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML("beforeend", productRow);
    }

    getTotalSum() {
        let sum = 0;
        for (let key in this.products) {
            sum += this.products[key].price * this.products[key].count;
        }
        return sum;
    }
    renderTotalSum() {
        document.querySelector('.total').textContent = this.getTotalSum()
    }
}
'use strict';

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
window.addEventListener('load',()=>{
    const product = new Product()
    const basketIcon = new BasketIcon()
    const basketObject = new Basket()
})

class Product {
    constructor(container = '.products'){
    this.container = container
    this._getProduct()
        .then(data => {
            this.renderPage(data)
        })
    }

    _getProduct(){
        return fetch('./json/product.json')
            .then(result => result.json())
            .catch(error => console.log('error'))
    }

    renderPage (product){
        for (let addProduct of product){
            const productsList = new Item(addProduct)
            const prodEl = document.querySelector(this.container);
            prodEl.insertAdjacentHTML("beforeend", productsList.renderProduct());
        }
    }
}
//# sourceMappingURL=maps/app.js.map
