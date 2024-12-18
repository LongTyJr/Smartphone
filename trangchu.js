// Lựa chọn tất cả các nút có class 'home_like'
const likeButtons = document.querySelectorAll('.home_like');

// Thêm sự kiện click cho từng nút
likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle (chuyển đổi) trạng thái thích
        button.classList.toggle('home_like--liked');
    });
});


// // Giả sử bạn có một danh sách dữ liệu cần tìm kiếm
// const data = [
//     "Samsung",
//     "Iphone",
//     "Realme",
//     "Xiaomi",
//     "Loa",
//     "Chuột máy tính",
//     "Bàn phím"
// ];

// // Xử lý sự kiện khi người dùng nhấn nút tìm kiếm
// document.getElementById("searchButton").addEventListener("click", function () {
//     const query = document.getElementById("searchInput").value.toLowerCase().trim();
//     const results = data.filter(item => item.toLowerCase().includes(query));

//     displayResults(results);
// });

// // Hiển thị kết quả
// function displayResults(results) {
//     const resultsContainer = document.getElementById("searchResults");
//     resultsContainer.innerHTML = ""; // Xóa kết quả cũ

//     if (results.length === 0) {
//         resultsContainer.innerHTML = "<p>Không tìm thấy kết quả.</p>";
//     } else {
//         const ul = document.createElement("ul");
//         results.forEach(item => {
//             const li = document.createElement("li");
//             li.textContent = item;
//             ul.appendChild(li);
//         });
//         resultsContainer.appendChild(ul);
//     }
// }


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




// document.addEventListener("DOMContentLoaded", () => {
//     const createSnowflake = () => {
//         const snowflake = document.createElement("div");
//         snowflake.classList.add("snowflake");
//         snowflake.textContent = "❄"; // Ký tự tuyết rơi
//         snowflake.style.left = Math.random() * 100 + "vw";
//         snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
//         snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
        
//         document.body.appendChild(snowflake);

//         // Xóa bông tuyết khi hiệu ứng kết thúc
//         setTimeout(() => {
//             snowflake.remove();
//         }, 5000);
//     };

//     // Tạo tuyết rơi mỗi 300ms
//     setInterval(createSnowflake, 300);
// });


// document.addEventListener("DOMContentLoaded", () => {
//     const createSnowflake = () => {
//         const snowflake = document.createElement("div");
//         snowflake.classList.add("snowflake");
//         snowflake.textContent = "❄"; // Ký tự tuyết rơi
//         snowflake.style.left = Math.random() * 100 + "vw";
//         snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Thời gian rơi
//         snowflake.style.fontSize = Math.random() * 10 + 10 + "px"; // Kích thước bông tuyết

//         document.body.appendChild(snowflake);

//         // Xóa bông tuyết khi hiệu ứng kết thúc
//         setTimeout(() => {
//             snowflake.remove();
//         }, 5000);
//     };

//     // Tạo tuyết rơi mỗi 300ms
//     setInterval(createSnowflake, 300);
// });


// document.addEventListener("DOMContentLoaded", () => {
//     const snowContainer = document.getElementById("snow-container");

//     const createSnowflake = () => {
//         const snowflake = document.createElement("div");
//         snowflake.classList.add("snowflake");
//         snowflake.textContent = "❄"; // Ký tự tuyết rơi
//         snowflake.style.left = Math.random() * 100 + "vw";
//         snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Thời gian rơi
//         snowflake.style.fontSize = Math.random() * 10 + 10 + "px"; // Kích thước bông tuyết

//         snowContainer.appendChild(snowflake);

//         // Xóa bông tuyết khi hiệu ứng kết thúc
//         setTimeout(() => {
//             snowflake.remove();
//         }, 5000);
//     };

//     // Tạo tuyết rơi mỗi 300ms
//     setInterval(createSnowflake, 300);
// });

document.addEventListener("DOMContentLoaded", () => {
    const snowContainer = document.createElement("div");
    snowContainer.style.position = "fixed";
    snowContainer.style.top = "0";
    snowContainer.style.left = "0";
    snowContainer.style.width = "100vw";
    snowContainer.style.height = "100vh";
    snowContainer.style.pointerEvents = "none";
    snowContainer.style.overflow = "hidden";
    snowContainer.style.zIndex = "9999";
    document.body.appendChild(snowContainer);

    const maxSnowflakes = 40; // Tăng số lượng bông tuyết
    const snowflakes = [];

    const createSnowflake = () => {
        const snowflake = document.createElement("div");
        snowflake.textContent = "❄";
        snowflake.style.position = "absolute";
        snowflake.style.color = "white";
        snowflake.style.opacity = "0.8";
        snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.top = "-50px";
        snowflake.style.transition = "transform 0.1s linear";
        snowContainer.appendChild(snowflake);

        const fallSpeed = Math.random() * 1 + 1; // Tốc độ rơi vừa phải (1 đến 2)
        let topPosition = -50;
        let leftPosition = parseFloat(snowflake.style.left);
        let direction = Math.random() > 0.5 ? 1 : -1; // Ban đầu sang trái hoặc phải
        const swayAmount = 1; // Biên độ lượn hợp lý

        const animateSnowflake = () => {
            topPosition += fallSpeed;
            leftPosition += direction * swayAmount;

            // Đổi hướng nếu chạm mép
            if (leftPosition <= 0 || leftPosition >= window.innerWidth) {
                direction *= -1;
            }

            // Nếu ra khỏi màn hình, khởi động lại ở trên
            if (topPosition > window.innerHeight) {
                topPosition = -50;
                leftPosition = Math.random() * window.innerWidth;
                direction = Math.random() > 0.5 ? 1 : -1;
            }

            snowflake.style.transform = `translate(${leftPosition}px, ${topPosition}px)`;
            requestAnimationFrame(animateSnowflake);
        };

        animateSnowflake();
        return snowflake;
    };

    // Khởi tạo bông tuyết
    for (let i = 0; i < maxSnowflakes; i++) {
        snowflakes.push(createSnowflake());
    }
});
