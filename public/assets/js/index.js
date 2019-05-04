"use strict";

document.addEventListener("DOMContentLoaded", init)

function init() {
    console.log("init");
    getjsonplantsData()
}

const url = "https://ibiome.herokuapp.com"

function getjsonplantsData(){
fetch(`${url}/api/data`)
    .then(res => res.json())
    .then(data => showData(data))
}

function showData(plantData) {
    console.log(plantData);
}
