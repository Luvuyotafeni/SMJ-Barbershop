const d = new Date();
document.getElementById('demo').innerHTML = 'Copyright ' + d.getFullYear();

// Get the button
var scrollButton = document.getElementById("scrollButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

// Scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

function bookAppointment() {
    var nameInput = document.getElementById('name');
    var surnameInput = document.getElementById('surname');
    var emailInput = document.getElementById('email');
    var addressInput = document.getElementById('address');
    var appointmentDateInput = document.getElementById('appointmentDate');
    var numberInput = document.getElementById('number'); // Corrected variable name

    // Check if any of the required fields are empty
    if (nameInput.value === '' || surnameInput.value === '' || emailInput.value === '' || addressInput.value === '' || appointmentDateInput.value === '' || numberInput.value === '') {
        alert('Please fill in all required fields.');
        return;
    }

    // Validate Name (allow only A-Z characters)
    var name = nameInput.value.trim();
    if (!/^[A-Za-z]+$/.test(name)) {
        alert('Please enter a valid name.');
        nameInput.focus();
        return;
    }

    // Validate Surname (allow only A-Z characters)
    var surname = surnameInput.value.trim();
    if (!/^[A-Za-z]+$/.test(surname)) {
        alert('Please enter a valid surname.');
        surnameInput.focus();
        return;
    }

    // Validate Email using regex
    var email = emailInput.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
    }

    // Validate Phone Number
    var phoneNumber = numberInput.value.trim();
    var phoneNumberRegex = /^0[678]\d{8}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
        alert('Please enter a valid phone number.');
        numberInput.focus();
        return;
    }

    // If all validation passes, you can submit the form or take further action
    let params = {
        name: name,
        email: email,
        appointmentDate: appointmentDateInput.value,
        address: addressInput.value,
    };

    emailjs.send("service_nyt6frj", "template_2c0id7m", params) // Replace "user_your_user_id" with your actual user ID
        .then(
            function (response) {
                console.log("Email sent successfully:", response);
                alert("Email sent successfully!");
            },
            function (error) {
                console.log("Email sending failed:", error);
                alert("Email sending failed. Please try again later.");
            }
        );
}
