function nummer1UitPrinten(){
	var nummer1 = document.getElementById('nummer1').value;

	if (nummer1 <= 49) {
		document.getElementById('resultaat').innerHTML += "het cijfer is " + nummer1 + " en is dus onvoldoende" + "<br>"
	}
	if(nummer1 >= 50 && nummer1 <= 59){
		document.getElementById('resultaat').innerHTML += "het cijfer is " + nummer1 + " en is dus matig" + "<br>"
	}
	if (nummer1 >= 60 && nummer1 <= 74) {
		document.getElementById('resultaat').innerHTML += "het cijfer is " + nummer1 + " en is dus voldoende" + "<br>"
	}
	if (nummer1 >= 75 && nummer1 <= 100) {
		document.getElementById('resultaat').innerHTML += "het cijfer is " + nummer1 + " en is dus goed" + "<br>"
	}
	else if(nummer2 > 100){
		document.getElementById('resultaat').innerHTML += "het getal kan niet groter als 100 zijn" + "<br>";
	}
}
function nummer2UitPrinten(){
	var nummer2 = document.getElementById('nummer2').value;

	if (nummer2 <=49) {
		document.getElementById('resultaat').innerHTML += "het cijfer is " + nummer2 + " en is dus onvoldoende" + "<br>"
	}
	if(nummer2 >= 50 && nummer1 <= 59){
		document.getElementById('resultaat').innerHTML += "het cijfer is " + nummer2 + " en is dus matig" + "<br>"
	}
	if (nummer2 >= 60 && nummer1 <= 74) {
		document.getElementById('resultaat').innerHTML += "het cijfer is " + nummer2 + " en is dus voldoende" + "<br>"
	}
	if (nummer2 >= 75 && nummer1 <= 100) {
		document.getElementById('resultaat').innerHTML += "het cijfer is " + nummer2 + " en is dus goed" + "<br>"
	}
	else if(nummer2 > 100){
		document.getElementById('resultaat').innerHTML += "het getal kan niet groter als 100 zijn" + "<br>";
	}
}