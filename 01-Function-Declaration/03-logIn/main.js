function login(username, password) {
  if ( username === "admin" && password === "P@ssw0rd") {
    alert("Login Sucessfully !");
  } else {
    alert("Login Failed !");
  }
}

let userNameInput = prompt("Please enter your Username");
let userPasswordInput = prompt("Please enter your Password");
login(userNameInput, userPasswordInput);
