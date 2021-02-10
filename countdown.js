let launchingDate = new Date(2021, 3, 8, 18);

var myVar = window.setInterval(getCountDown, 1000, launchingDate);

function getCountDown(date){

  let currentDate = new Date();
  
  //Différence de temps en milliseconde
  let DifferenceInTime  = date.getTime() - currentDate.getTime();
  //Conversion du temps en milliseconde en jour(s)
  let DifferenceInDay  = DifferenceInTime / (24 * 60 * 60 * 1000);
  //Nombre entier de jours restants
  let CountingDays = Math.trunc(DifferenceInDay);  
  //Nombre d'heures restantes 
  let DifferenceInHours = (DifferenceInDay - CountingDays) * 24;
  //Nombre entier d'heures restantes
  let CountingHours = Math.trunc(DifferenceInHours);
  //Nombre de minutes restantes
  let DifferenceInMinutes = (DifferenceInHours - CountingHours) * 60;
  //Nombre entier de minutes restantes
  let CountingMinutes = Math.trunc(DifferenceInMinutes);
  //Nombre de secondes restantes
  let DifferenceInSec = (DifferenceInMinutes - CountingMinutes) * 60;
  //Nombre entier de secondes restates
  let CountingSec = Math.trunc(DifferenceInSec);
  
  document.getElementById("days").innerHTML = checkNumberDigits(CountingDays); 
  document.getElementById("hours").innerHTML = checkNumberDigits(CountingHours); 
  document.getElementById("min").innerHTML = checkNumberDigits(CountingMinutes);
  document.getElementById("sec").innerHTML = checkNumberDigits(CountingSec);
}

function checkNumberDigits(myNumber)
{
     return (myNumber < 10 ? "0" : "") + myNumber;  
}

