const products = [

{
    id:1,
    name:"Wireless Headphones",
    price:1999,
    category:"Electronics",
    image:"https://www.boat-lifestyle.com/cdn/shop/files/Artboard_1_ecd64de9-2c17-47f4-976a-1d07bf8902cc_900x.png?v=1728871268"
},

{
    id:2,
    name:"Smart Watch",
    price:2499,
    category:"Electronics",
    image:"https://rukminim2.flixcart.com/image/480/640/xif0q/smartwatch/a/e/t/-original-imahgesvxrpfhymk.jpeg?q=60"
},

{
    id:3,
    name:"Bluetooth Speaker",
    price:1499,
    category:"Electronics",
    image:"https://dukaan.b-cdn.net/700x700/webp/media/dd7e8a90-aa13-488d-a2fe-0e2bd4dc8f3e.jpg"
},

{
    id:4,
    name:"Gaming Mouse",
    price:799,
    category:"Accessories",
    image:"https://rukminim1.flixcart.com/image/767/767/xif0q/mouse/k/1/v/m612-pro-rgb-gaming-mouse-redragon-original-imahgwquyw4b8uab.jpeg?q=90"
},

{
    id:5,
    name:"USB Keyboard",
    price:900,
    category:"Accessories",
    image:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXCL3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=S1pkeVJDY2FBQ0dESk1WYXJ4V1Yxd2tuVHYzMERCZURia3c5SzJFOTlPam52L09kbzNiSStKOHg1RWFmMk9ZeHNPTTVzYTczc3ZWbTJwM0wxQ1JUSEE"
},

{
    id:6,
    name:"Laptop Bag",
    price:999,
    category:"Accessories",
    image:"https://m.media-amazon.com/images/I/31QpS9bSySL._SY300_SX300_QL70_FMwebp_.jpg"
},

{
    id:7,
    name:"Power Bank",
    price:1299,
    category:"Accessories",
    image:"https://m.media-amazon.com/images/I/311my29EL+L._SY300_SX300_QL70_FMwebp_.jpg"
},

{
    id:8,
    name:"Bluetooth Earbuds",
    price:1799,
    category:"Electronics",
    image:"https://dukaan.b-cdn.net/700x700/webp/media/0c156360-d37e-4f58-8aa2-3bd6579bc56a.jpg"
},

{
    id:9,
    name:"Men T-Shirt",
    price:599,
    category:"Fashion",
    image:"https://m.media-amazon.com/images/I/51IzVH0bjRL._SX522_.jpg"
},

{
    id:10,
    name:"Men Shirt",
    price:899,
    category:"Fashion",
    image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRzzJSwT_AlUqo8S4zeuQnGrQUP9UO3EUkLXO_h7lKcc1LqxV7H5Z9iydKaAckdIXyuLu4OZFiIvKKu_bQkDlXzLwA8j0q_XjBTRHyBuE6y8QYqEJ4LWD7tf3Ees8-hZEI11xDLtuu3EA&usqp=CAc"
},

{
    id:11,
    name:"Women Dress",
    price:1499,
    category:"Fashion",
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTSkSikggGJAFhSqH7-trVWCyUZ5g80ojw3LSG4X_szigFzBXvvj7luLANjXJcw3kxJM3oSbqkA4sRDFUcX0bwhfzMiJWfgLweb4QKVmLLCsujPm1ZD5X2ToA&usqp=CAc"
},

{
    id:12,
    name:"Jeans",
    price:1299,
    category:"Fashion",
    image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS_kEm7DLVhApQi-YbD-JjU2ubThRWEc03VskR5zdmnnuQMNs6KL2LCKy9cqQwvR1615aqr8FmCX9xB89lxplg7xSrjvPVJ6npDRTc8PxTWozv6_SXQaxM4&usqp=CAc"
},

{
    id:13,
    name:"Running Shoes",
    price:1999,
    category:"Fashion",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-AWn8NbO52NI1GpFvkaGi1Mc1guOP-aw3Q&s"
},

{
    id:14,
    name:"Sports Shoes",
    price:2499,
    category:"Fashion",
    image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjat0ecrLrCQrtd3KabHUFq04vpaO4aLu1Dc3MukdcWdzjzXSD4lszlU80dcfKTA2p54c7PAuT9C-hf57o1ZhzE2v2zYHW7OJGR0XNh9eVN0BVa82IUHgtEBBe0mKQzg5N&usqp=CAc"
},

{
    id:15,
    name:"Casual Sneakers",
    price:1799,
    category:"Fashion",
    image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQT0MpBu9s6qY1sGlsFvB2IiNu-mkUU2nSWCKjNyIT78pyMKHgS6c6G0Frvj9LHqPV6MKOHS-J5Sw38vUcSnL_sUmkibtZnXx4hB-Qk-j-l9pgSnid_&usqp=CAc"
},

{
    id:16,
    name:"Smartphone",
    price:194110,
    category:"Electronics",
    image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRTe4GqrFm8b-XZa94e4q-PrC2jFnpRsTnCrzG7nxci3ThMPuISkaXI-qyAU6t10PPt_vO-yyOFQF7bmtFzEVSf7k0o29YW3PTVXakLC4Uw1KGrCv-6I6W1i2K5uSDGADo2mf8_lw&usqp=CAc"
},

{
    id:17,
    name:"Tablet",
    price:19999,
    category:"Electronics",
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT6SnnXMouRW6b_w5ZYkqIZj1YUlYELc2N-H1IAg_T75RBKEEnTKdtqWr7H-K6QqhnSeNpmbUbR3wkL9Xqt9Bp3OKjUkvjqEybwIUXjPquW&usqp=CAc"
},

{
    id:18,
    name:"Laptop",
    price:54999,
    category:"Electronics",
    image:"https://rukminim1.flixcart.com/image/767/767/xif0q/computer/x/e/e/-original-imahg53xzr6s6nkg.jpeg?q=90"
},

{
    id:19,
    name:"Monitor",
    price:8999,
    category:"Electronics",
    image:"https://image.benq.com/is/image/benqco/pd2706u-front-high?$ResponsivePreset$&fmt=png-alpha"
},

{
    id:20,
    name:"Router",
    price:2499,
    category:"Electronics",
    image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSUAZDtgbsmzzzxp7vwsCVXGw75qb3O-2qwV5lr0NCU_vNaX42prX3M8ttF-ywLD72gcAYjLGrBlYEUNZtsStTsBTocBmpCSl-Q4EE8qMkffPdClFP6j-cRkVrUjqeRPbFHJj9b&usqp=CAc"
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