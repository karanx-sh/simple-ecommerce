async function addToCart(productId) {
  try {
    Swal.fire({
      title: "Enter Product quantity",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "add",
      showLoaderOnConfirm: true,
      preConfirm: (quantity) => {
        axios
          .post(`${API}/cart/add`, {
            id: productId,
            quantity: quantity,
          })
          .then((res) => {
            console.log(res, res.data);
          })
          .catch((err) => {
            Swal.showValidationMessage(`Request failed: ${err}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "added to the cart",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
    if (!productId) throw "Invalid Product";
  } catch (error) {
    Swal.fire("Something Went Wrong !", error, "question");
  }
}

async function viewCart() {
  try {
    let data = await axios.get(`${API}/cart/getAll`);
    let cartList = document.getElementById("purchased_products");
    let html = ``;
    cartList.innerHTML = "";
    let Totalprice = 0;
    console.log(data, data.data.data.length);
    if (data.data.data.length == 0)
      document.getElementById("placeOrder").innerHTML = "Cart is Empty";
    data.data.data.map((cart) => {
      Totalprice += cart.ProductId.price;
      html += `<li class="list-group-item d-flex justify-content-between lh-condensed">
              <img src="${cart.ProductId.image_link}" class="img-thumbnail img-custom-w" alt="...">
              <div>
                <h6 class="my-0">${cart.ProductId.name}</h6>
                <small class="text-muted">${cart.ProductId.description}</small>
              </div>
              <span class="text-muted fa fa-shopping-cart span-custom-1">${cart.quantity}</span>
              <br>
              <span class="text-muted fa fa-bitcoin span-custom-1">${cart.ProductId.price}</span>
              <span onclick="removeCart('${cart._id}')" class="text-muted fa fa-times"></span>

            </li>`;
    });
    html += `<li class="list-group-item d-flex justify-content-between">
              <span>Total (BTC)</span>
              <strong>${Totalprice}</strong>
            </li>`;
    cartList.innerHTML = html;
  } catch (error) {
    Swal.fire("Something Went Wrong !", error, "question");
  }
}

async function removeCart(productId) {
  try {
    let data = await axios.delete(`${API}/cart/delete/${productId}`);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Product Removed From Cart",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      viewCart();
    });
  } catch (error) {
    Swal.fire("Something Went Wrong !", error, "question");
  }
}
