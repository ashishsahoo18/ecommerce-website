let cartCount = 0;

function addToCart() {
    cartCount++;

    document.getElementById("cart-count").innerText = cartCount;

    let notification =
        document.getElementById("notification");

    notification.style.display = "block";

    setTimeout(() => {
        notification.style.display = "none";
    }, 2000);
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function searchProducts() {

    let input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    let products =
        document.querySelectorAll(".product");

    products.forEach(product => {

        let title =
            product.querySelector("h3")
            .innerText
            .toLowerCase();

        if(title.includes(input)){
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}