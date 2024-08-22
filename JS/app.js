// ANIMATION FOR LOGO
let logo = document.body.querySelector(".logo")
let logoParagraph = document.body.querySelector(".logoParagraph")


let firstP = document.createElement("p") // first paragraph element
firstP.textContent = "Made By"
firstP.style.color = "silver"
firstP.style.fontSize = "10px"

let secondP = document.createElement("p")
secondP.textContent = "Habib Ullah"
secondP.style.color = "white"

let div = document.createElement("div")
div.appendChild(firstP)
div.appendChild(secondP)

div.id = "dynamic_div"

logo.addEventListener("mouseenter", ()=> {
    logoParagraph.classList.toggle("hidden")
    logo.appendChild(div)
    
        const animatedElements = document.querySelectorAll('#dynamic_div');
        animatedElements.forEach(element => {
          element.classList.add('animate');
     })
    })


logo.addEventListener("mouseleave", ()=> {
    logoParagraph.classList.toggle("hidden")
    logo.removeChild(div)



})


// ANIMATION FOR PORTFOLIO BUTTON
let hireMeBtn = document.body.querySelector(".hireMe")

let arrowImg = document.createElement("img")
arrowImg.setAttribute("id", "arrowID") //Attributes
arrowImg.setAttribute("src","./Asset/Buttons/light.png")
arrowImg.style.height = "1.5rem"
arrowImg.style.transform = " rotate(-35deg)"

let portfoliobtn = document.body.querySelector("#portfolioBTN")
// portfoliobtn.addEventListener("click", ()=> console.log("portfolio btn clicked")) // was a test to ensure that the btn is selected

let img2 = portfoliobtn.firstElementChild

hireMeBtn.addEventListener("mouseenter", ()=> {    
    portfoliobtn.classList.toggle("bacgroundNone") 
    img2.classList.toggle("arrowRemove")
    hireMeBtn.classList.toggle("hireMeTransformation")
    hireMeBtn.appendChild(arrowImg)
})


hireMeBtn.addEventListener("mouseleave", ()=> {
    
    portfoliobtn.classList.toggle("bacgroundNone") 
    img2.classList.toggle("arrowRemove")
    hireMeBtn.classList.toggle("hireMeTransformation")
    hireMeBtn.removeChild(arrowImg)
})

// ANIMATIONS ON PROFILE IMG
let intro = document.body.querySelector(".intro")
let genAi = document.body.querySelector(".genAi")
let helloIntro = document.body.querySelector(".name-intro")
let hello = document.body.querySelector(".hello")
let profileImg = document.body.querySelector(".profileImg")
let ellipse = document.body.querySelector(".ellipse")
let senior = document.body.querySelector(".senior")


let art = document.createElement("img")
art.setAttribute("src","./Asset/hero_section/art_for_animation.png")
art.style.zIndex = "12"
art.style.position = "absolute"
art.classList.add("art_appearance")


ellipse.appendChild(art)


ellipse.addEventListener("mouseover", ()=> {

    intro.classList.toggle("slideAndHide")    
    genAi.classList.toggle("slideAndHide")  
    profileImg.classList.toggle("ProfileImgOpacity")  
    helloIntro.classList.toggle("name-intro-animation")
    hello.classList.toggle("hello-animation")
    art.classList.toggle("art_departure")
    senior.classList.toggle("senior-Animation")
})


ellipse.addEventListener("mouseout", ()=> {
    
    intro.classList.toggle("slideAndHide")    
    genAi.classList.toggle("slideAndHide")    
    profileImg.classList.toggle("ProfileImgOpacity")  
    helloIntro.classList.toggle("name-intro-animation")
    hello.classList.toggle("hello-animation")
    art.classList.toggle("art_departure")
    senior.classList.toggle("senior-Animation")
    
})

