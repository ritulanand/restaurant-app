const orders = [
    {
        id: 1,
        items: [
            {name : 'Pizza', quantity: 2},
            {name : 'garlic bread', quantity : 1},
        ],
        totalPrice : 35.99,
        status: "Delivered",
    },
    {
        id: 2,
 items: [{ name: "Burger", quantity: 1 }],
 totalPrice: 10.99,
 status: "In Transit",
    },
    {
        id: 3,
        items: [
        { name: "Salad", quantity: 3 },
        { name: "Juice", quantity: 2 },
        ],
        totalPrice: 18.99,
        status: "Pending",
    }
]


 // Function to create an order card
 function createOrderCard(order) {
 const orderCard = document.createElement("div");
 orderCard.className = "order-card";
 // Card Content
 orderCard.innerHTML = `
 <div class="order-header">
 <span class="order-number">Order #${order.id}</span>
 </div>
 <div class="order-details">
 ${order.items
 .map(
 (item) => `
 <div class="order-details-item">
 <span>${item.name}</span>
 <span>x${item.quantity}</span>
 </div>
 `
 )
.join("")}
 </div>
 <div class="order-total">Total:
 $${order.totalPrice.toFixed(2)}</div>
 <span class="order-status status-${order.status
 .toLowerCase()
 .replace(" ", "-")}">
 ${order.status}
 </span>
 `;
 return orderCard;
 }

 // Add order cards to the container
 const orderCardsContainer = document.getElementById("order-cards");
 if (orders.length > 0) {
 orders.forEach((order) => {
 const orderCard = createOrderCard(order);
 orderCardsContainer.appendChild(orderCard);
 });
 } else {
 const noOrdersMessage = document.createElement("div");
 noOrdersMessage.className = "no-orders";
 noOrdersMessage.textContent = "You have not ordered any food yet";
 orderCardsContainer.appendChild(noOrdersMessage);
 }