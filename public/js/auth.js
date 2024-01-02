const login = () => {
    const email = document.getElementById('userEmail').value;
    const password = document.getElementById('userPassword').value;

    var users = JSON.parse(localStorage.getItem("users")) || [];

    var user = users.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (user) {
        localStorage.setItem("loggedIn", true);
        window.location.href = "/article.html";
        alert("Login successful!");
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

const register = () => {
    var username = document.getElementById("usernameRegister").value;
    var email = document.getElementById("emailRegister").value;
    var password = document.getElementById("passwordRegister").value;
    var confPassword = document.getElementById("confPasswordRegister").value;

    var users = JSON.parse(localStorage.getItem("users")) || [];

    var userExists = users.some(function(u) {
        return u.email === email;
    });

    if (userExists) {
        alert("User with this email already exists. Please use a different email.");
        return;
    }

    if (password !== confPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    var newUser = {
        username: username,
        email: email,
        password: password,
        confPassword: confPassword
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! You can now log in.");
    window.location.href = "/login.html";
}

function checkLoggedIn() {
    var isLoggedIn = localStorage.getItem("loggedIn");

    if (!isLoggedIn) {
        window.location.href = "/login.html";
        alert("You need to log in first.");
    }

    window.onload = checkLoggedIn;
}