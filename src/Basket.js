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