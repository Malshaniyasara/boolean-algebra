$(document).ready(function() {
    $("#contact-form").submit(function(event) {
        event.preventDefault();
        
        const formData = $(this).serializeArray();
        console.log("Form Data:", formData);
        alert("Message sent successfully!");

    });
});



