'use strict';
//корзина

// { name: 'apple', price: 50 }
// { name: 'grapes', price: 70 }
// { name: 'lemon', price: 60 }
// { name: 'strawberry', price: 110 }

const cart = {
    items: [],
    getItems() {
        return this.items;
     },
    add(product) {
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }
        }

        const newProduct = {
            ...product, quantity: 1,
        }
        this.items.push(newProduct);
     },
    remove(productName) {
        for (let i = 0; i < this.items.length; i += 1) {
            const item = this.items[i];
            const { name } = this.items[i];

            if (name === productName) {
                console.log('this product is', productName, i);

                this.items.splice(i, 1);
            }
        }
     },
    clear() {
        this.items = [];
     },
    countTotalPrice() {
        let total = 0;
        // for (let i = 0; i < this.items.length; i++) {
        //     const { price } = this.items[i];
        //     total += price;
        // }
        for (const {price, quantity} of this.items) {
            console.log(price)
            total += price * quantity;
        }
        // for (const item of this.items) {
        //     total += item.price;
        // }
        return  total;
     },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
};

console.log(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'grapes', price: 70 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'strawberry', price: 110 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'apple', price: 50 });

// cart.clear();

// cart.remove('lemon');

console.log('TotalPrice', cart.countTotalPrice());

console.table(cart.getItems());

