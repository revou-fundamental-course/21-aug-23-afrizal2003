

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


function validateForm(){
    const name= document.forms['message-form']['full-name'].value;
    const birthDate= document.forms['message-form']['birth-date'].value;
    const gender= document.forms['message-form']['gender'].value;
    const messages= document.forms['message-form']['messages'].value;

    if(name=="" || birthDate=="" || gender=="" || messages==""){
        alert("Tidak Boleh Ada Yang Kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;
}

function setSenderUI(name, birthDate, gender, messages){
    document.getElementById("sender-full-name").innerHTML=name;
    document.getElementById("sender-birth-date").innerHTML=birthDate;
    document.getElementById("sender-gender").innerHTML=gender;
    document.getElementById("sender-messages").innerHTML=messages;
    

}
