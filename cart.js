const pages = {
    "iphone": "Iphone.html",
    "samsung": "Samsung.html",
    "oppo": "Oppo.html",
    "xiaomi": "Xiaomi.html",
    "vivo": "vivo.html"
};

// Xử lý sự kiện tìm kiếm
document.getElementById("searchButton").addEventListener("click", function () {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();

    // Tìm kiếm trong đối tượng `pages`
    if (pages[query]) {
        // Chuyển hướng đến trang tương ứng
        window.location.href = pages[query];
    } else {
        // Hiển thị thông báo khi không tìm thấy
        alert("Không tìm thấy kết quả. Vui lòng thử từ khóa khác!");
    }
});




document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.querySelector(".cart-items");
    const totalPriceEl = document.querySelector(".total-price");
    const checkoutButton = document.querySelector(".checkout");

    // Lấy giỏ hàng từ localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Hàm hiển thị giỏ hàng
    const renderCart = () => {
        cartItemsContainer.innerHTML = "";
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Giỏ hàng của bạn đang trống.</p>";
            totalPriceEl.textContent = "0₫";
            return;
        }

        cart.forEach((item, index) => {
            const itemPrice = parseInt(item.price); // Giá sản phẩm
            const itemTotal = itemPrice * item.quantity;
            total += itemTotal;

            const itemEl = document.createElement("div");
            itemEl.classList.add("cart-item");
            itemEl.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h2>${item.name}</h2>
                    <p>Giá: ${itemPrice.toLocaleString()}₫</p>
                    <p>Số lượng: 
                        <button class="decrease-quantity" data-index="${index}">−</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="increase-quantity" data-index="${index}">+</button>
                    </p>
                    <p>Tổng: ${itemTotal.toLocaleString()}₫</p>
                </div>
                <button class="remove-item" data-index="${index}">Xóa</button>
            `;
            cartItemsContainer.appendChild(itemEl);
        });

        totalPriceEl.textContent = `${total.toLocaleString()}₫`;
    };

    // Xóa sản phẩm khỏi giỏ hàng
    const removeItem = (index) => {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    };

    // Cập nhật số lượng sản phẩm
    const updateQuantity = (index, change) => {
        const item = cart[index];
        if (!item) return;

        item.quantity += change;
        if (item.quantity <= 0) {
            removeItem(index);
        } else {
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        }
    };

    // Lắng nghe các sự kiện trên giỏ hàng
    cartItemsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-item")) {
            const index = parseInt(e.target.dataset.index, 10);
            removeItem(index);
        } else if (e.target.classList.contains("decrease-quantity")) {
            const index = parseInt(e.target.dataset.index, 10);
            updateQuantity(index, -1);
        } else if (e.target.classList.contains("increase-quantity")) {
            const index = parseInt(e.target.dataset.index, 10);
            updateQuantity(index, 1);
        }
    });

    // Xử lý khi bấm nút Đặt hàng
    checkoutButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Giỏ hàng của bạn đang trống!");
            return;
        }

        alert("Bạn đã đặt hàng thành công!");
        localStorage.removeItem("cart");
        renderCart();
    });

    // Gọi hàm renderCart khi trang được tải
    renderCart();
});

