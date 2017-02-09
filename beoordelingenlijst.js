
function getalBerekenen(getal){
	var beoordeling;

	if (getal <= 49) {
		beoordeling = "onvoldoende";
	}
	else if(getal >= 50 && getal <= 59){
		beoordeling = "matig";
	}
	else if (getal >= 60 && getal <= 74) {
		beoordeling = "voldoende"
	}
	else if (getal >= 75 && getal <=100) {
		beoordeling = "goed"
	}
	return beoordeling;
}

function bereken1(){
	var getal = document.getElementById('nummer1').value;
	var beoordeling = getalBerekenen(getal);
	document.getElementById('resultaat').innerHTML += "je cijfer is: " + getal + " je beoordeling is: " + beoordeling + "<br>";
}
function bereken2(){
	var getal = document.getElementById('nummer1').value;
	var beoordeling = getalBerekenen(getal);
	document.getElementById('resultaat').innerHTML += "je cijfer is: " + getal + " je beoordeling is: " + beoordeling + "<br>";
}






/*
versie 2

tip: korter, een function met alle teksten.
top: het werkt!

*/

// var nummer1;
// var nummer2;

// var onvoldoende = "de beoordeling is onvoldoende want het cijfer is: ";
// var matig = "de beoordeling is matig want het cijfer is: ";
// var voldoende = "de beoordeling is voldoende want het cijfer is: ";
// var goed = "de beoordeling is goed want het cijfer is: ";
// var geenGeldigGetal = "het getal kan niet groter als 100 zijn";



// function getallenOphalen(){
// 	nummer1 = document.getElementById('nummer1').value;
// 	nummer2 = document.getElementById('nummer2').value;
// }
// function berekenGetal1(){

// 	getallenOphalen();

// 	if (nummer1 <= 49) {
// 		document.getElementById('resultaat').innerHTML += onvoldoende + nummer1 + "<br>";
// 	}
// 	if(nummer1 >= 50 && nummer1 <= 59){
// 		document.getElementById('resultaat').innerHTML += matig + nummer1 + "<br>";
// 	}
// 	if (nummer1 >= 60 && nummer1 <= 74) {
// 		document.getElementById('resultaat').innerHTML += voldoende + nummer1 + "<br>";
// 	}
// 	if (nummer1 >= 75 && nummer1 <= 100) {
// 		document.getElementById('resultaat').innerHTML += goed + nummer1 + "<br>"
// 	}
// 	else if(nummer1 > 100){
// 		document.getElementById('resultaat').innerHTML += geenGeldigGetal + "<br>"
// 	}
// }
// function berekenGetal2(){

// 	getallenOphalen();

// 	if (nummer2 <= 49) {
// 		document.getElementById('resultaat').innerHTML += onvoldoende + nummer1 + "<br>";
// 	}
// 	if(nummer2 >= 50 && nummer1 <= 59){
// 		document.getElementById('resultaat').innerHTML += matig + nummer1 + "<br>";
// 	}
// 	if (nummer2 >= 60 && nummer1 <= 74) {
// 		document.getElementById('resultaat').innerHTML += voldoende + nummer1 + "<br>";
// 	}
// 	if (nummer2 >= 75 && nummer1 <= 100) {
// 		document.getElementById('resultaat').innerHTML += goed + nummer1 + "<br>"
// 	}
// 	else if(nummer2 > 100){
// 		document.getElementById('resultaat').innerHTML += geenGeldigGetal + "<br>"
// 	}

// }






/*
versie 1
*/




// function nummer1UitPrinten(){
// 	var nummer1 = document.getElementById('nummer1').value;

// 	if (nummer1 <= 49) {
// 		document.getElementById('resultaat').innerHTML += "het cijfer is " + nummer1 + " en is dus onvoldoende" + "<br>"
// 	}
// 	if(nummer1 >= 50 && nummer1 <= 59){
// 		document.getElementById('resultaat').innerHTML += "het cijfer is " + nummer1 + " en is dus matig" + "<br>"
// 	}
// 	if (nummer1 >= 60 && nummer1 <= 74) {
// 		document.getElementById('resultaat').innerHTML += "het cijfer is " + nummer1 + " en is dus voldoende" + "<br>"
// 	}
// 	if (nummer1 >= 75 && nummer1 <= 100) {
// 		document.getElementById('resultaat').innerHTML += "het cijfer is " + nummer1 + " en is dus goed" + "<br>"
// 	}
// 	else if(nummer2 > 100){
// 		document.getElementById('resultaat').innerHTML += "het getal kan niet groter als 100 zijn" + "<br>";
// 	}
// }
// function nummer2UitPrinten(){
// 	var nummer2 = document.getElementById('nummer2').value;

// 	if (nummer2 <=49) {
// 		document.getElementById('resultaat').innerHTML += "het cijfer is " + nummer2 + " en is dus onvoldoende" + "<br>"
// 	}
// 	if(nummer2 >= 50 && nummer1 <= 59){
// 		document.getElementById('resultaat').innerHTML += "het cijfer is " + nummer2 + " en is dus matig" + "<br>"
// 	}
// 	if (nummer2 >= 60 && nummer1 <= 74) {
// 		document.getElementById('resultaat').innerHTML += "het cijfer is " + nummer2 + " en is dus voldoende" + "<br>"
// 	}
// 	if (nummer2 >= 75 && nummer1 <= 100) {
// 		document.getElementById('resultaat').innerHTML += "het cijfer is " + nummer2 + " en is dus goed" + "<br>"
// 	}
// 	else if(nummer2 > 100){
// 		document.getElementById('resultaat').innerHTML += "het getal kan niet groter als 100 zijn" + "<br>";
// 	}
// }