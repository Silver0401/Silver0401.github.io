const burger = document.getElementById("burger")
const nav = document.getElementById("navBar")
const link = document.getElementById("Link")
const me = document.getElementById("me")
const logo = document.getElementById("logo")
const html = document.querySelector("html")
let counter = 0

var UID = {
	_current: 0,
	getNew: function(){
		this._current++;
		return this._current;
	}
};

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

const sleep = (milliseconds) => {
	return new Promise(resolve => setTimeout(resolve, milliseconds))
}

burger.onclick = () => {

	if (counter % 2 === 0){

		burger.classList.toggle("toggle")
		nav.style.display = "block"

		anime({
			targets: "#navBar",
			duration: 700,
			easing: "easeInOutQuad",
			width: 850,
		})

		nav.style.opacity = 1

	} else {

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
	counter+=1
}

const pageTransition = (Page) => {

	switch (Page){
		case "CV":
			console.log("on CV page")
			anime({
				targets:["#logo","#me"],
				duration: 1000,
				translateY: 1000,
				easing: "easeInOutSine"
			})
			
			html.pseudoStyle("after","opacity",1)
			html.pseudoStyle("before","opacity",0)

			sleep(1000).then(() => {
				me.style.display = "none"
				logo.style.display = "none"
			})

			break

		case "Home":
			console.log("on Home page")

			me.style.display = "block"
			logo.style.display = "block"

			anime({
				targets:["#logo","#me"],
				duration: 2000,
				translateY: 0,
				easing: "easeOutBounce"
			})

			html.pseudoStyle("after","opacity",0)
			html.pseudoStyle("before","opacity",0)
			break

		case "Contact":
			console.log("on contact me page")

			anime({
				targets:["#logo","#me"],
				duration: 1000,
				translateY: 1000,
				easing: "easeInOutSine"
			})

			html.pseudoStyle("after","opacity",0)
			html.pseudoStyle("before","opacity",1)

			sleep(1000).then(() => {
				me.style.display = "none"
				logo.style.display = "none"
			})
			break

		default:
			console.log("not a known page")
			break
	}
}
