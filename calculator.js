window.onload = init;
var calculations = [];

function init() {
	var numbers = document.getElementsByClassName("num");
	for(var i = 0; i < numbers.length; i++) {
	numbers[i].onclick = handleClickForNumbers;
	}

	var operators = document.getElementsByClassName("operator");
	for(var i = 0; i < operators.length; i++) {
		operators[i].onclick = handleClickForOperators;
	}
}

function handleClickForNumbers(e) {
	var clickedButton = e.target;
	var display = document.getElementById("display");
	display.innerHTML = clickedButton.innerHTML;
	calculations.push(clickedButton.innerHTML);

	var testDisplay = document.getElementById("test");
	testDisplay.innerHTML = calculations;
}

function handleClickForOperators(e) {
	var clickedButton = e.target;
	var display = document.getElementById("display");
	display.innerHTML = clickedButton.innerHTML;
	calculations.push(clickedButton.innerHTML);

	var testDisplay = document.getElementById("test");
	testDisplay.innerHTML = calculations;
}