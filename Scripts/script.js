let popup = document.getElementById("popup");

function get_email() {
    let email = document.getElementById("textoInput").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let popup = document.getElementById('popup');
    let container = document.getElementsByClassName("content_placement")

    if (email.trim() === "") {
        document.getElementById("textoInput").style.borderColor = 'hsl(4, 100%, 67%)';
        alert("¡Por favor ingresa un correo electrónico primero!");
    } 
    else if (!emailRegex.test(email)) {
        document.getElementById("textoInput").style.borderColor = 'hsl(4, 100%, 67%)';
        alert("¡Por favor ingresa un correo electrónico válido!");
    }
    else {
        alert("El Correo Ingresado es: " + email);
        popup.classList.add('open-popup');
        let confirmationMessage = document.getElementById("confirmation_mssg");

        confirmationMessage.textContent = "A confirmation email has been sent to "+email+" Please open it and click the button inside to confirm your subscription.";
    }
}

function closePop() {
    popup.classList.remove('open-popup');
}





