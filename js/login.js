let name = localStorage.getItem("name") ? localStorage.getItem("name") : "";
// console.log(name);
if (name != "") {
  alert("Please visit profile");
  window.location.href = "profile.html";
}
function checkAccount() {
  let email, psw;
  email = document.getElementById("emailLogin").value;
  psw = document.getElementById("pswLogin").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    user_records.some((v) => {
      return v.email == email && v.psw == psw;
    })
  ) {
    alert("Login Pass");
    let current_user = user_records.filter((v) => {
      return v.email == email && v.psw == psw;
    })[0];
    localStorage.setItem("name", current_user.name);
    localStorage.setItem("email", current_user.email);
    window.location.href = "profile.html";
  } else {
    alert("Login Fail");
  }
}
