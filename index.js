/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn")
const inputValue = document.getElementById("input-value")
const lengthResultEl = document.getElementById("length-result-el")
const volumeResultEl = document.getElementById("volume-result-el")
const massResultEl = document.getElementById("mass-result-el")


convertBtn.addEventListener("click", function() {
    
    removeResultFromDom()
    let valueToConvert = 0
    valueToConvert = Number(inputValue.value)
    convertToLength(valueToConvert)
    convertToVolume(valueToConvert)
    convertToMass(valueToConvert)
})

function convertToLength(input) {
    
    let lengthValues = {
        meterToFeet: 0,
        feetToMeter: 0
    }
    
    lengthValues.meterToFeet = (input * 3.281).toFixed(3)
    lengthValues.feetToMeter = (input * 0.3048).toFixed(3)
    
    renderLengthString(lengthValues)
}


function convertToVolume(input) {
    let volumeValues = {
        literToGallon: 0,
        gallonToLiter: 0
    }
    
    volumeValues.literToGallon = (input * 0.264).toFixed(3)
    volumeValues.gallonToLiter = (input * 3.78541).toFixed(3)
    
    renderVolumeString(volumeValues)
}

function convertToMass(input) {
   let massValues = {
        kiloToPound:0,
        poundToKilo:0
    }
    
    massValues.kiloToPound = (input * 2.204).toFixed(3)
    massValues.poundToKilo = (input * 0.453592).toFixed(3)
    
    renderMassString(massValues)
}

function renderLengthString(lengthValuesObject) {
    lengthResultEl.innerHTML += `<p id="length-paragraph">
                                    ${inputValue.value} meters = ${lengthValuesObject.meterToFeet} feet | 
                                    ${inputValue.value} feet = ${lengthValuesObject.feetToMeter} meters
                                 </p>`
}

function renderVolumeString(volumeValuesObject) {
    volumeResultEl.innerHTML += `<p id="volume-paragraph">
                                    ${inputValue.value} liters = ${volumeValuesObject.literToGallon} gallons | 
                                    ${inputValue.value} gallons = ${volumeValuesObject.gallonToLiter} liters
                                 </p>`
}

function renderMassString(massValuesObject) {
    massResultEl.innerHTML += `<p id="mass-paragraph">
                                    ${inputValue.value} kilos = ${massValuesObject.kiloToPound} pounds | 
                                    ${inputValue.value} pounds = ${massValuesObject.poundToKilo} kilos
                                 </p>`
}

function removeResultFromDom() {
    const lengthParagraph = document.getElementById("length-paragraph")
    const volumeParagraph = document.getElementById("volume-paragraph")
    const massParagraph = document.getElementById("mass-paragraph") 
    
    lengthParagraph ? lengthParagraph.remove() : null
    volumeParagraph ? volumeParagraph.remove() : null
    massParagraph ? massParagraph.remove() :  null
}