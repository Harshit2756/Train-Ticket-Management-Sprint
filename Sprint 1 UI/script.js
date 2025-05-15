document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let valid= true;
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;
    if (username === "") {
        valid = false;
        document.getElementById("loginUsernameError").textContent = "Username is required.";
    }
    else {
        document.getElementById("loginUsernameError").textContent = "";
    }
    if (password === "") {
        valid = false;
        document.getElementById("loginPasswordError").textContent = "Password is required.";
    }
    else {
        document.getElementById("loginPasswordError").textContent = "";
    }
    if (valid) {
        alert("Login Successful");
        window.location.href = "customer/home.html";
    }
});

document.getElementById("registerForm").addEventListener("submit", function (e){
    e.preventDefault();
    let valid = true;

    //username
    const username = document.getElementById("username").value.trim();
    const usernameRegex = /^[A-Za-z]{6,}$/;
    if (!usernameRegex.test(username)) {
        
        document.getElementById("usernameError").textContent = "Username must be at least & letters, no numbers or special characters.";
        valid = false;

    }
    else {
        document.getElementById("usernameError").textContent = "";
    }

    //password
    const password = document.getElementById("password").value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;
    if (!passwordRegex.test(password)) {
        valid = false;
        document.getElementById("passwordError").textContent = "Password must be 8+ characters, include uppercase, number, and special characters";
    }
    else {
        document.getElementById("passwordError"). textContent = "";
    }

    //Confirm Password
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword !== password) {
        valid = false;
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
    }
    else {
        document.getElementById("confirmPasswordError").textContent = "";
    }

    //Email
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    if(!emailRegex.test(email)) {
        valid = false;
        document.getElementById("emailError").textContent = "Invalid Email Format.";
    }
    else {
        document.getElementById("emailError").textContent = "";
    }

    //Mobile
    const mobile = document.getElementById("mobile").value.trim();
    if (!/^\d{10}$/.test(mobile)) {
        valid= false;
        document.getElementById("mobileError").textContent = "Mobile number must be 10 digits.";

    }
    else {
        document.getElementById("mobileError").textContent = "";
    }

    //Aadhaar
    const aadhaar = document.getElementById("aadhaar").value.trim();
    const aadhaarRegex = /^\d{12}$/;
    if (!aadhaarRegex.test(aadhaar)) {
        document.getElementById("aadhaarError").textContent = "Aadhaar must be a 12 digit number";
        valid= false;
    } else {
        document.getElementById("aadhaarError").textContent = "";
    }

    if (valid) {
        alert("Registration successful!");
        window.location.href = "login.html";
    }

});
