"use strict";

document.addEventListener("DOMContentLoaded", init)

function init() {

    getjsonplantsData()
}

const url = "https://ibiome.herokuapp.com"

function getjsonplantsData() {
    fetch(`${url}/api/data`)
        .then(res => res.json())
        .then(data => showData(data))
}

function showData(plantData) {
    let data = plantData;
    document.querySelector("#Temperature").innerHTML = (""+data.Temp + " °C");
    document.querySelector("#Humidity").innerHTML = (""+data.Humid + " %");
}
