
let cart = JSON.parse(localStorage.getItem("cart")) || [];


function addToCart(item, button) {
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showToast(item.name + " added to cart!");

    
    if(button){
        button.innerText = "Added to Cart";
        button.disabled = true;
        setTimeout(() => {
            button.innerText = "Add to Cart";
            button.disabled = false;
        }, 1500);
    }
}


function addToCartFromCard(button) {
    const card = button.closest(".card");
    const name = card.querySelector(".card-title").innerText;
    const priceText = card.querySelector(".card-text.text-success").innerText;
    const price = parseInt(priceText.replace(/[₹,]/g, "").trim());
    const image = card.querySelector("img").getAttribute("src"); 

    addToCart({name, price, image}, button);
}



function updateCartCount() {
    let cartCount = document.getElementById("cart-count");
    if(cartCount) {
        cartCount.innerText = cart.length;
    }
}


function showToast(message) {
    let toast = document.createElement("div");
    toast.innerText = message;
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "#28a745";
    toast.style.color = "white";
    toast.style.padding = "10px 20px";
    toast.style.borderRadius = "8px";
    toast.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.2)";
    toast.style.zIndex = "1000";
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 2000);
}


document.addEventListener("DOMContentLoaded", updateCartCount);
