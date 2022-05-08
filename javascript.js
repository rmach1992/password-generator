let chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
,"r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K"
,"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",1,2,3,4,5,6,7,8,9,
0,"!","@","#","$","%","^","&","*","(",")"]
let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")
let password3 = document.getElementById("password-3")
let password4 = document.getElementById("password-4")
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");

//Generates passwords and resets the already generated passwords
function generatePasswords() {
    let passwordLength = slider.value
    password1.textContent = ""
    password2.textContent = ""
    password3.textContent = ""
    password4.textContent = ""
    for (let i = 0; i < passwordLength; i++) {
        password1.textContent += randomizeChar()
        password2.textContent += randomizeChar()
        password3.textContent += randomizeChar()
        password4.textContent += randomizeChar()
    }
}

//Select random character from chars array
function randomizeChar() {
    return chars[Math.floor(Math.random() * chars.length)]
}

//Function for slider functionality
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}

//stretch: 1-click copy password to the clipboard (hint: use <input type="text"> to display the password options)