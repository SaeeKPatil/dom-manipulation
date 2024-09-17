//Array.map()
 const users = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 30 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", age: 25 },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", age: 35 }
  ];
   const formatUserData = (user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      age: user.age,
      profileUrl: `https://example.com/profile/${user.id}`
    };
  };
  const formattedUsers = users.map(formatUserData);
   console.log(formattedUsers);

//Array.filter()
 const products = [
    { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
    { id: 2, name: "Headphones", price: 100, category: "Electronics" },
    { id: 3, name: "Shoes", price: 80, category: "Fashion" },
    { id: 4, name: "T-shirt", price: 25, category: "Fashion" },
    { id: 5, name: "Smartphone", price: 800, category: "Electronics" }
  ];
  const filterProductsByPriceRange = (products, minPrice, maxPrice) => {
    return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
  };
  const minPrice = 50;
  const maxPrice = 500;
   const filteredProducts = filterProductsByPriceRange(products, minPrice, maxPrice);
  console.log(filteredProducts);

//Array.reduce()
const orders = [
    { id: 1, product: "Laptop", quantity: 2, price: 1200 },
    { id: 2, product: "Headphones", quantity: 1, price: 100 },
    { id: 3, product: "Shoes", quantity: 2, price: 80 },
    { id: 4, product: "T-shirt", quantity: 3, price: 25 },
    { id: 5, product: "Smartphone", quantity: 1, price: 800 }
  ];
const calculateTotalOrderValue = (orders) => {
    return orders.reduce((total, order) => total + (order.quantity * order.price), 0);
  };
const totalOrderValue = calculateTotalOrderValue(orders);
console.log(totalOrderValue);
 

//Array.forEach()
const nums = [1, 2, 3, 4, 5];
nums.forEach((num, index) => {
  console.log(`Element at index ${index} is ${num}`);
});

//Array.includes()
const fruits = ['apple', 'banana', 'orange', 'grape'];
console.log(fruits.includes('banana'));  
console.log(fruits.includes('watermelon')); 

//Array.some()
const numbers = [1, 2, -3, 4, 5];
const hasNegative = numbers.some(num => num < 0);
console.log(hasNegative); 

//Array.indexOf()
const number = [1, 2, 3, 4, 5];
console.log(number.indexOf(3));  
console.log(number.indexOf(6));