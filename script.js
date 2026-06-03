const products = [

{
    id:1,
    name:"Wireless Headphones",
    price:1999,
    category:"Electronics",
    image:"https://picsum.photos/300/250?random=1"
},

{
    id:2,
    name:"Smart Watch",
    price:2499,
    category:"Electronics",
    image:"https://picsum.photos/300/250?random=2"
},

{
    id:3,
    name:"Bluetooth Speaker",
    price:1499,
    category:"Electronics",
    image:"https://picsum.photos/300/250?random=3"
},

{
    id:4,
    name:"Gaming Mouse",
    price:799,
    category:"Accessories",
    image:"https://picsum.photos/300/250?random=4"
},

{
    id:5,
    name:"USB Keyboard",
    price:699,
    category:"Accessories",
    image:"https://picsum.photos/300/250?random=5"
},

{
    id:6,
    name:"Laptop Bag",
    price:999,
    category:"Accessories",
    image:"https://picsum.photos/300/250?random=6"
},

{
    id:7,
    name:"Power Bank",
    price:1299,
    category:"Accessories",
    image:"https://picsum.photos/300/250?random=7"
},

{
    id:8,
    name:"Bluetooth Earbuds",
    price:1799,
    category:"Electronics",
    image:"https://picsum.photos/300/250?random=8"
},

{
    id:9,
    name:"Men T-Shirt",
    price:599,
    category:"Fashion",
    image:"https://picsum.photos/300/250?random=9"
},

{
    id:10,
    name:"Men Shirt",
    price:899,
    category:"Fashion",
    image:"https://picsum.photos/300/250?random=10"
},

{
    id:11,
    name:"Women Dress",
    price:1499,
    category:"Fashion",
    image:"https://picsum.photos/300/250?random=11"
},

{
    id:12,
    name:"Jeans",
    price:1299,
    category:"Fashion",
    image:"https://picsum.photos/300/250?random=12"
},

{
    id:13,
    name:"Running Shoes",
    price:1999,
    category:"Fashion",
    image:"https://picsum.photos/300/250?random=13"
},

{
    id:14,
    name:"Sports Shoes",
    price:2499,
    category:"Fashion",
    image:"https://picsum.photos/300/250?random=14"
},

{
    id:15,
    name:"Casual Sneakers",
    price:1799,
    category:"Fashion",
    image:"https://picsum.photos/300/250?random=15"
},

{
    id:16,
    name:"Smartphone",
    price:14999,
    category:"Electronics",
    image:"https://picsum.photos/300/250?random=16"
},

{
    id:17,
    name:"Tablet",
    price:19999,
    category:"Electronics",
    image:"https://picsum.photos/300/250?random=17"
},

{
    id:18,
    name:"Laptop",
    price:54999,
    category:"Electronics",
    image:"https://picsum.photos/300/250?random=18"
},

{
    id:19,
    name:"Monitor",
    price:8999,
    category:"Electronics",
    image:"https://picsum.photos/300/250?random=19"
},

{
    id:20,
    name:"Router",
    price:2499,
    category:"Electronics",
    image:"https://picsum.photos/300/250?random=20"
}

];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts(productList){

    const container =
    document.getElementById("product-container");

    container.innerHTML = "";

    productList.forEach(product => {

        container.innerHTML += `

        <div class="product">

            <span class="badge">SALE</span>

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <div class="rating">
                ★★★★☆
            </div>

            <p>₹${product.price}</p>

            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>

        </div>

        `;
    });
}

function addToCart(id){

    const product =
    products.find(item => item.id === id);

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCart();

    showNotification();
}

function updateCart(){

    const cartItems =
    document.getElementById("cartItems");

    const totalPrice =
    document.getElementById("totalPrice");

    const cartCount =
    document.getElementById("cart-count");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price;

        cartItems.innerHTML += `
        <li>
            ${item.name}
            <br>
            ₹${item.price}
        </li>
        `;
    });

    totalPrice.innerText = total;
    cartCount.innerText = cart.length;
}

function showNotification(){

    const notification =
    document.getElementById("notification");

    notification.style.display = "block";

    setTimeout(() => {

        notification.style.display = "none";

    },2000);
}

function searchProducts(){

    const input =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

    const filtered =
    products.filter(product =>
        product.name
        .toLowerCase()
        .includes(input)
    );

    displayProducts(filtered);
}

function filterProducts(category){

    if(category === "all"){

        displayProducts(products);

        return;
    }

    const filtered =
    products.filter(product =>
        product.category === category
    );

    displayProducts(filtered);
}

function toggleDarkMode(){

    document.body.classList.toggle(
        "dark-mode"
    );
}

displayProducts(products);
updateCart();