
let users = JSON.parse(localStorage.getItem("users")) || [];


function signup(event) {
    event.preventDefault();
    const email = document.getElementById("signup-email").value.trim().toLowerCase();
    const password = document.getElementById("signup-password").value.trim();

    const msg = document.getElementById("login-message");

    
    const passwordRegex = /^\d{6}$/;
    if(!passwordRegex.test(password)){
        msg.style.color = "red";
        msg.innerText = "Password must be exactly 6 digits (numbers only)!";
        return;
    }

    
    const userExists = users.some(u => u.email === email);
    if(userExists){
        msg.style.color = "red";
        msg.innerText = "Email already exists!";
        return;
    }

    
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    
    msg.style.color = "green";
    msg.innerText = "Signup successful! Logging you in...";

    setTimeout(() => {
        window.location.href = "login.html"; 
    }, 1500);
}


function login(event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value.trim().toLowerCase();
    const password = document.getElementById("login-password").value.trim();

    const user = users.find(u => u.email === email && u.password === password);
    const msg = document.getElementById("login-message");

    if(user){
        msg.style.color = "green";
        msg.innerText = "Sign in successful!";
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1500);
    } else {
        msg.style.color = "red";
        msg.innerText = "Invalid email or password!";
    }
}


function showSignup() {
    document.querySelector("form[onsubmit='login(event)']").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}
