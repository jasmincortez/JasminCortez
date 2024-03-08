// Voice Acting Language Button

function toggleLanguage(lang) {
    if (lang =='en') {
       document.getElementById("audios-en").style.display="inline";
       document.getElementById("audios-pt").style.display="none";
       document.getElementById("btn-en").style.backgroundColor = '#624cab';
       document.getElementById("btn-en").style.color = 'white';
       document.getElementById("btn-pt").style.backgroundColor = 'white';
       document.getElementById("btn-pt").style.color = 'black';
    }
    else if (lang == 'pt') {
        document.getElementById("audios-en").style.display="none";
        document.getElementById("audios-pt").style.display="inline";
        document.getElementById("btn-en").style.backgroundColor = 'white';
       document.getElementById("btn-en").style.color = 'black';
        document.getElementById("btn-pt").style.backgroundColor = '#624cab';
       document.getElementById("btn-pt").style.color = 'white';
    };
  }

  //Scroll Top Button

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}