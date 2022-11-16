// const express = require('express')

const API = "https://2a6jbzx4xd.execute-api.us-east-1.amazonaws.com/items";
// const API = "https://api.escuelajs.co/api/v1/products"
// const API = "https://keb6atfcl0.execute-api.us-east-1.amazonaws.com/prueba/request-front/recordsprocess/"

const monthSelect = document.getElementById('month')

function getMonth() {
    console.log(monthSelect.value)
}


async function data() {
    const container = document.getElementById('show')
    const data = await getData()
    console.log(data)
    // let name = document.createElement(h1);
    data.forEach(dat => {
        // console.log('fecha', dat.time)
        let containerSpan = document.createElement('div')

        let timeSpan = document.createElement('h4')
        timeSpan.textContent = dat.time
        containerSpan.appendChild(timeSpan)

        let temperatureSpan = document.createElement('span')
        temperatureSpan.textContent = `Temperatura ambiental: ${dat.temperature}C y Humedad relativa: ${dat.humidity}% en ${dat.ubication}`;
        containerSpan.appendChild(temperatureSpan)

        container.appendChild(containerSpan)
    })
}

async function getData() {
    // const res = await fetch("https://api.escuelajs.co/api/v1/products")
    const res = await fetch(API)
    const data = await res.json()
    // console.log(data.Items[0].time)
    return data.Items;
}

// getData()
data()