class Product {

    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    toString() {
        return `${this.name}, R$${this.price.toFixed(2)}, ${this.quantity}`;
    }

    total() {
        return this.price * this.quantity;
    }

    updatePrice(percentage) {
        // this.price += ((this.price * percentage) / 100)
        this.price = this.price * (1 + percentage / 100)
    }
}

const p1 = new Product('Laptop', 1000.00, 5);
const p2 = new Product('Headphones', 200.00, 2);

console.log(p1.toString());
console.log(p2);

const total = (product) => {
    return product.price * product.quantity;
}

const updatePrice = (product, percentage) => {
    // product.price += ((product.price * percentage) / 100)
    product.price = product.price * (1 + percentage / 100)
}

console.log(`TOTAL PRODUTO VIA OBJETO: ${p1.total()}`);
p1.updatePrice(10)

// console.log(`TOTAL: ${total(p1)}`);
// updatePrice(p1, 10)
console.log(p1.toString());


