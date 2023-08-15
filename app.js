

let show = document.querySelector(".displayInput") //for show input and output
let holddata = "" //hold the data

let dot = document.querySelector("#dot").name //select button .
let plus = document.querySelector("#plus").name //select button +
let minus = document.querySelector("#minus").name //select button -
let multiply = document.querySelector("#multiply").name //select button *
let devide = document.querySelector("#devide").name //select button /


















// -------------------take numbers---------------
function displayInput1() {  //for 1
    let one = document.querySelector("#one").name //select button 1
    holddata = holddata + one
    show.value = holddata
}
function displayInput2() {   //for 2
    let two = document.querySelector("#two").name //select button 2
    holddata = holddata + two
    show.value = holddata
}

function displayInput3() {   //for 3
    let three = document.querySelector("#three").name //select button 3
    holddata = holddata + three
    show.value = holddata
}

function displayInput4() {   //for 4
    let four = document.querySelector("#four").name //select button 4
    holddata = holddata + four
    show.value = holddata
}

function displayInput5() {   //for 5
    let five = document.querySelector("#five").name //select button 5
    holddata = holddata + five
    show.value = holddata
}

function displayInput6() {   //for 6
    let six = document.querySelector("#six").name //select button 6
    holddata = holddata + six
    show.value = holddata
}

function displayInput7() {   //for 7
    let seven = document.querySelector("#seven").name //select button 7
    holddata = holddata + seven
    show.value = holddata
}

function displayInput8() {   //for 8
    let eight = document.querySelector("#eight").name //select button 8
    holddata = holddata + eight
    show.value = holddata
}

function displayInput9() {   //for 9
    let nine = document.querySelector("#nine").name //select button 9
    holddata = holddata + nine
    show.value = holddata
}

function displayInput0() {   //for 0
    let zero = document.querySelector("#zero").name //select button 0
    holddata = holddata + zero
    show.value = holddata
}

function displayInput00() {   //for 00
    let dzero = document.querySelector("#dzero").name //select button 00
    holddata = holddata + dzero
    show.value = holddata
}

function displayInputdot() {   //add . with data
    holddata = holddata + dot
    show.value = holddata
}

// ---------------------------------------

function displayInputplus() { // add + with data
    holddata = holddata + plus
    show.value = holddata
}

function displayInputminus() { // add - with data
    holddata = holddata + minus
    show.value = holddata
}

function displayInputmultiply() { // add * with data
    holddata = holddata + multiply
    show.value = holddata
}

function displayInputdevide() { // add / with data
    holddata = holddata + devide
    show.value = holddata
}

// ----------------------------------------------
function Reasult() {           //reasult
    holddata = eval(holddata)
    show.value = holddata
    // holddata=reasult
}

function del() {     //delete
    holddata = ""
    show.value = holddata
}
function ac() {     //for backspace
    let remove = show.value
    remove = remove.slice(0, -1); //remove last character from a string
    console.log(holddata)
    show.value = remove
    holddata = remove;
}

// -----------------------darkmode-------------
let i = 0
function darkmode() {

    if (i === 0) {
        // document.body.style.backgroundImage=" linear-gradient(to right,#D3CCE3,#E9E4F0)"
        document.querySelector(".calculator").style.backgroundColor = "#E0EAFC"
        document.querySelector(".displayInput").style.backgroundColor = "black"
        document.querySelector(".displayInput").style.color = "white"
        document.querySelector(".name").style.color = "black"
        document.querySelector("#dot").style.color = "green"
        document.querySelector("#dot").style.boxShadow = "-8px -8px 28px white,15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#plus").style.color = "green"
        document.querySelector("#plus").style.boxShadow = "-8px -8px 28px white,15px 5px 25px rgba(0,0,0,0.2)"
        document.querySelector("#minus").style.color = "green"
        document.querySelector("#minus").style.boxShadow = "-8px -8px 28px white,15px 5px 25px rgba(0,0,0,0.2)"
        document.querySelector("#multiply").style.color = "green"
        document.querySelector("#multiply").style.boxShadow = "-8px -8px 28px white,15px 5px 25px rgba(0,0,0,0.2)"
        document.querySelector("#devide").style.color = "green"
        document.querySelector("#devide").style.boxShadow = "-8px -8px 28px white,15px 5px 25px rgba(0,0,0,0.2)"
        document.querySelector("#one").style.color = "black"
        document.querySelector("#one").style.boxShadow = "-8px -8px 28px white,15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#two").style.color = "black"
        document.querySelector("#two").style.boxShadow = "-8px -8px 28px white,15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#three").style.color = "black"
        document.querySelector("#three").style.boxShadow = "-8px -8px 28px white,15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#four").style.color = "black"
        document.querySelector("#four").style.boxShadow = "-8px -8px 28px white,15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#five").style.color = "black"
        document.querySelector("#five").style.boxShadow = "-8px -8px 28px white,15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#six").style.color = "black"
        document.querySelector("#six").style.boxShadow = "-8px -8px 28px white,15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#seven").style.color = "black"
        document.querySelector("#seven").style.boxShadow = "-8px -8px 28px white,15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#eight").style.color = "black"
        document.querySelector("#eight").style.boxShadow = "-8px -8px 28px white,15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#nine").style.color = "black"
        document.querySelector("#nine").style.boxShadow = "-8px -8px 28px white,15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#zero").style.color = "green"
        document.querySelector("#zero").style.boxShadow = "-8px -8px 28px white,15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#dzero").style.color = "green"
        document.querySelector("#dzero").style.boxShadow = "-8px -8px 28px white,15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#equalTo").style.color = "green"
        document.querySelector("#equalTo").style.boxShadow = "-8px -8px 28px white,15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#ac").style.color = "green"
        document.querySelector("#ac").style.boxShadow = "-8px -8px 28px white,15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#del").style.color = "green"
        document.querySelector("#del").style.boxShadow = "-8px -8px 28px white,15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#dark").innerHTML = `<i class="fa-solid fa-moon fa-lg"></i>`
        document.querySelector("#dark").style.color = "green"
        document.querySelector("#dark").style.boxShadow = "-8px -8px 28px white,15px 5px 18px rgba(0,0,0,0.2)"
        document.querySelector("button").style.boxShadow = "-8px -8px 28px white,15px 5px 8px rgba(0,0,0,0.2)"
        i = i + 1
    }
    else {
        // document.body.style.backgroundImage=" linear-gradient(to right,#44A08D,#093637)"
        document.querySelector(".calculator").style.backgroundColor = " #283E51"
        document.querySelector(".displayInput").style.backgroundColor = "black"
        document.querySelector(".displayInput").style.color = "white"
        document.querySelector(".name").style.color = "white"
        document.querySelector("#dot").style.color = "aqua"
        document.querySelector("#dot").style.boxShadow = "-8px -8px 18px rgba(255,255,255,0.1),15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#plus").style.color = "aqua"
        document.querySelector("#plus").style.boxShadow = "-8px -8px 18px rgba(255,255,255,0.1),15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#minus").style.color = "aqua"
        document.querySelector("#minus").style.boxShadow = "-8px -8px 18px rgba(255,255,255,0.1),15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#multiply").style.color = "aqua"
        document.querySelector("#multiply").style.boxShadow = "-8px -8px 18px rgba(255,255,255,0.1),15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#devide").style.color = "aqua"
        document.querySelector("#devide").style.boxShadow = "-8px -8px 18px rgba(255,255,255,0.1),15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#one").style.color = "white"
        document.querySelector("#one").style.boxShadow = "-8px -8px 18px rgba(255,255,255,0.1),15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#two").style.color = "white"
        document.querySelector("#two").style.boxShadow = "-8px -8px 18px rgba(255,255,255,0.1),15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#three").style.color = "white"
        document.querySelector("#three").style.boxShadow = "-8px -8px 18px rgba(255,255,255,0.1),15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#four").style.color = "white"
        document.querySelector("#four").style.boxShadow = "-8px -8px 18px rgba(255,255,255,0.1),15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#five").style.color = "white"
        document.querySelector("#five").style.boxShadow = "-8px -8px 18px rgba(255,255,255,0.1),15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#six").style.color = "white"
        document.querySelector("#six").style.boxShadow = "-8px -8px 18px rgba(255,255,255,0.1),15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#seven").style.color = "white"
        document.querySelector("#seven").style.boxShadow = "-8px -8px 18px rgba(255,255,255,0.1),15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#eight").style.color = "white"
        document.querySelector("#eight").style.boxShadow = "-8px -8px 18px rgba(255,255,255,0.1),15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#nine").style.color = "white"
        document.querySelector("#nine").style.boxShadow = "-8px -8px 18px rgba(255,255,255,0.1),15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#zero").style.color = "aqua"
        document.querySelector("#zero").style.boxShadow = "-8px -8px 18px rgba(255,255,255,0.1),15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#dzero").style.color = "aqua"
        document.querySelector("#dzero").style.boxShadow = "-8px -8px 18px rgba(255,255,255,0.1),15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#equalTo").style.color = "aqua"
        document.querySelector("#equalTo").style.boxShadow = "-8px -8px 18px rgba(255,255,255,0.1),15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#ac").style.color = "aqua"
        document.querySelector("#ac").style.boxShadow = "-8px -8px 18px rgba(255,255,255,0.1),15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#del").style.color = "aqua"
        document.querySelector("#del").style.boxShadow = "-8px -8px 18px rgba(255,255,255,0.1),15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("#dark").innerHTML = `<span class="material-symbols-outlined">
        light_mode
        </span>`
        document.querySelector("#dark").style.color = "aqua"
        document.querySelector("#dark").style.boxShadow = "-8px -8px 18px rgba(255,255,255,0.1),15px 5px 8px rgba(0,0,0,0.2)"
        document.querySelector("button").style.boxShadow = "-8px -8px 18px rgba(255,255,255,0.1),15px 5px 8px rgba(0,0,0,0.2)"
        i = 0
    }
}
