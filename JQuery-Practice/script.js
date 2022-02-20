function scrollToTop() {
    $(window).scrollTop(0);
    
}

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

// toggle the icon
this.classList.toggle("bi-eye");
});

// prevent form submit
const form = document.querySelector("form");
  form.addEventListener('submit', function (e) {
  e.preventDefault();
});


$('#accept').click(function() {
    if ($('#submitbtn').is(':disabled')) {
    $('#submitbtn').removeAttr('disabled');
  } 
    else {
    $('#submitbtn').attr('disabled', 'disabled');
  }
});
           

$( "#btn1" ).click(function() {
$( "#box" ).animate({
   width: "300px",
   height: "300px",
    }, 1500 );
});

$( "#btn2" ).click(function() {
$( "#box" ).animate({
   width: "100px",
   height: "100px",
    }, 1500 );
});



$( "p:last" ).click(function() {
$( this ).fadeTo( "slow", 0.40 );
});


$(document).ready(function () {
var max_length = 25;
$('textarea').keyup(function () {
var len = max_length - $(this).val().length;
$('.GFG').text(len);
   });
});

$(document).ready(function(){
// Set background image of a div on click of the button
$("button").click(function(){
var imageUrl = "images/sky.jpg";
$(".box").css("background-image", "url(" + imageUrl + ")");
    });
});
