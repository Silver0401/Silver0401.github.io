const list = ["Programador", "Estudiante de Medicina", "Diseñador Web", "Emprendedor", "Líder", "Fan de la Robótica", "Desarrollador de Apps"]

let KeyWord = document.getElementById("KeyWord")
var updated = "init"
var last = "default"

const save = () =>{
	last = updated
}

const ChangeKeyWord = () => {

	var TL = anime.timeline({
		targets: "#KeyWord",
	})

	TL.add({
		translateX: [-200,0],
		opacity:[0,1],
		duration: 1500
	})

	TL.add({
		easing: "easeInOutSine",
		duration: 1500,
		translateX: [0, 200],
		opacity:[1,0]
	})


	updated = list[Math.floor(Math.random() * list.length)]

	if (updated === last){
		console.log("repeated word: " + updated)
		updated = list[Math.floor(Math.random() * list.length)]	
		console.log("succesfuly prevented")
	}

	// console.log(updated)
	KeyWord.innerText = updated

	save()

	setTimeout(ChangeKeyWord, 3000)	
}





