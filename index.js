// Archivo que muestra los datos de un sensor (Radon)

var axios = require('axios');

var getSensor = {
  method: 'get',
  url: 'http://18.214.103.65:8080/api/plugins/telemetry/DEVICE/723d0580-452d-11ed-b4b1-1bcb8f5daa77/values/timeseries?keys=Fecha,Radon&startTs=1265046352083&endTs=1665029708303',
  headers: {
    'Content-Type': 'application/json', 
    'X-Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbHVtbm9zQGFsdW1ub3Mub3JnIiwic2NvcGVzIjpbIkNVU1RPTUVSX1VTRVIiXSwidXNlcklkIjoiYmJjMmNjNzAtY2FlNS0xMWVjLWI0YjEtMWJjYjhmNWRhYTc3IiwiZW5hYmxlZCI6dHJ1ZSwiaXNQdWJsaWMiOmZhbHNlLCJ0ZW5hbnRJZCI6ImMzOWJiMDMwLWI5Y2MtMTFlYy1iMGZiLWYxMWNhYTU4NTMzOSIsImN1c3RvbWVySWQiOiI1MTZlMWFjMC1jYWUzLTExZWMtYjRiMS0xYmNiOGY1ZGFhNzciLCJpc3MiOiJ0aGluZ3Nib2FyZC5pbyIsImlhdCI6MTY2NTk1ODk5MywiZXhwIjoxNjY1OTY3OTkzfQ.P6_XAerZOzRQ7OtQ6nuGgpxV0d8KsLY4-2LyollBGjWdTUkF0zNboBlLVBbDjrUutUfEc4R8d8UfUNE1MnSwig'
  }
};

axios(getSensor)
	.then(function (response) {
  		console.log(JSON.stringify(response.data));
	})
	.catch(function (error) {
  		console.log(error);
	});
