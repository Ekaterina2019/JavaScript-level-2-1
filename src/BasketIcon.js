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