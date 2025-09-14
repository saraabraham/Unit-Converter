/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("inp-el")
const convertBtn = document.getElementById("conv")
const p1 = document.getElementById("len")
const p2 = document.getElementById("vol")
const p3 = document.getElementById("mas")

convertBtn.addEventListener("click", function () {
    if (inputEl.value != null) {
        p1.textContent = `${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meters`
        p2.textContent = `${inputEl.value} litres = ${(inputEl.value * 0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(3)} litres`
        p3.textContent = `${inputEl.value} kilos = ${(inputEl.value * 2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilos`

    }
})