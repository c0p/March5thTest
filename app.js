var Colors = ["red", "blue", "green", "yellow"];
var NewColor = "black";
console.log(Colors);
Colors.pop(3);
console.log(Colors);
Colors.push(NewColor);
console.log(Colors);

function createLI(val) {
	var list = document.createElement("LI");
	list.innerHTML = val;
	return list
}

function appendArray(arr) {
	for (var i=0; i<=arr.length-1; i++) {
		console.log(createLI(arr[i]));
		document.getElementById("fourth").append(createLI(arr[i]));
	}
}
appendArray(Colors);

var Student = {
	FirstName : "Jeraldy",
	LastName: "Cascayan",
	HighSchoolStatus : "alone"
}

document.getElementById("fourth").append(createLI(Student.FirstName));
document.getElementById("fourth").append(createLI(Student.LastName));
document.getElementById("fourth").append(createLI(Student.HighSchoolStatus));


function ExtraCreditFunction(arr) {
	var num = Math.floor(Math.random() * arr.length);
	document.getElementById("extraCredit").append(arr[num])
}

ExtraCreditFunction(Colors);