const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');

enterButton.addEventListener('click', async (e) => {
    e.preventDefault(); // disable the refresh on the page when submit
    const value = document.getElementById('inputText').value;
    const tBody = document.getElementById('body-table');

    removeAllChildNodes(tBody);

    getresults(value).then( (data) =>  {render(data)});

});

const DOMAIN = 'localhost';
const PORT = 3000;
const ENDPOINT = '/api';
const BASE_PATH = DOMAIN + ":" + PORT;

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
    const resp = await fetch(`api/${heightRef}`);
  console.log(resp.json);
  return  resp.json();
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function render(data) {
  const tBody = document.getElementById('body-table');

  for (const i in data) {



    const row = document.createElement('tr');
    const col1 = document.createElement('td');
    const col2 = document.createElement('td');
    const col3 = document.createElement('td');
    col1.append(`${i}`);
    col2.append(`${data[i][0]}`);
    col3.append(`${data[i][1]}`);

    row.append(col1);
    row.append(col2);
    row.append(col3);

    tBody.appendChild(row);

  }

}





