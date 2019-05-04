"use strict";

document.addEventListener("DOMContentLoaded", init)

function init() {

}

const url = "https://ibiome.herokuapp.com"

fetch(`${url}/api/data`)
    .then(res => res.json())
    .then(data => showData(data))

function showData(plantData) {
    // TODO: make html for plant data
}
