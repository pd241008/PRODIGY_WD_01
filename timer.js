var countDownDate = new Date("Jun 5, 2022 15:37:25").getTime();
 
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


function shopNowClicked() {
    alert("Redirecting to the online store. Happy shopping!");
}


function contactUsClicked() {
    alert("Thank you for reaching out! We'll get in touch with you soon.");
}



function shopNowClicked() {
    window.location.href = "https://www.amazon.in/"; 
}

function contactUsClicked() {
    window.location.href = "https://github.com/pd241008"; 
}ou


function shopNowCollectionClicked(category) {
    window.location.href = "https://www.amazon.in/"; 
}





function contactUsClicked() {
    window.location.href = "https://github.com/pd241008"; 
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


document.querySelector('.navbar li:nth-child(1) a').addEventListener('click', function() { scrollToSection('home'); });
document.querySelector('.navbar li:nth-child(2) a').addEventListener('click', function() { scrollToSection('about'); });
document.querySelector('.navbar li:nth-child(3) a').addEventListener('click', function() { scrollToSection('collection'); });
document.querySelector('.navbar li:nth-child(4) a').addEventListener('click', function() { scrollToSection('contact'); });


function shopNowCollectionClicked(category) {
    alert("Redirecting to the " + category + " collection. Happy shopping!");
}

