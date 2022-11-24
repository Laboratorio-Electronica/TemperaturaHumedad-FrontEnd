const API = "https://60fqd2g261.execute-api.us-east-1.amazonaws.com/records/";

const monthSelect = document.getElementById('month')
const yearSelect = document.getElementById('year')
const table = document.getElementById('table-data')

const sideTable = `
    <h4>Day</h4>
    <h4>Hour</h4>
    <h4>Temperature</h4>
    <h4>Humidity</h4>
`;

function insertDataInColumn(count, data, ubiety) {
    const div = document.createElement('div');
    div.classList.add('table-title')
    
    const title = document.createElement('h3');
    title.textContent = ubiety;
    div.appendChild(title)
    table.appendChild(div)

    for (let i = count; i < count + 10; i++) {
        if(!(i < data.length)) {
            break
        }

        const pDay = document.createElement('p');
        pDay.classList.add('day');
        pDay.textContent = data[i].date.split(' ')[0].split('-')[0]
        div.appendChild(pDay)
        
        const pHour = document.createElement('p');
        pHour.textContent = data[i].date.split(' ')[1]
        div.appendChild(pHour)

        const pTemperature = document.createElement('p');
        pTemperature.textContent = `${data[i].temperature}°C`;
        div.appendChild(pTemperature)

        const pHumidity = document.createElement('p');
        pHumidity.textContent = `${data[i].humidity}%`;
        div.appendChild(pHumidity)
    }
}

async function getData(date) {
    const res = await fetch(API + date)
    const data = await res.json()
    return data.Items;
}

async function sortData(date) {
    const data = await getData(date)
    
    let dataLaboratory = [];
    let dataWarehouse = [];

    data.forEach(element => {
        switch (element.ubiety) {
            case 'laboratory':
                dataLaboratory.push(element)
                break;
            case 'warehouse':
                dataWarehouse.push(element)
                break;
            default:
                console.error(`No hay un array donde almacenar los elementos con ubicación ${element.ubiety}`)
                break;
        }
    });

    for (let counter = 0; counter < data.length; counter = counter + 10) {
        insertDataInColumn(counter,dataLaboratory, "Laboratory")
        insertDataInColumn(counter, dataWarehouse, "Warehouse")
    }
}

function getDate() {
    table.innerHTML = `
    <div class="table-title">
        <h3></h3>
        ${sideTable}
        ${sideTable}
        ${sideTable}
        ${sideTable}
        ${sideTable}
        ${sideTable}
        ${sideTable}
        ${sideTable}
        ${sideTable}
        ${sideTable}
    </div> 
    `;

    sortData(`${monthSelect.value}${yearSelect.value}`);
}

getDate()