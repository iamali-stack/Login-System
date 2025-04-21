// DOM Elements
var userName=document.getElementById('userName')
var userEmail=document.getElementById('userEmail')
var userPassword=document.getElementById('userPassword')
var userEmailLogin=document.getElementById('userEmailLogin')
var userPasswordLogin=document.getElementById('userPasswordLogin')


var usernamevalidation=false;
var emailvalidation=false;
var passwordvalidation=false;
// Regex patterns
var regex = {
    userName: /^[a-zA-Z]{3,9}$/,
    userEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    userPassword: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/
};

function validateAllInputs(elem) {
   if  (elem.id == "userName") {
        if (regex.userName.test(elem.value)) {
            elem.classList.remove("is-invalid");
            elem.classList.add("is-valid");
            usernamevalidation = true;
            return true;
        } else {
            elem.classList.add("is-invalid");    
            usernamevalidation = false;       
            return false;
        }}
        else if (elem.id == "userEmail") {
        if (regex.userEmail.test(elem.value)) {
            elem.classList.remove("is-invalid");
            elem.classList.add("is-valid");
             emailvalidation=true;
            return true;
        } else {
            elem.classList.add("is-invalid");  
            emailvalidation=false;         
            return false;
        }
    }
    else if (elem.id == "userPassword") {
        if (regex.userPassword.test(elem.value)) {
            elem.classList.remove("is-invalid");
            elem.classList.add("is-valid");
            passwordvalidation=true;
            return true;
        } else {
            elem.classList.add("is-invalid");  
            passwordvalidation=false;         
            return false;
        }
    }
  
}


// Save data to local storage
function saveData() {
    if (usernamevalidation === true && emailvalidation === true && passwordvalidation === true) {
        // Get input values
        var userNameInput = document.getElementById('userName').value;
        var userEmailInput = document.getElementById('userEmail').value;
        var userPasswordInput = document.getElementById('userPassword').value;
         
        // Get existing users or create empty array
        var users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Check if email already exists
        for (var i = 0; i < users.length; i++) {
            if (users[i].email === userEmailInput) {
                console.log("Email already exists");
                alert("Email already exists");
                return false;
            }
        }
        
        // Create user object
        var newUser = {
            username: userNameInput,
            email: userEmailInput,
            password: userPasswordInput
        };
        
        // Add new user to array
        users.push(newUser);
        
        // Save updated users array back to localStorage
        localStorage.setItem('users', JSON.stringify(users));
        // Switch to login tab automatically
        document.getElementById('login-tab').click();
        console.log('User registered successfully!');
    }
}

// Check data for login
// This function checks the entered email and password against stored users in localStorage
// and alerts the user if the login is successful or not.
function checkDataLogin() {
    var userEmailInput = document.getElementById('userEmailLogin').value;
    var userPasswordInput = document.getElementById('userPasswordLogin').value;

    // Get all users from localStorage
    var users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Iterate through users to find a match
    var userFound = false;
    var loggedInUser = null;

    for (var i = 0; i < users.length; i++) {
        if (users[i].email === userEmailInput && users[i].password === userPasswordInput) {
            userFound = true;
            loggedInUser = users[i];
            break;
        }
    }
    
    if (userFound) {
        // Save the logged-in user to localStorage
        localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
        console.log("Login successful!");
        // Redirect to home page
        window.location.href = 'home.html';
        return true;
    } else {
        alert("Invalid email or password.");
        return false;
    }
}
//clear fields
function clearFields() {
    userName.value = ""; 
    userName.classList.remove("is-valid");
    userEmail.value = "";
    userEmail.classList.remove("is-valid");
    userPassword.value = "";
    userPassword.classList.remove("is-valid");
    userEmailLogin.value = "";
    userEmailLogin.classList.remove("is-valid");
    userPasswordLogin.value = "";
    userPasswordLogin.classList.remove("is-valid");
}

