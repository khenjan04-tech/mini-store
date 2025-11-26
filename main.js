// PRODUCT DATA
const products = [
    {
        id: 1,
        name: "Pork Siomai",
        price: 10,
        img: "images/siomai.jpg",
        rating: 4.5
    },
    {
        id: 2,
        name: "Gulaman",
        price: 10,
        img: "images/gulaman.png",
        rating: 4.8
    }
];

// DISPLAY PRODUCTS
const productList = document.getElementById("product-list");

if (productList) {
    products.forEach(product => {
        const item = document.createElement("div");
        item.classList.add("product-card");
        item.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₱${product.price}</p>
            <p class="stars">⭐ ${product.rating}</p>
            <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(item);
    });
}

// CART
let cart = [];

function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    alert(item.name + " added to cart!");
}

// RECEIPT
function showReceipt() {
    let receiptBox = document.getElementById("receipt");
    let total = 0;

    receiptBox.innerHTML = "<h2>Receipt</h2>";

    cart.forEach(item => {
        total += item.price;
        receiptBox.innerHTML += `
            <p>${item.name} - ₱${item.price}</p>
        `;
    });

    receiptBox.innerHTML += `<h3>Total: ₱${total}</h3>`;
}

// SAVE ORDER TO HISTORY
function saveOrder() {
    let history = JSON.parse(localStorage.getItem("orderHistory")) || [];

    let order = {
        items: cart,
        date: new Date().toLocaleString()
    };

    history.push(order);

    localStorage.setItem("orderHistory", JSON.stringify(history));

    alert("Order Saved!");
}

// SHOW ORDER HISTORY
function showHistory() {
    let historyBox = document.getElementById("history");
    let history = JSON.parse(localStorage.getItem("orderHistory")) || [];

    historyBox.innerHTML = "<h2>Order History</h2>";

    history.forEach(order => {
        historyBox.innerHTML += `
            <div class="history-card">
                <p><b>Date:</b> ${order.date}</p>
                <p><b>Items:</b></p>
        `;

        order.items.forEach(item => {
            historyBox.innerHTML += `<p>- ${item.name} (₱${item.price})</p>`;
        });

        historyBox.innerHTML += "<hr>";
    });
}
