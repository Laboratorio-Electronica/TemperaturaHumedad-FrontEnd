const API = "https://60fqd2g261.execute-api.us-east-1.amazonaws.com/records/";

const monthSelect = document.getElementById('month')
const yearSelect = document.getElementById('year')

function getDate() {
    table.innerHTML = `
    <div class="table-title">
        <h3></h3>
        <h4>Day</h4>
        <h4>Hour</h4>
        <h4>Temperature</h4>
        <h4>Humidity</h4>
        <h4>Day</h4>
        <h4>Hour</h4>
        <h4>Temperature</h4>
        <h4>Humidity</h4>
        <h4>Day</h4>
        <h4>Hour</h4>
        <h4>Temperature</h4>
        <h4>Humidity</h4>
        <h4>Day</h4>
        <h4>Hour</h4>
        <h4>Temperature</h4>
        <h4>Humidity</h4>
        <h4>Day</h4>
        <h4>Hour</h4>
        <h4>Temperature</h4>
        <h4>Humidity</h4>
        <h4>Day</h4>
        <h4>Hour</h4>
        <h4>Temperature</h4>
        <h4>Humidity</h4>
        <h4>Day</h4>
        <h4>Hour</h4>
        <h4>Temperature</h4>
        <h4>Humidity</h4>
        <h4>Day</h4>
        <h4>Hour</h4>
        <h4>Temperature</h4>
        <h4>Humidity</h4>
        <h4>Day</h4>
        <h4>Hour</h4>
        <h4>Temperature</h4>
        <h4>Humidity</h4>
        <h4>Day</h4>
        <h4>Hour</h4>
        <h4>Temperature</h4>
        <h4>Humidity</h4>
    </div> 
    `
    data(`${monthSelect.value}${yearSelect.value}`);
}

const table = document.getElementById('table-data')

async function data(date) {
    let dataLaboratory = [];
    let dataWarehouse = [];

    const data = await getData(date)
    data.forEach(element => {
        // console.log(element.ubiety)
        
        switch (element.ubiety) {
            case 'laboratory':
                dataLaboratory.push(element)
                break;
            case 'warehouse':
                dataWarehouse.push(element)
            default:
                break;
        }
    });
    // console.log(dataLaboratory, dataWarehouse)

    for (let contador = 0; contador < data.length; contador = contador + 10) {
        const divLaboratory = document.createElement('div');
        divLaboratory.classList.add('table-title')
        
        const titleLaboratory = document.createElement('h3');
        titleLaboratory.textContent = "Laboratory";
        divLaboratory.appendChild(titleLaboratory)
        table.appendChild(divLaboratory)

        const divWarehouse = document.createElement('div');
        divWarehouse.classList.add('table-title')
        
        const titleWarehouse = document.createElement('h3');
        titleWarehouse.textContent = "Warehouse";
        divWarehouse.appendChild(titleWarehouse)
        table.appendChild(divWarehouse)

        for (let i = contador; i < contador + 10; i++) {
            // console.log(i+1 < dataLaboratory.length)
            if(!(i < dataLaboratory.length)) {
                break
            }
            // console.log(element)
            const pDay = document.createElement('p');
            pDay.classList.add('day');
            // console.log(i-1)
            pDay.textContent = dataLaboratory[i].date.split(' ')[0].split('-')[0]
            divLaboratory.appendChild(pDay)
            
            const pHour = document.createElement('p');
            pHour.textContent = dataLaboratory[i].date.split(' ')[1]
            divLaboratory.appendChild(pHour)

            const pTemperature = document.createElement('p');
            pTemperature.textContent = `${dataLaboratory[i].temperature}°C`;
            divLaboratory.appendChild(pTemperature)

            const pHumidity = document.createElement('p');
            pHumidity.textContent = `${dataLaboratory[i].humidity}%`;
            divLaboratory.appendChild(pHumidity)
        }

        for (let i = contador; i < contador + 10; i++) {
            // console.log(i+1 < dataLaboratory.length)
            if(!(i < dataWarehouse.length)) {
                break
            }
            // console.log(element)
            const pDay = document.createElement('p');
            pDay.classList.add('day');
            // console.log(i-1)
            pDay.textContent = dataWarehouse[i].date.split(' ')[0].split('-')[0]
            divWarehouse.appendChild(pDay)
            
            const pHour = document.createElement('p');
            pHour.textContent = dataWarehouse[i].date.split(' ')[1]
            divWarehouse.appendChild(pHour)

            const pTemperature = document.createElement('p');
            pTemperature.textContent = `${dataWarehouse[i].temperature}°C`;
            divWarehouse.appendChild(pTemperature)

            const pHumidity = document.createElement('p');
            pHumidity.textContent = `${dataWarehouse[i].humidity}%`;
            divWarehouse.appendChild(pHumidity)
        }
        // for (let i = contador; i < contador + 10; i++) {
        //     // console.log(dataLaboratory)
        //     const dat = data[i];
        //     if(dat.ubiety === 'laboratory') {
        //         const pDay = document.createElement('p');
        //         pDay.classList.add('day')
        //         pDay.textContent = dat.date.split(' ')[0].split('-')[0];
        //         divLaboratory.appendChild(pDay)
                
        //         const pHour = document.createElement('p');
        //         pHour.textContent = dat.date.split(' ')[1];
        //         divLaboratory.appendChild(pHour)
                
        //         const pTemperature = document.createElement('p');
        //         pTemperature.textContent = dat.temperature
        //         divLaboratory.appendChild(pTemperature)
                
        //         const pHumidity = document.createElement('p')
        //         pHumidity.textContent = dat.humidity;
        //         divLaboratory.appendChild(pHumidity)
        //     }

        //     if(dat.ubiety === 'warehouse') {
        //         const pDay = document.createElement('p');
        //         pDay.classList.add('day')
        //         pDay.textContent = dat.date.split(' ')[0].split('-')[0];
        //         divWarehouse.appendChild(pDay)
                
        //         const pHour = document.createElement('p');
        //         pHour.textContent = dat.date.split(' ')[1];
        //         divWarehouse.appendChild(pHour)
                
        //         const pTemperature = document.createElement('p');
        //         pTemperature.textContent = dat.temperature
        //         divWarehouse.appendChild(pTemperature)
                
        //         const pHumidity = document.createElement('p')
        //         pHumidity.textContent = dat.humidity;
        //         divWarehouse.appendChild(pHumidity)
        //     }

        //     if(!(i+1 < data.length)) {
        //         break
        //     }
        // }
    }
}

async function getData(date) {
    const res = await fetch(API + date)
    const data = await res.json()
    return data.Items;
}

getDate()