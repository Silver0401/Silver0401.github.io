var timeoutId = null;

// function changeImage() {
//   document.getElementById("img").src = images[x];
//   x = (x + 1) % images.length;
//   plusSlides2(1,1)
//   timeoutId = setTimeout(changeImage, 3000);
// }

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



// changeImage()