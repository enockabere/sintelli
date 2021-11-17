// Set the date we're counting down to
var countDownDate = new Date("Dec 7, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("d_day").innerHTML = days
    document.getElementById("d_hour").innerHTML = hours
    document.getElementById("d_min").innerHTML = minutes
    document.getElementById("d_sec").innerHTML = seconds

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("d_day").innerHTML = "EXPIRED";
        document.getElementById("d_hour").innerHTML = "EXPIRED";
        document.getElementById("d_min").innerHTML = "EXPIRED";
        document.getElementById("d_sec").innerHTML = "EXPIRED";
    }
}, 1000);

// function sendEmail() {
//     var name = document.getElementById('username').value;
//     var email = document.getElementById('email').value;
//     var subject = document.getElementById('subject').value;
//     var body = document.getElementById('body').value;
//     Email.send({
//             Host: "smtp.gmail.com",
//             Username: "maebaenock95@gmail.com",
//             Password: "",
//             To: "",
//             From: "hypertextassassin3@gmail.com",
//             Subject: "Quote",
//             Body: "Requesting Quote man",
//         })
//         .then(function (message) {
//             alert("mail sent successfully")
//         });
// }