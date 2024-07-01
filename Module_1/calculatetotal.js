function calculateTotal(cart) {
    return cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}

const cart1 = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Phone", price: 500, quantity: 2 },
    { name: "Headphones", price: 50, quantity: 4 },
  ];

console.log(calculateTotal(cart1))