const burger = document.getElementById("burger")
const nav = document.getElementById("navBar")
const link = document.getElementById("Link")
const me = document.getElementById("me")
const logo = document.getElementById("logo")
const html = document.querySelector("html")
const cv = document.getElementById("CV")
const contact = document.getElementById("contact")
const iAm = document.getElementById("IAmA")


let counter = 1
let CVPageTracker = 0
let ContactPageTracker = 0
let currentPage = "Home"
let PageWidth = "default"

burger.classList.toggle("toggle")

var UID = {
	_current: 0,
	getNew: function(){
		this._current++;
		return this._current;
	}
};

const sleep = (milliseconds) => {
	return new Promise(resolve => setTimeout(resolve, milliseconds))
}

HTMLElement.prototype.pseudoStyle = function(element,prop,value){
	var _this = this;
	var _sheetId = "pseudoStyles";
	var _head = document.head || document.getElementsByTagName('head')[0];
	var _sheet = document.getElementById(_sheetId) || document.createElement('style');
	_sheet.id = _sheetId;
	var className = "pseudoStyle" + UID.getNew();
	
	_this.className +=  " "+className; 
	
	_sheet.innerHTML += " ."+className+":"+element+"{"+prop+":"+value+"}";
	_head.appendChild(_sheet);
	return this;
}

const PageChecker = () => {

	if (window.screen.width < 400){
		PageWidth = "75%"
	} else {

		PageWidth = "85%"
		// if (currentPage === "Home"){
		// 	PageWidth = "85%"
		// } else if (currentPage === "CV") {
		// 	PageWidth = "85%"
		// } else {
		// 	PageWidth = "85%"
		// }
	}
}

const ShowNavBar = () => {

	burger.classList.toggle("toggle")
	nav.style.display = "block"

	anime({
		targets: "#navBar",
		duration: 700,
		easing: "easeInOutQuad",
		width: PageWidth,
	})

	nav.style.opacity = 1
}

const HideNavBar = () => {

	burger.classList.toggle("toggle")

	anime({
		targets: "#navBar",
		duration: 600,
		easing: "easeInOutQuad",
		width: 0,
	})

	nav.style.opacity = 0
	sleep(500).then(() => {
		nav.style.display = "none"
	})
}

const NavBarCorrectFunctioning  = () => {
	PageChecker()

	if (counter % 2 === 0){

		ShowNavBar()

	} else {

		HideNavBar()
	}
	counter+=1
}

const EaseInOutHome = () => {

	currentPage = "Home"
	CVPageTracker = 0
	ContactPageTracker = 0
	counter = 1
	NavBarCorrectFunctioning()

	// Easing In home contents

	me.style.display = "block"
	logo.style.display = "block"
	iAm.style.opacity = 1

	anime({
		targets:["#logo","#me, #IAmA"],
		duration: 2000,
		translateY: 0,
		easing: "easeOutBounce"
	})

	// Getting rid of CV and Contacts contents

	anime({
		targets:"#CV",
		duration: 500,
		easing: "easeInOutSine",
		translateX: "-110%",
	})

	anime({
		targets: "#contact",
		duration: 700,
		translateX: "120%",
		easing: "easeInOutQuad",
	})

	sleep(700).then(() => {

		cv.style.display = "none"
		contact.style.display = "none"
	})


	html.pseudoStyle("after","opacity",0)
	html.pseudoStyle("before","opacity",0)
}

const EaseInOutContact = () => {

	counter = 1
	CVPageTracker = 0
	NavBarCorrectFunctioning()

	// Getting rid of Home and CV

	anime({
		targets:["#logo","#me, #IAmA"],
		duration: 1000,
		translateY: 1000,
		easing: "easeInOutSine"
	})

	anime({
		targets:"#CV",
		duration: 500,
		easing: "easeInOutSine",
		translateX: "-110%",
	})

	sleep(1000).then(() => {
		me.style.display = "none"
		logo.style.display = "none"
		cv.style.display = "none"
		iAm.style.opacity = 0
	})

	// Showing Contacts

	if (ContactPageTracker === 0){

		sleep(600).then(() => {

			contact.style.display = "block"

			anime({
				targets: "#contact",
				duration: 700,
				translateX: ["120%",0],
				easing: "easeInOutQuad",
			})

			ContactPageTracker = 1
		})
	}

	html.pseudoStyle("after","opacity",0)
	html.pseudoStyle("before","opacity",1)
}

const EaseInOutCV = () => {

	currentPage = "CV"
	ContactPageTracker = 0
	counter = 1
	NavBarCorrectFunctioning()

	// Get rid of Home and Contacts elements

	anime({
		targets:["#logo","#me, #IAmA"],
		duration: 1000,
		translateY: 1000,
		easing: "easeInOutSine"
	})

	anime({
		targets: "#contact",
		duration: 700,
		translateX: "120%",
		easing: "easeInOutQuad",
	})
	
	html.pseudoStyle("after","opacity",1)
	html.pseudoStyle("before","opacity",0)

	sleep(1000).then(() => {
		me.style.display = "none"
		logo.style.display = "none"
		contact.style.display = "none"
		iAm.style.opacity = 0
	})

	// Put on the CV elements
	if (CVPageTracker === 0){

		sleep(800).then(() => {

			cv.style.display = "block"

			anime({
				targets:"#CV",
				duration: 1500,
				translateX: ["-100%",0],
			})

			CVPageTracker = 1
		})
	} 
}

burger.onclick = () => {

	NavBarCorrectFunctioning()
}

const pageTransition = (Page) => {

	switch (Page){
		case "CV":

			EaseInOutCV()
			break

		case "Home":

			EaseInOutHome()
			break

		case "Contact":

			EaseInOutContact()
			break

		default:
			console.log("not a known page")
			break
	}
}
