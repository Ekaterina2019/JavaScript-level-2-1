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