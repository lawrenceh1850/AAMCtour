var str = document.querySelector("#distancebetween").innerText;
var res = Number(str.replace(/\D/g, ""));
var distanceInMiles = res * 1.609344; //miles to km


//document.querySelector("#carbon").innerText = adjusteddistance;