window.onload = init;

function init() {
	var buttons = document.getElementsByClassName("button");
	for(var i = 0; i < buttons.length; i++) {
	buttons[i].onclick = handleClick;
	}
}

function handleClick(e) {
	var clickedButton = e.target;
	var num = clickedButton.getAttribute("id");
	var display = document.getElementById("display");
	display.innerHTML = num;
}