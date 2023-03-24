location.href = '#';

function callContactUs() {
    location.href = "#contactUs";
}

// Image Slider using javascript

let slideIndex = 2;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    // if your n (slideIndex) is become grater than Slides array length than set slideIndex to 1.
    if (n > 3) {
        slideIndex = 2;
    }

    // if your n (slideIndex) is become negative then set it to slides length
    if (n < 2) {
        slideIndex = 3;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-2].style.display = "block";    
    slides[slideIndex-1].style.display = "block";    
    slides[slideIndex].style.display = "block";      
}


// lazy loading service images / course images

document.addEventListener("DOMContentLoaded", function () {
    let lazyloadImages;

    lazyloadImages = document.querySelectorAll(".lazy-load");

    let imageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                let image = entry.target;
                image.src = image.dataset.src;
                image.classList.remove("lazy-load");
                imageObserver.unobserve(image);
            }
        });
    });

    lazyloadImages.forEach(function (image) {
        imageObserver.observe(image);
    });

})

// Event listener for submit button

document.querySelector("#myForm").addEventListener("submit", function (e) { 
    e.preventDefault(); // Prevent the form from submitting
    sendMsg(e); // sendMsg() will be called when the form is submitted
});

// Regular expression for validation  

const nameRegex = /^[A-Za-z]{1,}$/;
const emailRegex = /^[a-z_]{3,}@[a-z]{3,}[.]{1}[a-z.]{2,6}$/;
const contactRegex = /^[0-9]{10}$/;

const orig_name_ip = document.getElementById("nameIp");
const orig_email_ip = document.getElementById("emailIp");
const orig_contact_ip = document.getElementById("contactIp");


// Function for client query

function sendMsg(e) {
    let flag = true;

    const name = document.getElementById("nameIp").value.replace(/\s+/g, '').trim();;
    const email = document.getElementById("emailIp").value;
    const contact = document.getElementById("contactIp").value;

    document.getElementById('nameError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('contactError').innerHTML = "";

    document.getElementById("nameIp").style = orig_name_ip.value;
    document.getElementById("emailIp").style = orig_email_ip.value;
    document.getElementById("contactIp").style = orig_contact_ip.value;

    if (!nameRegex.test(name) && name != '') {
        document.getElementById("nameError").innerHTML = "name is Invalid";
        document.getElementById("nameIp").style.border = "1px solid red";
        flag = false;
    }

    if (!emailRegex.test(email) && email != '') {
        document.getElementById("emailError").innerHTML = "email is Invalid";
        document.getElementById("emailIp").style.border = "1px solid red";
        flag = false;
    }

    if (!contactRegex.test(contact) && contact != '') {
        document.getElementById('contactError').innerHTML = "contact number is Invalid";
        document.getElementById("contactIp").style.border = "1px solid red";
        flag = false;
    }

    // If all inputs are valid then toast message will be displayed
    if (flag) {
        const toastTrigger = document.getElementById('liveToastBtn');
        const toastLiveExample = document.getElementById('liveToast');
       
        if (toastTrigger) {
            const toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
            document.getElementById("myForm").reset();
        }
    }
}

// Functions for redirecting to different courses

function toHtml() {
    if(confirm("You will be redirect to 'https://www.w3schools.com/html/default.asp'")) {
        window.open('https://www.w3schools.com/html/default.asp');
    }
}

function toCss() {
    if(confirm("You will be redirect to 'https://www.w3schools.com/css/default.asp'")) {
        window.open('https://www.w3schools.com/css/default.asp');
    }
}

function toJava() {
    if(confirm("You will be redirect to 'https://www.w3schools.com/java/default.asp'")) {
        window.open('https://www.w3schools.com/java/default.asp');
    }
}

function toCsharp() {
    if(confirm("You will be redirect to 'https://learn.microsoft.com/en-us/dotnet/csharp/'")) {
        window.open('https://learn.microsoft.com/en-us/dotnet/csharp/');
    }
}

function toReact() {
    if(confirm("You will be redirect to 'https://www.w3schools.com/react/'")) {
        window.open('https://www.w3schools.com/react/');
    }
}

function toPython() {
    if(confirm("You will be redirect to 'https://www.w3schools.com/python/'")) {
        window.open('https://www.w3schools.com/python/');
    }
}