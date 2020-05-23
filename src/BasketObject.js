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