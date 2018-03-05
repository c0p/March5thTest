var Colors = ["red", "blue", "green", "yellow"];
var amountOfCookies = 13;
console.log(Colors);
Colors.pop(3);
console.log(Colors);
Colors.push(amountOfCookies);
console.log(Colors);

function createLI(val) {
	var list = document.createElement("LI");
	list.innerValue = val;
	return list
}

function appendArray(arr) {
	for (var i=0; i<=arr.length-1; i++) {
		console.log(createLI(arr[i]));
		document.getElementById("fourth").append(createLI(arr[i]));
	}
}

appendArray(Colors);