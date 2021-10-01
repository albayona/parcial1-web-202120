const { response, request } = require('express');
const axios = require('axios');
var api = 'https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players';

const getPairsOfPlayers = async (req = request, resp = response, next) => {

  const data = await getDatafromAnotherServer(api);
  const players = data.values;

  const sum = parseInt(req.params.sum);
  let  selectedPlayers = [];


  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {

      let p_h_1 = parseInt(players[i].h_in);
      let p_h_2 = parseInt(players[j].h_in);
      let total = p_h_1 + p_h_2;
      console.log(total);
      if ( total === sum){
        selectedPlayers.push([players[i].first_name + " " + players[i].last_name, players[j].first_name +  " " +  players[j].last_name]);
      }

    }
  }


  if (selectedPlayers.length > 0){

    resp.json(selectedPlayers);


  }
  else {
    resp.json("No matches found");
  }
};




async function getDatafromAnotherServer(url) {

  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}


module.exports = { getPairsOfPlayers };
