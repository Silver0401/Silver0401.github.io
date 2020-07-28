const FButton = document.getElementById("FLink")
const CButton = document.getElementById("CLink")
const IButton = document.getElementById("ILink")
const WButton = document.getElementById("WLink")

const Fbrand = document.getElementById("Fbrand")
const Cbrand = document.getElementById("Cbrand")
const Ibrand = document.getElementById("Ibrand")
const Wbrand = document.getElementById("Wbrand")
const Bbrand = document.getElementById("Bbrand")

const FirstImages = document.getElementById("one")
const CarnImages = document.getElementById("two")
const IkiImages = document.getElementById("three")
const WerImages = document.getElementById("four")

const AboutInfo = document.getElementById("About")

const FText = "FIRST, por sus siglas en inglés For Inspiration and Recognition of Science and Technology, es una competencia de robótica de talla mundial, dentro de mi prepa existía un grupo estudiantil por el nombre de Keybot, el cual era participe en la subdivisión más compleja de la misma competencia: FRC (First Robotics Competition). Durante mi tiempo en el equipo, fungí como mentor y líder del área de programación, en competencias tanto regionales como mundiales; actualmente sigo ayudando al equipo en cualquier cosa que llegaran a necesitar."
const CText = "Carneros es un grupo estudiantil de mi prepa el cual se enfocaba en la formación de alumnos con características de liderazgo, vivencia y trabajo en equipo. Durante mi tiempo dentro del grupo fui tanto un participante como un organizador de varios eventos como: campamentos de liderazgo, foros de conferencia (Wake Up, siendo uno de los más grandes y exitosos) y actividades de humanidades y conciencia.  "
const IText = "Ikigai al igual que Carneros fue otro grupo estudiantil del que forme parte durante algunos semestres, en este se buscaban hacer eventos de conciencia social, al formar parte de este, en algunas ocasiones ayude a la preparación de algunos eventos, trabajando más que nada habilidades como organización y trabajo coordinado de equipo."
const WText = "WER significa en inglés: World Educational Robot, otra competencia de robótica de talla mundial, donde desde un principio fui Mentor de los Equipos inscritos a la competencia. Por otro lado BrainVue es un grupo al que me uní durante mi primer semestre en la universidad, donde programabamos un robot NAO para poder aplicarlo en el ámbito médico. (El año pasado BrainVue tuvo un \"stand\" en la reconocida feria de tecnologia INC Monterrey)"


FButton.onclick = () =>{
  AboutInfo.style.opacity = 0;
  FirstImages.style.opacity = 1;
  CarnImages.style.opacity = 0;
  IkiImages.style.opacity = 0;
  WerImages.style.opacity = 0;

  FButton.style.transition = "color 500ms, box-shadow 500ms";
  FButton.style.color = "#E15555";
  CButton.style.color = "white";
  IButton.style.color = "white";
  WButton.style.color = "white";

  Fbrand.style.opacity = 1;
  Cbrand.style.opacity = 0;
  Ibrand.style.opacity = 0;
  Wbrand.style.opacity = 0;
  Bbrand.style.opacity = 0;

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

  CButton.style.transition = "color 500ms, box-shadow 500ms";
  FButton.style.color = "white";
  CButton.style.color = "#497DDD";
  IButton.style.color = "white";
  WButton.style.color = "white";

  Fbrand.style.opacity = 0;
  Cbrand.style.opacity = 1;
  Ibrand.style.opacity = 0;
  Wbrand.style.opacity = 0;
  Bbrand.style.opacity = 0;


  sleep(1000).then(() => {

    AboutInfo.innerText = CText
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

  IButton.style.transition = "color 500ms, box-shadow 500ms";
  FButton.style.color = "white";
  CButton.style.color = "white";
  IButton.style.color = "#4DC435";
  WButton.style.color = "white";

  Fbrand.style.opacity = 0;
  Cbrand.style.opacity = 0;
  Ibrand.style.opacity = 1;
  Wbrand.style.opacity = 0;
  Bbrand.style.opacity = 0;

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

  WButton.style.transition = "color 500ms, box-shadow 500ms";
  FButton.style.color = "white";
  CButton.style.color = "white";
  IButton.style.color = "white";
  WButton.style.color = "#D5DE47";

  Fbrand.style.opacity = 0;
  Cbrand.style.opacity = 0;
  Ibrand.style.opacity = 0;
  Wbrand.style.opacity = 1;
  Bbrand.style.opacity = 1;

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



