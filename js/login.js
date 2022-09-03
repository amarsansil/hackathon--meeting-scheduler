function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function submit() {
  var inputEmail = document.getElementById("email").value;
  var inputPassword = document.getElementById("password").value;

  var storeEmail = localStorage.getItem("email");
  var storePassword = localStorage.getItem("password");

  // console.log(storeEmail);
  if (storeEmail == inputEmail && storePassword == inputPassword) {
    alert("You are Successfully logged in to Calendly");
    window.location.href = "./user.html";
  } else {
    alert("Please enter correct credential");
  }
  
}
