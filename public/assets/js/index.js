"use strict";

document.addEventListener("DOMContentLoaded", init)

function init() {
    console.log("init");
    
}

const url = "https://ibiome.herokuapp.com"

fetch(`${url}/api/data`)
    .then(res => res.json())
    .then(data => showData(data))


function showData(plantData) {
    console.log(plantData);
}
