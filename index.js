function signup(userName) {
    const users = ['Alice', 'Bob', 'Charlie'];
    
    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}

// Example Usage
console.log(signup('Alice')); // User Already Registered, Please Login
console.log(signup('Dave'));  // Signup Successful, Please Login

function login(userName, password) {
    const users = ['Alice', 'Bob', 'Charlie'];
    const correctPassword = 'Emp@123';

    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    } else if (password !== correctPassword) {
        return "Wrong Password...";
    } else {
        return "Login Successful...";
    }
}

// Example Usage
console.log(login('Alice', 'Emp@123')); // Login Successful...
console.log(login('Dave', 'Emp@123'));  // User Not Found, Please Signup
console.log(login('Alice', 'WrongPass')); // Wrong Password...
