(() => {

    let btn = document.querySelector(".cart-btn");
    let productsBox = document.getElementById("populars");

    const createProduct = () => {
        const product = document.createElement("div");
        product.classList.add("product__card", "flex__column");

        const contenido = `
            <a href="./products/prt-00001.html" class="product__image--box"><img src="./assets/img/products/ryzen-5-5600g.jpg" alt="product"></a>
            <h3 class="product__card-title">product title sample</h3>
            <p class="product__card-price">$ 10.000</p>
            <a href="./products/prt-00001.html" class="product__card-link">Ver mas...</a>
        `;

        product.innerHTML = contenido;
        productsBox.appendChild(product);
    };

    
    btn.addEventListener("click", createProduct);
})();