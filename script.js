document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get user input
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
  
    // Create user object
    var user = {
      name: name,
      email: email
    };
  
    // Retrieve existing users from local storage or initialize an empty array
    var users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Add the new user to the array
    users.push(user);
  
    // Save the updated user array back to local storage
    localStorage.setItem("users", JSON.stringify(users));
  
    // Redirect to user list page
    window.location.href = "userList.html";
  });
  