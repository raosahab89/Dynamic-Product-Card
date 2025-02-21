const body = document.getElementById("body")

// ask prompt from the user

const title = prompt("Enter Title of your Product")
const proContent = prompt("Enter your Product Description")
const btnTitle = prompt("Enter your Button Title")
const btnLink = prompt("Enter your Button Link")
const ImageLink = prompt("Enter Link of your Product Image")

// create element by dom

const mainDiv = document.createElement("div")
const div = document.createElement("div")
const cardImage = document.createElement("img")
const h1 = document.createElement("h1")
const productContent = document.createElement("p")
const button = document.createElement("button")
const anchor = document.createElement("a")
const TilteName = document.createTextNode(title)
const productDetails = document.createTextNode(proContent)
const btnName = document.createTextNode(btnTitle)


// append by dom to show on screen

body.appendChild(mainDiv)
body.appendChild(div)
div.appendChild(cardImage)
div.appendChild(h1)
div.appendChild(productContent)
div.appendChild(anchor)
div.appendChild(button)
anchor.appendChild(button)
h1.appendChild(TilteName)
productContent.appendChild(productDetails)
mainDiv.appendChild(div)
button.appendChild(btnName)


// setAttribute for css 

mainDiv.setAttribute("id","parentDiv")
div.setAttribute("id","childDiv")
cardImage.setAttribute("id","pic")
cardImage.setAttribute("src",ImageLink)
h1.setAttribute("id","heading")
productContent.setAttribute("id","content")
button.setAttribute("id","button")
anchor.setAttribute("href", btnLink);
