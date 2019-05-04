"use strict";

document.addEventListener("DOMContentLoaded", init)

function init() {
getData();
}

const url = "https://ibiome.herokuapp.com"

function getData(){
fetch(`${url}/api/data`)
    .then(res => res.json())
    .then(data => showData(data))
}

function showData(plantData) {
    console.log(plantData);
}
