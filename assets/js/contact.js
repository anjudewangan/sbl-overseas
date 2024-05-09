const form = document.getElementById("contact_form");

function sendMessage(e) {
    e.preventDefault();

    const name = document.getElementById("input_name");
    const email = document.getElementById("input_email");
    const product = document.getElementById("input_product");
    const location = document.getElementById("input_location");
    const phone_number = document.getElementById("input_phone_number");
    const message = document.getElementById("input_message");

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "icas.qcin@gmail.com",
        Password: "E1EADB76E913611E731E47305C0E20D32636",
        To: email.value,
        From: "icas.qcin@gmail.com",
        Subject: "Contact Form",
        Body: "Name: " + name.value + "<br>" + "Email: " + email.value + "<br>" + "Product: " + product.value + "<br>" + "Location: " + location.value + "<br>" + "Phone Number: " + phone_number.value + "<br>" + "Message: " + message.value
    }).then(
        message => alert(message)
    );
}

form.addEventListener('submit', sendMessage);