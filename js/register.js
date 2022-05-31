let email, psw, confirmPsw, username;
function saveData() {
  username = document.getElementById("userNameSignup").value;
  email = btoa(document.getElementById("emailSignup").value);
  psw = btoa(document.getElementById("pswSignup").value);
  confirmPsw = btoa(document.getElementById("pswConfirmSignup").value);
  if (username !== "" && psw !== "" && confirmPsw !== "") {
    if (psw !== confirmPsw) {
      alert("Password not match");
    } else {
      let user_records = new Array();
      user_records = JSON.parse(localStorage.getItem("users"))
        ? JSON.parse(localStorage.getItem("users"))
        : [];
      if (
        user_records.some((v) => {
          if (email !== "") {
            return v.email === email;
          }
        })
      ) {
        alert("duplicate data");
      } else {
        user_records.push({
          username: username,
          email: email,
          psw: psw,
        });
        localStorage.setItem("users", JSON.stringify(user_records));
        alert("sign up successfully");
        document.getElementById("userNameSignup").value = "";
        document.getElementById("emailSignup").value = "";
        document.getElementById("pswSignup").value = "";
        document.getElementById("pswConfirmSignup").value = "";
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
        loginTab.checked = true;
      }
    }
  }
}
