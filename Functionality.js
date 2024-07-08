let boxImage = document.getElementById("testimonial1")
let boxText = document.getElementById("box_text_one")
let boxTextTwo = document.getElementById("box_text_two")
let boxBackgroundOne = document.getElementById("boxone")
let boxBackgroundTwo = document.getElementById("boxtwo")
let boxBackgroundThree = document.getElementById("boxthree")
function firstImage(){
    boxImage.src ="images/testimonials/member1.png"
    boxText.textContent = "My experience with the Flipmart company has been very amazing, and still plan on using the app for the purchase for my groceries "
    boxTextTwo.textContent = "Grey Voss"
    boxTextTwo.style.fontWeight = "bold"
    boxBackgroundOne.style.backgroundColor = "#0F6CB2"
    boxBackgroundTwo.style.backgroundColor = "#c7c6c6"
    boxBackgroundThree.style.backgroundColor = "#c7c6c6"
}
function secondImage(){
    boxImage.src ="images/testimonials/member2.png"
    boxText.textContent = "I've been working with the fet company for a few years and it's been a very amazing experience throughout the years"
    boxTextTwo.textContent = "Maghra Eric"
    boxTextTwo.style.fontWeight = "bold";
    boxBackgroundTwo.style.backgroundColor = "#0F6CB2"
    boxBackgroundOne.style.backgroundColor = " #c7c6c6"
    boxBackgroundThree.style.backgroundColor = "#c7c6c6"
}
function thirdImage(){
    boxImage.src ="images/testimonials/member3.png"
    boxText.textContent = "It's been amazing purchasing my groceries and electronics all from the comfort of my couch,and I'd highly recommend Flipmart to anyone"
    boxTextTwo.textContent = "Harlan jun"
    boxTextTwo.style.fontWeight = "bold"
    boxBackgroundThree.style.backgroundColor = "#0F6CB2"
    boxBackgroundOne.style.backgroundColor = " #c7c6c6"
    boxBackgroundTwo.style.backgroundColor = "#c7c6c6"
}
let listContainer = document.getElementById("list_container")
let gridContainer = document.getElementById("grid_container")
function changeGridToList(){
    gridContainer.style.display = "none"
    listContainer.style.display = "block"
}
function changeListToGrid(){
    gridContainer.style.display = "block"
    listContainer.style.display = "none"
}



let productBox = document.getElementById("productBoxes")
let productBoxText = document.getElementById("productBoxText")
function addHover(){
    productBox.style.backgroundColor ="#0F6CB2"
    productBoxText.style.color = "#fff"
}
function removeHover(){
    productBox.style.backgroundColor ="#F3F3F3"
    productBoxText.style.color = "#4d4d4d"
}
let productBox1 = document.getElementById("productBoxes1")
let productBoxText1 = document.getElementById("productBoxText1")
function addHoverOne(){
    productBox1.style.backgroundColor ="#0F6CB2"
    productBoxText1.style.color = "#fff"
}
function removeHoverOne(){
    productBox1.style.backgroundColor ="#F3F3F3"
    productBoxText1.style.color = "#4d4d4d"
}
let productBox2 = document.getElementById("productBoxes2")
let productBoxText2 = document.getElementById("productBoxText2")
function addHoverTwo(){
    productBox2.style.backgroundColor ="#0F6CB2"
    productBoxText2.style.color = "#fff"
}
function removeHoverTwo(){
    productBox2.style.backgroundColor ="#F3F3F3"
    productBoxText2.style.color = "#4d4d4d"
}

let productBox3 = document.getElementById("productBoxes3")
let productBoxText3 = document.getElementById("productBoxText3")
function addHoverThree(){
    productBox3.style.backgroundColor ="#0F6CB2"
    productBoxText3.style.color = "#fff"
}
function removeHoverThree(){
    productBox3.style.backgroundColor ="#F3F3F3"
    productBoxText3.style.color = "#4d4d4d"
}

let productBox4 = document.getElementById("productBoxes4")
let productBoxText4 = document.getElementById("productBoxText4")
function addHoverFour(){
    productBox4.style.backgroundColor ="#0F6CB2"
    productBoxText4.style.color = "#fff"
}
function removeHoverFour(){
    productBox4.style.backgroundColor ="#F3F3F3"
    productBoxText4.style.color = "#4d4d4d"
}

let productBox5 = document.getElementById("productBoxes5")
let productBoxText5 = document.getElementById("productBoxText5")
function addHoverFive(){
    productBox5.style.backgroundColor ="#0F6CB2"
    productBoxText5.style.color = "#fff"
}
function removeHoverFive(){
    productBox5.style.backgroundColor ="#F3F3F3"
    productBoxText5.style.color = "#4d4d4d"
}

let home = document.getElementById("navHome");
let homeText = document.getElementById("hometext");
function homeHover(){
    home.style.backgroundColor ="#F3F3F3"
    homeText.style.color = "#8B8B8B"
    home.style.cursor = "pointer"
}
function normalHome(){
    home.style.backgroundColor = "#085B9A"
    homeText.style.color = "#fff"
}

let clothing = document.getElementById("navClothing")
let clothingText = document.getElementById("clothingText")
function clothingHover(){
    clothing.style.backgroundColor = "#F3F3F3"
    clothingText.style.color = "#8B8B8B"
    clothing.style.cursor = "pointer"
}
function normalClothing(){
    clothing.style.backgroundColor = "#0F6CB2"
    clothingText.style.color = "#fff"
}

let electronics = document.getElementById("navElectronics")
let electronicsText = document.getElementById("electronicsText")
function electronicsHover(){
    electronics.style.backgroundColor = "#F3F3F3"
    electronicsText.style.color = "#8B8B8B"
    electronics.style.cursor = "pointer"
}
function normalElectronics(){
    electronics.style.backgroundColor = "#0F6CB2"
    electronicsText.style.color = "#fff"
}

let health = document.getElementById("navHealth")
let healthText = document.getElementById("healthText")
function healthHover(){
    health.style.backgroundColor = "#F3F3F3"
    healthText.style.color = "#8B8B8B"
    health.style.cursor = "pointer"
}
function normalHealth(){
    health.style.backgroundColor = "#0F6CB2"
    healthText.style.color = "#fff"
}

let watches = document.getElementById ("navWatches")
let watchesText = document.getElementById("watchesText")
function watchesHover(){
    watches.style.backgroundColor = "#F3F3F3"
    watchesText.style.color = "#8B8B8B"
    watches.style.cursor = "pointer"
}
function normalWatches(){
    watches.style.backgroundColor = "#0F6CB2"
    watchesText.style.color = "#fff"
}

let jewellery = document.getElementById("navJewellery")
let jewelleryText = document.getElementById("jeweleryText")
function jewelleryHover(){
    jewellery.style.backgroundColor = "#F3F3F3"
    jewelleryText.style.color = "#8B8B8B"
    jewellery.style.cursor = "pointer"
}
function normalJewellery(){
    jewellery.style.backgroundColor = "#0F6CB2"
    jewelleryText.style.color = "#fff"
}

let shoes = document.getElementById("navShoes")
let shoesText = document.getElementById("shoesText")
function shoesHover(){
    shoes.style.backgroundColor = "#F3F3F3"
    shoesText.style.color = "#8B8B8B"
    shoes.style.cursor = "pointer"
}
function normalShoes(){
    shoes.style.backgroundColor = "#0F6CB2"
    shoesText.style.color = "#fff"
}

let kids = document.getElementById("navkids")
let kidsText = document.getElementById("kidsText")
function kidsHover(){
    kids.style.backgroundColor = "#F3F3F3"
    kidsText.style.color = "#8B8B8B"
    kids.style.cursor = "pointer"
}
function normalkids(){
    kids.style.backgroundColor = "#0F6CB2"
    kidsText.style.color = "#fff"
}


let pages = document.getElementById("navPages")
let pagesText = document.getElementById("pagesText")
function pagesHover(){
    pages.style.backgroundColor = "#F3F3F3"
    pagesText.style.color = "#8B8B8B"
    pages.style.cursor = "pointer"
}
function normalPages(){
    pages.style.backgroundColor = "#0F6CB2"
    pagesText.style.color = "#fff"
}