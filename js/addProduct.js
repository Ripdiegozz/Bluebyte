(() => {

    let btn = document.querySelector(".cart-btn");
    let productsBox = document.getElementById("populars");

    const createImage = () =>{
        const imageBox = document.createElement("a");
        imageBox.classList.add("product__image--box");
        imageBox.href = "./products/prt-00001.html";

        const img = document.createElement("img");
        img.src = "../assets/img/products/m-proccesors/5.jpg";
        img.alt = "product-image"

        imageBox.appendChild(img)

        return imageBox;
    };

    const productTitle = () =>{
        const title = document.createElement("h3");
        title.classList.add("product__card-title");
        title.innerText = "product title sample";
        return title;
    }

    const productPrice = () => {
        const price = document.createElement("p");
        price.classList.add("product__card-price");
        price.innerText = "$ 10.000";
        return price;
    };

    const productLink = () => {
        const link = document.createElement("a")
        link.classList.add("product__card-link");
        link.href = "../products/prt-00001.html";
        link.innerText = "Ver mas...";
        return link;
    };
     
    const createProduct = () => {
        const product = document.createElement("div");
        product.classList.add("product__card", "flex__column");
        product.appendChild(createImage())
        product.appendChild(productTitle())
        product.appendChild(productPrice())
        product.appendChild(productLink())
        productsBox.appendChild(product);
    };

    
    btn.addEventListener("click", createProduct);
})();