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

	var allClear = document.getElementById("AC");
	allClear.onclick = handleClickForAllClear;

	var clearEntry = document.getElementById("CE");
	clearEntry.onclick = handleClickForClearEntry;

	var decimal = document.getElementById("decimal");
	decimal.onclick = handleClickForDecimal;

	var equal = document.getElementById("equal");
	equal.onclick = handleClickForEqual;
}

function handleClickForEqual() {
	var testDisplay = document.getElementById("test");
	testDisplay.innerHTML = "=";
}

function handleClickForDecimal() {
	var testDisplay = document.getElementById("test");
	testDisplay.innerHTML = ".";
}

function handleClickForClearEntry() {
	var testDisplay = document.getElementById("test");
	testDisplay.innerHTML = "clear entry";
}

function handleClickForAllClear() {
	var testDisplay = document.getElementById("test");
	testDisplay.innerHTML = "all clear";
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