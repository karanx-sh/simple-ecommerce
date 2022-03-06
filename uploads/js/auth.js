console.log("AUTH imported");
async function login(status) {
  try {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let url = "/user/login";
    let callBack = "/";
    if (!status) {
      url = "/admin/login";
      callBack = "/ui/admin/";
    }

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
      text: `Welcome back ${data.details.user.name}`,
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = callBack;
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

async function register() {
  try {
    let name = document.getElementById("name").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let street = document.getElementById("street").value;
    let pincode = document.getElementById("pincode").value;

    if (
      !name ||
      phoneNumber.length != 10 ||
      !phoneNumber ||
      !email ||
      !street ||
      pincode.length < 4 ||
      !pincode
    )
      throw "Fill All Details";

    let url = "/user/signup";
    let data = await axios.post(`${API}${url}`, {
      email: email,
      name: name,
      address: [
        {
          street: street,
          pincode: pincode,
          selected: true,
        },
      ],
      phoneNumber: phoneNumber,
      password: password,
    });
    data = data.data;
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Registration Success !",
      text: `Welcome ${name}`,
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = "/login";
    });
  } catch (error) {
    if (typeof error != "string") {
      Swal.fire("Opps?", error.response.data.details.message, "question");
    } else {
      Swal.fire("Opps?", error, "question");
    }
  }
}
