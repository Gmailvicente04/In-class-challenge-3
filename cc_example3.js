//Task 5 finding an object in an array
let orders =[
    {id:101,customer:"Vicente",total:1000},
    {id:102,customer:"Jorge",total:2000},
    {id:103,customer:"Ana",total:3000},


]; 

function findOrders(orders, OrderId){
    return orders.find(order => order.id === OrderId);
}

some_order = findOrders(orders, 101);
console.log('${some_order.customer} has an order id: ${some_order.ids}, with a total of: $${some_order.total}');

//task 6 using object methods

let inventory = {
    items: [],
    additem(name, quantity){
        this.items.push({name, quantity});
    }
};

inventory.additem("apple", 10);
inventory.additem("banana", 20);

console.log(inventory.items);

