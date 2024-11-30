
let timeout = null;

function searchItems(query) {
  const searchContainer = document.querySelectorAll(".ourmenu-item");
  const result = [];
  searchContainer.forEach((container) => {
    const items = container.querySelectorAll(".ourmenu-card");
    items.forEach((item) => {
      const itemName = item.querySelector("h4").innerText.toLowerCase();
      if (itemName.includes(query.toLowerCase())) {
        result.push(itemName);
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  
}

async function getProducts(){
    const data = await fetch('https://dummyjson.com/products');
    const json = await data.json();

    const menucontainer = document.querySelector('.ourmenu-item');
    json.products.map((item) => {
        
        const card = document.createElement('div');
        card.classList.add('ourmenu-card');
        const brand = item.brand || 'unknown brand';
        card.innerHTML = `
        <img
                    src="${item.images[0]}"
                    alt="Best Seller Image"
                    />
                    <div class="menu-card-content">
                    <h4>${brand} </h4>
                    <p>${item.description} </p>
                    <span
                        >Price: <strike class="strike-price">$${item.price} </strike> $8.99</span
                    >
                    </div>
                    <div class="add-cart-menu-btn">
                    <button class="cta-button">Add to Cart</button>
                    </div>
`
menucontainer.appendChild(card);
    })
}


getProducts();

document.querySelector(".search-input")?.addEventListener("input", (event) => {
    const query = event.target.value;

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      searchItems(query);
    }, 2000);
  });


