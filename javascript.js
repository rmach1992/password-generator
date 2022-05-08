let chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
,"r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K"
,"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",1,2,3,4,5,6,7,8,9,
0,"!","@","#","$","%","^","&","*","(",")"]

//button to generate 4 random password options
//display password options
//stretch: ability to set the password left
//stretch: 1-click copy password to the clipboard (hint: use <input type="text"> to display the password options)

let passwordLength = 16
let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")
let password3 = document.getElementById("password-3")
let password4 = document.getElementById("password-4")

function generatePasswords() {
    for (let i = 0; i < passwordLength; i++) {
        password1.textContent += randomizeChar()
        password2.textContent += randomizeChar()
        password3.textContent += randomizeChar()
        password4.textContent += randomizeChar()
    }
}

function randomizeChar() {
    return chars[Math.floor(Math.random() * chars.length)]
}