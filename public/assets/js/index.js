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
    console.log(plantData)
    let data=plantData
    console.log(data["Humid"])
    console.log(data.Temp)
    document.querySelector("#Temperature").innerHTML =("Temperature = "+data.Temp);
    document.querySelector("#Humidity").innerHTML=("Humidity = "+data.Humid)

}
