window.onload = init;
var calculations = [];
var number = "";
var operator = "";

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
	calculations.push(number); //push the second number into array
	var calculation;
	if(calculations[1] == "+") {
		calculation = parseFloat(calculations[0]) + parseFloat(calculations[2]);
	}else if(calculations[1] == "-") {
		calculation = parseFloat(calculations[0]) - parseFloat(calculations[2]);
	}else if(calculations[1] == "*") {
		calculation = parseFloat(calculations[0]) * parseFloat(calculations[2]);
	}else if(calculations[1] == "/") { // it's division
		calculation = parseFloat(calculations[0]) / parseFloat(calculations[2]);
	}else{
		calculation = "error";
	}
	testDisplay.innerHTML = typeof calculation;
	display(calculation);

	//clear the array
	calculations = [];
	number = calculation;
}

function handleClickForDecimal() {
	var testDisplay = document.getElementById("test");
	testDisplay.innerHTML = ".";
	number = number + ".";
	display(number);
}

function handleClickForClearEntry() { //presumably this is used when the user enters a wrong digit
	//so it should clear number
	var testDisplay = document.getElementById("test");
	testDisplay.innerHTML = "clear entry";
	display("0");
	number = "";
}

function handleClickForAllClear() {
	var testDisplay = document.getElementById("test");
	testDisplay.innerHTML = "all clear";
	display("0"); //display nothing
	number = ""; //reset number
	calculations = []; //create a new empty array
}

function handleClickForNumbers(e) { //operands 
	var clickedButton = e.target;
	number = number + clickedButton.innerHTML;
	display(number);
	var testDisplay = document.getElementById("test");
	testDisplay.innerHTML = number;
}

function handleClickForOperators(e) {
	var clickedButton = e.target;
	display(clickedButton.innerHTML);
	calculations.push(number); //push the number into the array
	number = ""; //clear the number
	calculations.push(clickedButton.innerHTML); //push the operator into the array

	var testDisplay = document.getElementById("test");
	testDisplay.innerHTML = calculations;
}

function display(display) {
	var displayElement = document.getElementById("display");
	displayElement.innerHTML = display;
}