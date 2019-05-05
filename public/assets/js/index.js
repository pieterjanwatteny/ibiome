"use strict";

document.addEventListener("DOMContentLoaded", init)

function init() {
    console.log("ooof");
    getjsonplantsData()
}

const url = "https://ibiome.herokuapp.com"

function getjsonplantsData(){
fetch(`${url}/api/data`)
    .then(res => res.json())
    .then(data => showData(data))
}

function showData(plantData) {
     let data=plantData
  
    document.querySelector("#Temperature").innerHTML =("Temperature = "+data.Temp +" °C");
    document.querySelector("#Humidity").innerHTML=("Humidity = "+data.Humid +" %")

}
