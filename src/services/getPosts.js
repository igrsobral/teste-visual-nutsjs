const axios = require("axios")

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const getPosts = async () => 
  axios
    .get(`${BASE_URL}/posts`)
    .then((res) => res)
    .catch((_) => console.log("can't get the posts"));

module.exports = getPosts;