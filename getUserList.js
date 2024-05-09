// Fetch user list from local storage and display it on the page
window.onload = function() {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var userList = document.getElementById("userList");
    users.forEach(function(user) {
      var listItem = document.createElement("li");
      listItem.textContent = "Name: " + user.name + ", Email: " + user.email;
      userList.appendChild(listItem);
    });
  };
  