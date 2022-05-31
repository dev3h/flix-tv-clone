let name = localStorage.getItem("name") ? localStorage.getItem("name") : "";
if (name !== "") {
  window.location.href = "/index.html";
}
function checkAccount() {
  let email, psw;
  email = document.getElementById("emailLogin").value;
  psw = document.getElementById("pswLogin").value;
  if (email != "" && psw != "") {
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    if (
      user_records.some((v) => {
        return atob(v.email) === email && atob(v.psw) === psw;
      })
    ) {
      alert("Login Pass");
      let current_user = user_records.filter((v) => {
        return atob(v.email) === email && atob(v.psw) === psw;
      })[0];
      localStorage.setItem("name", current_user.username);
      localStorage.setItem("email", current_user.email);
      localStorage.setItem("password", current_user.psw);
      window.location.href = "/index.html";
    } else {
      alert("Login Fail");
    }
  }
}
