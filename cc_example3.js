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
inventory.additem("banana", 5);
console.log(inventory.items);
//remove first item
inventory.items.shift();
console.log(inventory.items);


//task 7 using the find method
let employees = [
    {name:"Vicente", salary:1000},
    {name:"Jorge", salary:2000},
    {name:"Ana", salary:3000},
];

function findEmployee(employees, name){
    return employees.find(employee => employee.name === name);
}
some_employee = findEmployee(employees, "Vicente");

console.log(findEmployee(employees, "Vicente"));

//task 8 combinig arrays and objects

let orders1 = [
    {id: 3, customer: "Charlie" },
    {id: 4, customer: "Dave" }
];
let orders2 = [
    {id: 5, customer: "Eve" },
    {id: 6, customer: "Frank" }
];
function combineOrders(order1, order2) {
    return [...order1, ...order2]
}
console.log(combineOrders(orders1, orders2));
