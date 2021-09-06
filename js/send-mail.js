
function sendEmail(){
    var userName = document.getElementById("name").value
    var userEmail = document.getElementById("mail").value
    var userSubject = document.getElementById("mailSubject").value
    var userMailBody = document.getElementById("mailBody").value
    

    Email.send({
        Host : "smtp.gmail.com",
        Username : "",
        Password : "",
        To : '',
        From : userEmail,
        Subject : userSubject,
        Body : userMailBody
})
            .then(function(message) {
                 alert("mail sent successfully")
            });
}