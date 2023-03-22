function encrypt() {
    let message = document.getElementById("message").value;
    let shift = parseInt(document.getElementById("shift").value);

    shift = ((shift % 26) + 26) % 26; // Đảm bảo shift nằm trong khoảng từ 0 đến 25

    let encrypted = "";

    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            // chữ hoa
            charCode = ((charCode - 65 + shift) % 26) + 65;
        }
        else if (charCode >= 97 && charCode <= 122) {
            // chữ thường
            charCode = ((charCode - 97 + shift) % 26) + 97;
        }

        encrypted += String.fromCharCode(charCode);
    }

    document.getElementById("result").innerHTML = encrypted;
}

function decrypt() {
    let message = document.getElementById("message").value;
    let shift = parseInt(document.getElementById("shift").value);

    shift = ((shift % 26) + 26) % 26; // Đảm bảo shift nằm trong khoảng từ 0 đến 25

    let decrypted = "";

    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            // uppercase letters
            charCode = ((charCode - 65 - shift + 26) % 26) + 65;
        }
        else if (charCode >= 97 && charCode <= 122) {
            // lowercase letters
            charCode = ((charCode - 97 - shift + 26) % 26) + 97;
        }

        decrypted += String.fromCharCode(charCode);
    }

    document.getElementById("result").innerHTML = decrypted;
}

function displayShift() {
    let shift = parseInt(document.getElementById("shift").value);
    shift = ((shift % 26) + 26) % 26;

    let shiftChar = String.fromCharCode(shift + 97);
    let displayText = "a → " + shiftChar;

    document.getElementById("shift-display").innerHTML = displayText;
}

function checkInput() {
    const inputField = document.getElementById("message");
    const inputValue = inputField.value.trim();

    if (inputValue === "") {
        window.alert("nhập văn bản đi fen");
        inputField.focus();
        return false;
    }
    return true;
}

function increment() {
    let input = document.getElementById("shift");
    input.value = parseInt(input.value) + 1;
    displayShift() 
}

function decrement() {
    let input = document.getElementById("shift");
    input.value = parseInt(input.value) - 1;
    displayShift() 
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
