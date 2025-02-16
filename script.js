// Function to show the registration form
function showRegisterForm() {
    document.getElementById('authContainer').style.display = 'none';
    document.getElementById('registerContainer').style.display = 'block';
}

// Function to show the login form
function showLoginForm() {
    document.getElementById('registerContainer').style.display = 'none';
    document.getElementById('authContainer').style.display = 'block';
}

// Function to register a new user
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // Check if user already exists in localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(user => user.username === username)) {
        alert('Username already exists!');
        return;
    }

    // Store the new user in localStorage
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful! You can now login.');
    showLoginForm();
});

// Function to login a user
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        showSecuredPage();
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

// Function to show the secured page
function showSecuredPage() {
    document.getElementById('authContainer').style.display = 'none';
    document.getElementById('registerContainer').style.display = 'none';
    document.getElementById('securedPage').style.display = 'block';
}

// Function to log out
function logout() {
    alert('You have been logged out!');
    document.getElementById('securedPage').style.display = 'none';
    showLoginForm();
}
