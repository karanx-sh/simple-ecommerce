async function getAllProducts() {
  try {
    let data = await axios.get(`${API}/product/getAll`);
    let slider = document.getElementById("news-slider");
    slider.innerHTML = "";
    let html = ``;
    console.log(data);
    data.data.data.map((products) => {
      html += `<div class="post-slide">
          <div class="post-img">
            <img  src="${products.image_link}" alt="">
            <a href="#" class="over-layer"><i class="fa fa-link"></i></a>
          </div>
          <div class="post-content">
            <h3 class="post-title">
              <a href="#">${products.name}</a>
            </h3>
            <p class="post-description">${products.description}</p>
            <span class="post-date"><i class="fa fa-bitcoin"></i>${products.price}</span>
            <button onclick="addToCart('${products.id}')" type="button" class="btn btn-primary read-more">Add To Cart</button>
          </div>
        </div>`;
    });
    slider.innerHTML = html;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
