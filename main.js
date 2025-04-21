  // Guard to prevent unauthorized access
  var user = JSON.parse(localStorage.getItem('currentUser'));
  if (!user) {
    // Redirect to login page if no user is logged in
    window.location.href = 'index.html';
  } else {
    // Display the welcome message with the user's name
    document.getElementById('welcomeMessage').textContent = `Welcome, ${user.username}`;
  }

  // Logout function
  function logout() {
    localStorage.removeItem('currentUser'); // Clear the logged-in user
    window.location.href = 'index.html'; // Redirect to login page
  }