"use strict";

document.addEventListener("DOMContentLoaded", init)

function init() {
    getjsonplantsData()
  //  logLocals()
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
    storeLocalForage(data);
}

function storeLocalForage(data){
    let store =localforage.createInstance({ name: "IBiome"})
    let plntdata= data
    let storedata= [{ id: 1, Temperature: plntdata.Temp},
                    { id: 2, Humidity: plntdata.Humid}];
    store.setItem("Plantdata", storedata).then(function(value){
        console.log("Data stored",value)
    })
}
function logLocals(){
    let store =localforage.createInstance({ name: "IBiome"})
    store.getItem("Plantdata").then(function(value){
        console.log("Data retrieved : " ,value);})
    

}