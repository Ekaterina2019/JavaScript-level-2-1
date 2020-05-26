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