$ = document
const firstValue = $.querySelector(".c")
const secondValue = $.querySelector(".f")

let h1Elem = $.querySelector(".h1Converter")
let inputElem = $.querySelector(".input")
let answer = $.querySelector(".answer")
let convert = $.querySelector(".Convert")
let reset = $.querySelector(".Reset")
let change = $.querySelector(".Change")


change.addEventListener('click', function(){
     console.log("ok")
    if(h1Elem.innerHTML == "Converter °C to °F"){
    h1Elem.innerHTML = "Converter °F to °C"
    inputElem.setAttribute('placeholder' , "°F")
    }else {
        h1Elem.innerHTML = "Converter °C to °F"
        inputElem.setAttribute('placeholder' , "°C")
    }


    
})
reset.addEventListener('click', function(){
    // console.log("ok")
    inputElem.value = ''
    if(inputElem.value === ''){
        answer.innerHTML = "لطفا عدد را وارد کنید "  
    }
})



inputElem.addEventListener('keyup', function(){
  

      
    if(inputElem.value === ''){
        answer.innerHTML = "لطفا عدد را وارد کنید "  
    }else if(h1Elem.innerHTML == "Converter °F to °C"){
        answer.innerHTML = (inputElem.value - 32) * 5 / 9 
    }
    else{
    answer.innerHTML = inputElem.value * 9 / 5 + 32
    }



  // Swal.fire({
    //     icon:"success",
    //     title:"oops...",
    //     text:"click input!!!",
    //     });

  
})