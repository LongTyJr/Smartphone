// Lựa chọn tất cả các nút có class 'home_like'
const likeButtons = document.querySelectorAll('.home_like');

// Thêm sự kiện click cho từng nút
likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle (chuyển đổi) trạng thái thích
        button.classList.toggle('home_like--liked');
    });
});




// Tạo một đối tượng chứa từ khóa và liên kết trang tương ứng
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









  