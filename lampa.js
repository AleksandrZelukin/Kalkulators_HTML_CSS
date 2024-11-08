const newButton = document.getElementById('newButton');

function changeBackground(){
	document.body.style.background = 'red';
}


newButton.addEventListener('click', changeBackground);