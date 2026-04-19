let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ================= PRODUCTS (23 COMPLETE) ================= */
const products = {
frames:{name:"Frames",price:1599,desc:"Premium quality wall frames.\nPerfect for home & office decoration."},
mirrorframes:{name:"Mirror Frames",price:2000,desc:"Elegant mirror frames.\nLuxury modern look."},
magicmirrorframes:{name:"Magic Mirror Frames",price:2000,desc:"Magic mirror effect frames.\nChanges with light."},

whitemug:{name:"White Mug",price:799,desc:"Classic white mug.\nPerfect for daily use."},
colourmug:{name:"Colour Mug",price:1099,desc:"Bright colorful mugs.\nStylish and fun."},
heartmug:{name:"Heart Mug",price:1199,desc:"Heart handle mug.\nPerfect gift."},
magicmug:{name:"Magic Mug",price:1199,desc:"Heat reveal magic mug.\nHidden design appears."},

shirtwhite:{name:"White Shirt",price:799,desc:"Simple white shirt.\nComfortable fabric."},
shirtcolour:{name:"Colour Shirt",price:1499,desc:"Stylish colorful shirt.\nPremium look."},

flyers:{name:"Flyers",price:699,desc:"High quality flyers.\nBusiness promotion."},
visitingcards:{name:"Visiting Cards",price:1999,desc:"Premium visiting cards.\nProfessional look."},

canvas:{name:"Canvas Prints",price:1399,desc:"Photo canvas prints.\nWall decoration."},
framedcanvas:{name:"Framed Canvas",price:1599,desc:"Framed artwork canvas.\nElegant design."},

birthdaycard:{name:"Birthday Cards",price:499,desc:"Greeting cards.\nSpecial moments."},

lunchbox:{name:"Lunch Box",price:699,desc:"Durable lunch box.\nDaily use."},
waterbottle:{name:"Water Bottle",price:899,desc:"Strong water bottle.\nPortable use."},
tempbottle:{name:"Temperature Bottle",price:1499,desc:"Hot & cold bottle.\nTemperature control."},

wallet:{name:"Wallet",price:1299,desc:"Premium wallet.\nMultiple pockets."},
keyring:{name:"Keyring",price:499,desc:"Stylish keyring.\nDaily accessory."},
chain:{name:"Chain",price:499,desc:"Fashion chain.\nLightweight."},
ring:{name:"Ring",price:245,desc:"Simple ring.\nAffordable style."},

album:{name:"Album",price:999,desc:"Photo album.\nMemory storage."},
cushion:{name:"Cushion",price:749,desc:"Soft cushion.\nComfortable home use."}
};

/* ================= LOAD PRODUCTS ================= */
window.onload = function(){

let grid = document.getElementById("productGrid");

for(let id in products){
let p = products[id];

grid.innerHTML += `
<div class="card">
<img src="images/${id}1.jpg">

<div class="info">
<h3>${p.name}</h3>
<p class="price">Rs ${p.price}</p>
<p class="desc">${p.desc}</p>

<button class="view-btn" onclick="openProduct('${id}')">View</button>
<button class="cart-btn2" onclick="addToCart('${p.name}',${p.price})">Add To Cart</button>

</div>
</div>
`;
}

};

/* ================= FUNCTIONS ================= */
function openProduct(id){
localStorage.setItem("product",id);
location.href="product.html";
}

function addToCart(name,price){
cart.push({name,price});
localStorage.setItem("cart",JSON.stringify(cart));
alert("Added 🛒");
}