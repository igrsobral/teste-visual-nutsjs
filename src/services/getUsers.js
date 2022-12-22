const axios = require("axios")

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const getUsers = async () => 
  axios
    .get(`${BASE_URL}/users`)
    .then((res) => res)
    .catch((_) => console.log("can't get the users"));

module.exports = getUsers;