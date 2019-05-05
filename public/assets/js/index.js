"use strict";

document.addEventListener("DOMContentLoaded", init)

function init() {
    getjsonplantsData()
    logLocals()
}

const url = "https://ibiome.herokuapp.com"
const store = localforage.createInstance({ name: "IBiome" })
function getjsonplantsData() {
    fetch(`${url}/api/data`)
        .then(res => res.json())
        .then(data => storeLocalForage(data))
}

function storeLocalForage(data) {
    let plntdata = data
    let storedata = [{ id: 1, Temperature: plntdata.Temp },
    { id: 2, Humidity: plntdata.Humid }];
    store.setItem("Plantdata", storedata).then(function (value) {
        console.log("Data stored", value)
    })
}
function logLocals() {
    store.getItem("Plantdata").then(function (value) {
        console.log("Data retrieved : ", value);
        document.querySelector("#Temperature").innerHTML = ("" + value[0].Temperature + " °C");
        document.querySelector("#Humidity").innerHTML = ("" + value[1].Humidity + " %");
    });


    


}