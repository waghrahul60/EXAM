function getvalue() {
  let userName = document.querySelector("#username").value;
  let password = document.querySelector("#InputPassword").value;

  document.querySelector("#user").innerHTML = "User Name : " + userName;
  document.querySelector("#pass").innerHTML = "Password : " + password;
}
