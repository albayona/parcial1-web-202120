const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');

enterButton.addEventListener('click', async (e) => {
    e.preventDefault(); // disable the refresh on the page when submit
    const value = document.getElementById('inputText').value;

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



    const row = document.createElement('row');
    row.innerHTML = `

        <tr>

        
     <td> ${data[i][0]} </td>
     <td> ${data[i][1]} </td>


        </tr>

`
    tBody.appendChild(row);

  }

}





