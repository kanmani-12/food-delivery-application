function login() {
  let user = document.getElementById("username").value;

  let pass = document.getElementById("password").value;

  if (user == "admin" && pass == "1234") {
    document.getElementById("login").style.display = "none";

    document.getElementById("home").style.display = "block";
  } else {
    alert("Wrong Username or Password");
  }
}

let pizzaMenu = [
  ["Margherita Pizza", 200, true],
  ["Cheese Pizza", 250, true],
  ["Veg Pizza", 180, false],
];

let burgerMenu = [
  ["Veg Burger", 120, true],
  ["Cheese Burger", 150, true],
  ["French Fries", 90, false],
];

let southMenu = [
  ["Dosa", 60, true],
  ["Idli", 40, true],
  ["Meals", 120, false],
];

let currentMenu = [];

let cart = [];

function showMenu(type) {
  if (type == "pizza") currentMenu = pizzaMenu;

  if (type == "burger") currentMenu = burgerMenu;

  if (type == "south") currentMenu = southMenu;

  displayFood(currentMenu);
}

function displayFood(menu) {
  let output = "";

  for (let i = 0; i < menu.length; i++) {
    output += `<div class="food">

        <b>${menu[i][0]}</b>

        <p>Price: ₹${menu[i][1]}</p>

        <p>
        ${menu[i][2] ? "Available" : "Not Available"}
        </p>

        ${
          menu[i][2]
            ? `<button onclick="addCart('${menu[i][0]}',
        ${menu[i][1]})">
        Add to Cart
        </button>`
            : ""
        }

        </div>`;
  }

  document.getElementById("foodList").innerHTML = output;
}

function searchFood() {
  let value = document.getElementById("search").value.toLowerCase();

  let result = currentMenu.filter(function (food) {
    return food[0].toLowerCase().includes(value);
  });

  displayFood(result);
}

function addCart(name, price) {
  cart.push([name, price]);

  showCart();
}

function showCart() {
  let output = "";
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    output += `<p>
        ${cart[i][0]} - ₹${cart[i][1]}
        <button onclick="removeCart(${i})">
        Remove
        </button>
        </p>`;

    total += cart[i][1];
  }

  if (cart.length == 0) output = "Cart is empty";

  document.getElementById("cartItems").innerHTML = output;

  document.getElementById("total").innerHTML = total;
}

function removeCart(index) {
  cart.splice(index, 1);

  showCart();
}

function placeOrder() {
  if (cart.length == 0) {
    alert("Please add food to cart!");

    return;
  }

  let payment = document.getElementById("payment").value;

  alert("Order Placed Successfully!\n" + "Payment: " + payment);
}
