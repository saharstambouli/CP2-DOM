console.log('hello')

//import elements

var plsBtn = document.querySelectorAll('.increment')
console.log('plus', plsBtn)
var minBtn = document.querySelectorAll('.decriment')
console.log('moins', minBtn)
var quantity = document.querySelectorAll('.quantity')
console.log('quantity', quantity)

var unitPrice = document.querySelectorAll('.price')
console.log('unitprice', unitPrice)
var totalPrice = document.querySelector('.total-price')

//increment quantity

for (let i = 0; i < plsBtn.length; i++) {
    plsBtn[i].addEventListener('click', () => {
        // console.log('type input value', typeof quantity[i].value) //type string
        //convert input value from string to number
        var qunt = Number(quantity[i].value)
        console.log('type qunt', typeof qunt) //type number
        quantity[i].value = qunt + 1

        tot = Number(totalPrice.value)
        unit = Number(unitPrice[i].innerHTML)
        totalPrice.value = tot + unit
    })
}

//Derement quantity

for (let i = 0; i < minBtn.length; i++) {

    minBtn[i].addEventListener('click', () => {

        if (quantity[i].value > 0) {
            console.log('type input value', typeof quantity[i].value) //type string
            //convert input value from string to number
            var qunt = Number(quantity[i].value)
            console.log('type qunt', typeof qunt) //type number
            quantity[i].value = qunt - 1


            tot = Number(totalPrice.value)
            unit = Number(unitPrice[i].innerHTML)
            totalPrice.value = tot - unit

        }

    })

}


//DeLETE

var dlt = document.querySelectorAll('.delete')
console.log('delete', dlt)

for (let i = 0; i < dlt.length; i++) {
    dlt[i].addEventListener('click', () => {
        dlt[i].parentElement.parentElement.parentElement.remove()
        tot = Number(totalPrice.value)
        unit = Number(unitPrice[i].innerHTML)
        totalPrice.value = tot - unit*Number(quantity[i].value)


    })

}

// Heart


var heart = document.querySelectorAll('.heart');
for (let i = 0; i < heart.length; i++) {

    heart[i].addEventListener('click', () => {

        if (heart[i].style.color === "black") {

            heart[i].style.color = "red";
        }


        else {

            heart[i].style.color = "black";

        }

    })

}





















/* 
//import elements

var plsBtn = document.querySelectorAll('.increment')
console.log('plsBtn', plsBtn)

var minBtn = document.querySelectorAll('.decriment')
console.log('minBtn',minBtn)

var quantity = document.querySelectorAll('.quantity')
console.log('quantity' , quantity)
//acced to quantity value
console.log('quantity', quantity[0].value)


//increment quantity

for (let i = 0; i < plsBtn.length; i++) {
    plsBtn[i].addEventListener('click',()=>{
        console.log('type input value', typeof quantity[i].value) //type string
        //convert input value from string to number
        var qunt = Number(quantity[i].value)
        console.log('type qunt', typeof qunt) //type number
        quantity[i].value = qunt+ 1
    })
    
}


//decrement quantity
for (let i = 0; i < minBtn.length; i++) {
    minBtn[i].addEventListener('click',()=>{
        console.log('type input value', typeof quantity[i].value) //type string
        //convert input value from string to number
        var qunt = Number(quantity[i].value)
        console.log('type qunt', typeof qunt) //type number

        if(qunt > 0){
            quantity[i].value = qunt - 1
        }
    })

}
 */