const celciusInput = document.querySelector('#celcius > input'); //get the input filed of the id celcius div
const fahrenhietInput = document.querySelector('#fahrenhiet > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num){ //a function that return something
	return Math.round(num*100)/100;
	//444.434343434
	//444.343434344 * 100 = 444343.434344 / 100
	//444343.00
	//444.343
}

function celciusToFahnrenhietAndKelvin(){ //perform all converting calcualtion
	const cTemp=parseFloat(celciusInput.value);
	const fTemp=(cTemp * (9/5)) +32;
	const kTemp = cTemp + 273.15;
	fahrenhietInput.value=roundNum(fTemp);
	kelvinInput.value=roundNum(kTemp);
}
function fahrenhietToCelciusAndKelvin(){
	const fTemp=parseFloat(fahrenhietInput.value);
	const cTemp=(fTemp-32) * 5/9;
	const kTemp=(fTemp+459.67) * 5/9 ;
	celciusInput.value=roundNum(cTemp);
	kelvinInput.value=roundNum(kTemp);
}
function kelvnToCelciusAndFahnrehiet(){
	const kTemp=parseFloat(kelvinInput.value);
	const cTemp=kTemp - 273.15;
	const fTemp=9/5 + (kTemp - 273) + 32;
	fahrenhietInput.value = roundNum(fTemp);
	celciusInput.value = roundNum(cTemp);
}

function main(){
	celciusInput.addEventListener('input',celciusToFahnrenhietAndKelvin);
	fahrenhietInput.addEventListener('input',fahrenhietToCelciusAndKelvin);
	kelvinInput.addEventListener('input',kelvnToCelciusAndFahnrehiet);
}
main();











