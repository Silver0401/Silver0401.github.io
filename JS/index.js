const burger = document.getElementById("burger")
const nav = document.getElementById("navBar")
let counter = 0

const sleep = (milliseconds) => {
	return new Promise(resolve => setTimeout(resolve, milliseconds))
}

burger.onclick = () => {

	if (counter % 2 === 0){

		anime({
			targets: "#navBar",
			duration: 1000,
			translateX: [-200]
		})

		navBar.style.display = "inline"
	} else {

		anime({
			targets: "#navBar",
			duration: 2000,
			translateX: [200]
		})

		sleep(100).then( () =>{

			navBar.style.display = "none"

		})

	}

	counter += 1

}