let chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
,"r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K"
,"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",1,2,3,4,5,6,7,8,9,
0]
let specialChar = ["!","@","#","$","%","^","&","*"]
let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")
let password3 = document.getElementById("password-3")
let password4 = document.getElementById("password-4")
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
const specialSelect = document.querySelector("#accept")

//Generates passwords and resets the already generated passwords
function generatePasswords() {
    let passwordLength = slider.value
    password1.value = ""
    password2.value = ""
    password3.value = ""
    password4.value = ""
    if (specialSelect.checked === true) {
        chars.push(...specialChar)
    }
    else if (specialSelect.checked === false) {
        chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
        ,"r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K"
        ,"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",1,2,3,4,5,6,7,8,9,
        0]
    }
    for (let i = 0; i < passwordLength; i++) {
        password1.value += randomizeChar()
        password2.value += randomizeChar()
        password3.value += randomizeChar()
        password4.value += randomizeChar()
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

function copyPassword(i) {
    let copyText = document.getElementById(`password-${1}`);
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }

