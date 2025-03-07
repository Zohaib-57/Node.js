const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views"); // Optional: specify the views directory
app.get("/home", (req, res) => {
	res.render("home", { title: "Home Page" });
});
app.get("/profile", (req, res) => {
	const user = {
		title: "Profile",
		name: "John Doe",
		age: 30,
		email: "john@gmail.com",
		skills: ["HTML", "CSS", "JavaScript", "node", "express", "ejs"],
	};
	res.render("profile", { user });
});
app.get("/login", (req, res) => {
	res.render("login", { title: "Login Page" });
});
app.listen(3000, () => console.log("Server running on port 3000"));



// Want to make a clean small project... use this template
// setup the app.js file 
// app.js-> this is the server file
// const express = require('express');
// const app = express();

// // Set up EJS as the templating engine
// app.set('view engine', 'ejs');
// app.set('views', './views');

// // Sample product data
// const products = [
//     { id: 1, name: 'Laptop', price: 75000 },
//     { id: 2, name: 'Mobile', price: 25000 },
//     { id: 3, name: 'Tablet', price: 35000 }
// ];

// // Route to render the products page
// app.get('/products', (req, res) => {
//     res.render('products', {
//         title: 'Product Catalog',
//         products: products
//     });
// });

// // Start the Express app
// app.listen(3000, () => {
//     console.log('Server running on http://localhost:3000');
// });

// This is the ejs file where we will render the products with the partial/common(reusable) header and footer components are included

// <!-- views/products.ejs -->
// <%- include('partials/header') %>

// <main>
//     <h1><%= title %></h1>
//     <div class="products">
//         <% products.forEach(product => { %>
//             <div class="product">
//                 <h2><%= product.name %></h2>
//                 <p>Price: ₹<%= product.price %></p>
//             </div>
//         <% }) %>
//     </div>
// </main>

// <%- include('partials/footer') %>
