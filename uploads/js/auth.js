console.log("AUTH imported");
async function login(status) {
  try {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let url = "/user/login";
    if (!status) url = "/admin/login";
    let data = await axios.post(`${API}${url}`, {
      phoneNumber: username,
      password: password,
    });
    data = data.data;
    localStorage.setItem("user", JSON.stringify(data.details.user));
    localStorage.setItem("tokens", JSON.stringify(data.details.token));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Login Success !",
      text: `Welcom back ${data.details.user.name}`,
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = "/";
    });
  } catch (error) {
    console.log(error);
    Swal.fire(
      "Please enter valid login details!",
      "Username or password is wrong!!",
      "question"
    );
  }
}

function logout() {
  localStorage.clear();
  window.location = "/login";
}
