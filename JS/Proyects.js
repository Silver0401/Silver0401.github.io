const FButton = document.getElementById("FLink")
const CButton = document.getElementById("CLink")
const IButton = document.getElementById("ILink")
const WButton = document.getElementById("WLink")

const Fbrand = document.getElementById("Fbrand")
const Cbrand = document.getElementById("Cbrand")
const Ibrand = document.getElementById("Ibrand")
// const Wbrand = document.getElementById("WLink")

const FirstImages = document.getElementById("one")
const CarnImages = document.getElementById("two")
const IkiImages = document.getElementById("three")
const WerImages = document.getElementById("four")

const AboutInfo = document.getElementById("About")

const FText = "This is a test #1 to see how this works"
const CText = "This is a test #2 to see how this works"
const IText = "This is a test #3 to see how this works"
const WText = "This is a test #4 to see how this works"


FButton.onclick = () =>{
  AboutInfo.style.opacity = 0;
  FirstImages.style.opacity = 1;
  CarnImages.style.opacity = 0;
  IkiImages.style.opacity = 0;
  WerImages.style.opacity = 0;

  FButton.style.transition = "color 500ms";
  FButton.style.color = "#E15555";
  CButton.style.color = "white";
  IButton.style.color = "white";
  WButton.style.color = "white";

  Fbrand.style.opacity = 1;
  Cbrand.style.opacity = 0;
  Ibrand.style.opacity = 0;

  sleep(1000).then(() => {

    AboutInfo.style.opacity = 1
    AboutInfo.style.transition = "opacity 1000ms"
    AboutInfo.innerText = FText
  })

}

CButton.onclick = () =>{
  AboutInfo.style.opacity = 0;
  FirstImages.style.opacity = 0;
  CarnImages.style.opacity = 1;
  IkiImages.style.opacity = 0;
  WerImages.style.opacity = 0;

  CButton.style.transition = "color 500ms";
  FButton.style.color = "white";
  CButton.style.color = "#497DDD";
  IButton.style.color = "white";
  WButton.style.color = "white";

  Fbrand.style.opacity = 0;
  Cbrand.style.opacity = 1;
  Ibrand.style.opacity = 0;


  sleep(1000).then(() => {

    AboutInfo.innerText = IText
    AboutInfo.style.opacity = 1
    AboutInfo.style.transition = "opacity 1000ms"

  })
}

IButton.onclick = () =>{
  AboutInfo.style.opacity = 0;
  FirstImages.style.opacity = 0;
  CarnImages.style.opacity = 0;
  IkiImages.style.opacity = 1;
  WerImages.style.opacity = 0;

  IButton.style.transition = "color 500ms";
  FButton.style.color = "white";
  CButton.style.color = "white";
  IButton.style.color = "#4DC435";
  WButton.style.color = "white";

  Fbrand.style.opacity = 0;
  Cbrand.style.opacity = 0;
  Ibrand.style.opacity = 1;

  sleep(1000).then(() => {

    AboutInfo.innerText = IText
    AboutInfo.style.opacity = 1
    AboutInfo.style.transition = "opacity 1000ms"
  })

}

WButton.onclick = () =>{
  AboutInfo.style.opacity = 0;
  FirstImages.style.opacity = 0;
  CarnImages.style.opacity = 0;
  IkiImages.style.opacity = 0;
  WerImages.style.opacity = 1;

  WButton.style.transition = "color 500ms";
  FButton.style.color = "white";
  CButton.style.color = "white";
  IButton.style.color = "white";
  WButton.style.color = "#D5DE47";

  sleep(1000).then(() => {

  AboutInfo.innerText = WText
  AboutInfo.style.opacity = 1
  AboutInfo.style.transition = "opacity 1000ms"
  })

}



var slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);


function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}




var slideIndex2 = [1,1];
/* Class the members of each slideshow group with different CSS classes */
var slideId2 = ["mySlides3", "mySlides4"]
showSlides2(1, 0);
showSlides2(1, 1);


function plusSlides2(n, no) {
  showSlides2(slideIndex2[no] += n, no);
}

function showSlides2(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId2[no]);
  if (n > x.length) {slideIndex2[no] = 1}
  if (n < 1) {slideIndex2[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex2[no]-1].style.display = "block";
}



