
let btnConvert = document.getElementById("btn-convert")
let lengthResults = document.getElementById("length")
let volumeResults = document.getElementById("volume")
let massResults = document.getElementById("mass")


// starting number
let numVar = 1


// conversion formulas
let metersToFeet = 3.2808399
let feetToMeters = 0.3048
let litersToGallons = 3.785411784
let gallonsToLiters = 0.264172
let poundsToKilos = 0.45359237
let kilosToPounds = 2.20462262


btnConvert.addEventListener("click", function(){
    let inputConvert = document.getElementById("input-convert").value;
    numVar = inputConvert
    
    lengthResults.textContent =
    `
        ${numVar} meters = ${(numVar*metersToFeet).toFixed(3)} feet 
        | ${numVar} feet = ${(numVar*feetToMeters).toFixed(3)} meters
    `
    volumeResults.textContent =
    `
        ${numVar} liters  = ${(numVar*gallonsToLiters).toFixed(3)} gallons  
        | ${numVar} gallons = ${(numVar*litersToGallons).toFixed(3)} liters
    `

    massResults.textContent =
    `
        ${numVar} kilos  = ${(numVar*kilosToPounds).toFixed(3)} pounds   
        | ${numVar} pounds  = ${(numVar*poundsToKilos).toFixed(3)} kilos
    `
    numVar.value = "";
   document.getElementById("number").innerText = numVar

})