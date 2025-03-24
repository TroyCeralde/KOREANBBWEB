document.querySelectorAll(".order-btn").forEach(button => {
    button.addEventListener("click", function() {
        const item = this.parentElement;
        document.getElementById("modal-item-name").innerText = item.querySelector("h3").innerText;
        document.getElementById("order-modal").style.display = "flex";
    });
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("order-modal").style.display = "none";
});

document.querySelectorAll(".select-option").forEach(button => {
    button.addEventListener("click", function() {
        const itemName = document.getElementById("modal-item-name").innerText;
        const itemSize = this.dataset.size;
        const orderList = document.getElementById("order-list");
        const newItem = document.createElement("li");
        newItem.innerText = `${itemName} - ${itemSize}`;
        orderList.appendChild(newItem);
        
        let total = parseInt(document.getElementById("total-price").innerText);
        total += itemSize === "Large Meal" ? 200 : 150;
        document.getElementById("total-price").innerText = total;
        
        document.getElementById("order-modal").style.display = "none";
    });
});

document.getElementById("clear-order").addEventListener("click", function() {
    document.getElementById("order-list").innerHTML = "";
    document.getElementById("total-price").innerText = "0";
});

document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", function() {
        document.querySelectorAll(".category").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        const selectedCategory = this.getAttribute("data-category");
        document.querySelectorAll(".menu-item").forEach(item => {
            item.style.display = item.getAttribute("data-category") === selectedCategory || selectedCategory === "all" ? "block" : "none";
        });
    });
});
