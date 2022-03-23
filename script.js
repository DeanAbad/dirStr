let strBox = document.getElementById("strBox1")
let dirBox = document.getElementById("dirBox1")

let ifoBtn = document.getElementById("info")
let ifoSpn = document.getElementById("infoSpan")
let ifoRnt = document.getElementById("rantBtn")
let ifoLst = document.getElementById("rantLst")

let opeRnt = false

const rgex = new RegExp("^(.+)\/([^\/]+)$")
let txtgex = ""

function _convert(fromTo) {
    if (fromTo == "strdir") {
        strBox = document.getElementById("strBox1")
        dirBox = document.getElementById("dirBox1")

        if (strBox.textLength == 0) { alert("Field is empty!\nPlease enter a string.") }
        else {
            txtgex = encodeURI(strBox.value)
            if (txtgex.match(rgex) != null) {
                dirBox.value = txtgex
            } else {
                alert("Invalid input!\nPlease enter a valid string.\n\nExamples:\nC:/The Cool User/Awesome Games\nC:/The Cool User/Awesome Games/Hell Tycoon.exe\n\nFor help, kindly check the Info section.")
            }
        }
    } else if (fromTo == "dirstr") {
        strBox = document.getElementById("strBox2")
        dirBox = document.getElementById("dirBox2")

        if (dirBox.textLength == 0) { alert("Field is empty!\nPlease enter a directory.") }
        else {
            txtgex = decodeURI(dirBox.value)
            if (txtgex.match(rgex) != null) {
                strBox.value = txtgex
            } else {
                alert("Invalid input!\nPlease enter a valid directory.\n\nExamples:\nC:/The%20Cool%20User/Awesome%20Games\nC:/The%20Cool%20User/Awesome%20Games/Hell%20Tycoon.exe\n\nFor help, kindly check the Info section.")
            }
        }
    } else {
        return
    }
}

function _info(toggle) {
    if (toggle == 'open') { ifoSpn.style.display = "block" }
    else if (toggle == 'quit') { ifoSpn.style.display = "none" }
    else { return }
}

function _toggle() {
    opeRnt = !opeRnt
    if (opeRnt == true) {
        ifoRnt.innerText = "▼ Rants"
        ifoLst.style.display = "block"
    } else {
        ifoRnt.innerText = "► Rants"
        ifoLst.style.display = "none"
    }
}