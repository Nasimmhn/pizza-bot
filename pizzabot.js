// functions
const gotoNext = () => {

    if (document.getElementById("first").style.display === "block") {
        document.getElementById("first").style.display = "none"
        document.getElementById("second").style.display = "block"
        document.getElementById("back_btn").style.display = "inline-block"
        document.getElementById("next_btn").disabled = true
    } else if (document.getElementById("second").style.display === "block") {
        document.getElementById("second").style.display = "none"
        document.getElementById("third").style.display = "block"
        document.getElementById("next_btn").disabled = true
    } else if (document.getElementById("third").style.display === "block") {
        document.getElementById("third").style.display = "none"
        document.getElementById("fourth").style.display = "block"
        document.getElementById("next_btn").style.display = "none"
        document.getElementById("back_btn").innerHTML = "Restart"
    }
};

const gotoPrevious = () => {
    document.getElementById("next_btn").disabled = false

    if (document.getElementById("second").style.display === "block") {
        document.getElementById("second").style.display = "none"
        document.getElementById("first").style.display = "block"
        document.getElementById("back_btn").style.display = "none"
    } else if (document.getElementById("third").style.display === "block") {
        document.getElementById("third").style.display = "none"
        document.getElementById("second").style.display = "block"
    } else if (document.getElementById("fourth").style.display === "block") {
        document.getElementById("fourth").style.display = "none"
        document.getElementById("first").style.display = "block"
        document.getElementById("next_btn").style.display = "inline-block"
        document.getElementById("back_btn").innerHTML = "Back"
        document.getElementById("back_btn").style.display = "none"
    }
}

const getOrderName = () => {
    let orderName = document.querySelector('input[name="pizzaChoice"]:checked').value
    document.getElementById("pizzaChoice").innerHTML = orderName
    document.getElementById("next_btn").disabled = false
}

const getConfirmation = () => {
    let orderName = document.querySelector('input[name="pizzaChoice"]:checked').value
    let orderQuantity = document.querySelector('input[name="numberOrdered"]:checked').value
    document.getElementById("next_btn").disabled = false
    let totalPrice = orderQuantity * pizzaPrice
    let cookingTime = getCookingTime(orderQuantity)
    fourth.innerHTML = `<h3>Great, I'll get started on your ${orderName}  
                        right away,  it will cost  ${totalPrice} kr and will 
                        take ${cookingTime} minutes</h3>
                        <img src="assets/time.png">`
}

const getCookingTime = (orderQuantity) => {
    if (orderQuantity <= 2) {
        return 10
    } else if (orderQuantity >= 6) {
        return 20
    } else {
        return 15
    }
}

// constants
const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"
const pizzaPrice = 80

let next_btn = document.getElementById("next_btn")
let back_btn = document.getElementById("back_btn")

// Radio inputs
let radio_vegetarian = document.getElementById("vegetarian")
let radio_hawaiian = document.getElementById("hawaiian")
let radio_pepperoni = document.getElementById("pepperoni")


// Connecting functions to buttons
next_btn.addEventListener("click", gotoNext)
back_btn.addEventListener("click", gotoPrevious)

radio_vegetarian.addEventListener("click", getOrderName)
radio_hawaiian.addEventListener("click", getOrderName)
radio_pepperoni.addEventListener("click", getOrderName)

document.getElementById("btn1").addEventListener("click", getConfirmation)
document.getElementById("btn2").addEventListener("click", getConfirmation)
document.getElementById("btn3").addEventListener("click", getConfirmation)
document.getElementById("btn4").addEventListener("click", getConfirmation)
document.getElementById("btn5").addEventListener("click", getConfirmation)
document.getElementById("btn6").addEventListener("click", getConfirmation)
document.getElementById("btn7").addEventListener("click", getConfirmation)
document.getElementById("btn8").addEventListener("click", getConfirmation)
document.getElementById("btn9").addEventListener("click", getConfirmation)
document.getElementById("btn10").addEventListener("click", getConfirmation)


// Starts when loading page
document.getElementById("first").style.display = "block"
document.getElementById("second").style.display = "none"
document.getElementById("third").style.display = "none"
document.getElementById("fourth").style.display = "none"
document.getElementById("back_btn").style.display = "none"

let first = document.getElementById("first")
document.getElementById("first").innerHTML = `<h1>Hey! Happy to serve your pizza</h1>
                                              <h3>On our menu we have:</h3> 
                                              ${vegetarian}<br>
                                              ${hawaiian}<br>
                                              ${pepperoni}`