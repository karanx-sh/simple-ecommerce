async function placeOrder() {
  try {
    let data = await axios.get(`${API}/order/place`);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Order Placed !!",
      text: `Thanks ${JSON.parse(localStorage.getItem("user")).name}, :)`,
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = "/";
    });
  } catch (error) {
    Swal.fire("Something Went Wrong !", error, "question");
  }
}
