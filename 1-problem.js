class Product {
    static productCount = 0;

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        Product.productCount++;
    }

    totalPrice() {
        return this.price * Product.productCount;
    }
}

class CareProduct extends Product {
    constructor(id, name, price, warrantyPeriod) {
        super(id, name, price);
        this.warrantyPeriod = warrantyPeriod;
    }

    totalPrice() {
        let sum = 1;
        switch(this.warrantyPeriod) {
            case 5:
                sum = 1.1;
                break;
            case 4:
                sum = 1.2;
                break;
            case 3:
                sum = 1.3;
                break;
            case 2:
                sum = 1.4;
                break;
            case 1:
                sum = 1.5;
                break;
        }
        return this.price * Product.productCount * multiplier;
    }
}

const product1 = new Product(1, 'Laptop', 1000);
const product2 = new Product(2, 'Phone', 500);
const product3 = new Product(3, 'Tablet', 300);
console.log(product1.totalPrice());
console.log(product2.totalPrice());