function signup() {
  var inputEmail = document.getElementById("email");
  localStorage.setItem("email", inputEmail.value);
}
