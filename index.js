/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")


const convertBtn = document.getElementById("convert-btn")
let lengthValue = document.getElementById("length")
let volumeValue = document.getElementById("volume")
let massValue = document.getElementById("mass")

function convertLength(value){
    let feet = (Number(value) * 3.281).toFixed(3)
    let meters = (Number(value) / 3.281).toFixed(3)
    let string = `<span>${value} meters = ${feet} feet | ${value} feet =${meters} meter </span>`
    lengthValue.innerHTML = string
}

function convertVolume(value){
    let liters = (Number(value) * 0.264).toFixed(3)
    let gallons = (Number(value) / 0.264).toFixed(3)
    let string = `<span>${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters </span>`
    volumeValue.innerHTML = string
}

function convertMass(value){
    let kilograms = (Number(value) * 2.204).toFixed(3)
    let pounds = (Number(value) / 2.204).toFixed(3)
    let string = `<span>${value} kilograms = ${pounds} pounds | ${value} pounds = ${kilograms} kilograms </span>`
    massValue.innerHTML = string
}

convertBtn.addEventListener("click", function(){
    convertLength(inputEl.value)
    convertVolume(inputEl.value)
    convertMass(inputEl.value)
})