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

async function getMyOrders() {
  try {
    let data = await axios.get(`${API}/order/getAll`);
    let myOrder = document.getElementById("myOrders");
    myOrder.innerHTML = "";
    let html = ``;
    data.data.data.map((orders) => {
      html += `<tr>
      <td>${orders.InvoiceId}</td>
      <td>${orders.PurchasedProducts.length}</td>
      <td>${orders.TotalPrice}</td>
      <td>${new Date(orders.createdAt).getDate()}/${new Date(
        orders.createdAt
      ).getMonth()}/${new Date(orders.createdAt).getFullYear()}</td>
      </tr>`;
    });
    myOrder.innerHTML = html;
  } catch (error) {
    Swal.fire("Something Went Wrong !", error, "question");
  }
}

async function getMyOrdersAdmin() {
  try {
    let data = await axios.get(`${API}/order/admin/getAll`);
    let myOrder = document.getElementById("myOrders");
    myOrder.innerHTML = "";
    let html = ``;
    data.data.data.map((orders) => {
      html += `<tr>
      <td>${orders.InvoiceId}</td>
      <td>${orders.UserId.name}</td>
      <td>${orders.UserId.phoneNumber}</td>
      <td>${orders.PurchasedProducts.length}</td>
      <td>${orders.TotalPrice}</td>
      <td>${new Date(orders.createdAt).getDate()}/${new Date(
        orders.createdAt
      ).getMonth()}/${new Date(orders.createdAt).getFullYear()}</td>
      </tr>`;
    });
    myOrder.innerHTML = html;
  } catch (error) {
    window.location.href = "/ui/admin/login";
    Swal.fire("Something Went Wrong !", error, "question");
  }
}
