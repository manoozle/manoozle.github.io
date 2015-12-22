function hello(){
	alert ('HELLO!');
	return false;
}

function changeColor(section){
	console.log('CHANGE COLOR: '+section);
	if (section == 'div1'){
		document.getElementById(section).style.backgroundColor = '#000';
	} else {
		document.getElementById(section).style.backgroundColor = '#777';
	}


}