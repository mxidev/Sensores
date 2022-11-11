var axios = require('axios');
var token = '';

var data = JSON.stringify({
  "username": "alumnos@alumnos.org",
  "password": "m7a/s99"
});

var config = {
  method: 'post',
  url: 'http://18.214.103.65:8080/api/auth/login',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  data : data
};

axios(config)
  .then(function (response) {
    token = response.data.token;
    console.log("Token obtenido:",token)
    module.exports = token;
  })
  .catch(function (error) {
    console.log(error);
  });