var prodList = "";
var prod = document.getElementById("list");
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger"); //trigger cart
var products = [
        {
            name: "Veronica & Mercedes",
            origin: "Colombia",
            price: "350 Php",
            img : "images/p1.jpg",
            description : "A delicious Microlot with juicy notes of cola and the sweetness of brown sugar. As the coffee cools, you can taste delicate white grape and lime notes."
        },
        {
            name: "Joao Hamilton",
            origin: "Brazil",
            price: "270 Php",
            img : "images/p2.jpg",
            description : "A juicy and delicate cup with notes of cherry, tangerine and macadamia, with a citrus-like acidity, making a sweet and refreshing filter."
        },
        {
            name: "Celso & Gertrudes",
            origin: "Brazil",
            price: "320 Php",
            img : "images/p3.jpg",
            description : "Best enjoyed as an espresso this coffee has a creamy body with notes of caramelised pecan, green grape and dark chocolate."
        },
        {
            name: "Maraba",
            origin: "Rwanda",
            price: "350 Php",
            img : "images/p4.jpg",
            description : "The first speciality coffee from Rwanda. Delicious as both espresso and filter. Fruity, full bodied and perfectly balanced."
        },
        {
            name: "Gajah Mountain",
            origin: "Sumatra",
            price: "300 Php",
            img : "images/p5.jpg",
            description : "Rich and creamy body with an earthy and malt dark chocolate profile, distinctive to Sumatra. Deep and rich tones, like walking through a forest after rainfall."
        },
        {
            name: "Revelation",
            origin: "Signature Espresso",
            price: "320 Php",
            img : "images/p6.jpg",
            description : "Our signature espresso coffee. Makes a phenomenal rich espresso with a caramel finish."
        },
        {
            name: "Natural Spirit",
            origin: "Organic Blend",
            price: "370 Php",
            img : "images/p7.jpg",
            description : "Delicious morning coffee, works beautifully in a cafetiere as well as espresso. A zesty rich organic blend. Bold and full bodied."
        },
        {
            name: "House Roast",
            origin: "Original Blend",
            price: "310 Php",
            img : "images/p8.jpg",
            description : "Our original house roast is unmistakably Union: bold intensity infused with a deep natural sweetness. Expertly blended and roasted for your early morning filter brew."
        },
    ];


window.onload = function() {

    for (var i=0; i < products.length; i++) {
    	prodList += `<div class = "prodContainer">
                <img class="prodImg" src="${products[i].img}">
                <div class="prodName name">${products[i].name}</div>
                <div class="prodOrigin origin"> from ${products[i].origin}</div>
                <div class="prodDesc description">${products[i].description}</div>
                <div class="prodPrice price">${products[i].price}</div>
                <button class="buttonAddToCart buttonRadius addToCart">Add to Cart</button> <br>
                </div>`;

    	prod.innerHTML = prodList;
    }

    //ADD TO CART
    ready()

} //end


// ADD TO CART FUNCTIONS
function ready() {
var addToCartButtons = document.getElementsByClassName('addToCart')
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
    }
}

function addToCartClicked(event) {
var button = event.target
var shopItem = button.parentElement
var title = shopItem.getElementsByClassName('prodName')[0].innerText
var price = shopItem.getElementsByClassName('prodPrice')[0].innerText
var imageSrc = shopItem.getElementsByClassName('prodImg')[0].src
var desc = shopItem.getElementsByClassName('prodDesc')[0].innerText
addItemToCart(title, price, imageSrc, desc)
}

function addItemToCart(title, price, imageSrc, desc) {
var cartRow = document.createElement('div')
cartRow.classList.add('cartRow')
var cartItems = document.getElementsByClassName('cart-items')[0]

var cartRowContents = `
    <img class="cartItemImg" src="${imageSrc}">
    <p>
    <span class="cartTitleDescPrice" style="font-weight: bold;">Item Name</span><br>
    ${title}<br><br>
    <span class="cartTitleDescPrice" style="font-weight: bold;">Description</span><br>
    <span class="prodDesc cartTitleDescPrice" style="color: black;">${desc}</span>
    </p>

    <p><span class="cartTitleDescPrice" style="font-weight: bold;">Price</span><br>
    ${price}<br><br>
    <button class="btnRemove buttonRadius">Remove</button></p>`

    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)

    alert(title +" successfully added in your cart!");
}
	

//MODAL
var modal = document.getElementById("myModal"); //Get the modal
var btn = document.getElementById("myBtn"); //Get the cart button that opens the modal
var span = document.getElementsByClassName("close")[0]; //Get the <span> element that closes the modal

btn.onclick = function() { //onclick event get modal
  modal.style.display = "block";
}

span.onclick = function() { //when user clicks on ](x), close modal
  modal.style.display = "none";
}

window.onclick = function(event) { //when user clicks anywhere outside of modal, close modal
  if (event.target == modal) {
    modal.style.display = "none";
  }
}