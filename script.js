// Hiển thị form đăng nhập
function showLogin() {
    document.querySelector('.login-form').classList.add('active');
    document.querySelector('.register-form').classList.remove('active');
}

// Hiển thị form đăng ký
function showRegister() {
    document.querySelector('.register-form').classList.add('active');
    document.querySelector('.login-form').classList.remove('active');
}

// Mặc định hiển thị form đăng nhập
showLogin();

// Giả lập dữ liệu người dùng
const users = [];

// Xử lý form đăng ký
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn form reload trang
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Lưu thông tin người dùng
    users.push({ name, email, password });
    alert('Đăng ký thành công! Hãy đăng nhập để tiếp tục.');
    showLogin();
});

// Xử lý form đăng nhập
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn form reload trang
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;

    // Kiểm tra thông tin người dùng
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        alert(`Chào mừng ${user.name} đến với trang chủ!`);
        window.location.href = 'trangchu.html'; // Chuyển hướng đến trang chủ
    } else {
        alert('Email hoặc mật khẩu không đúng!');
    }
});
