var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://world-time2.p.rapidapi.com/timezone/Europe/London",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "world-time2.p.rapidapi.com",
		"x-rapidapi-key": "3dde0c7db6msh3941d0e19dd1af4p153f4fjsneb0f9d8822cd"
	}
}

$.ajax(settings).done(function (response) {
	console.log(moment(response.datetime.substring(0, response.datetime.length-13)).format('MMMM Do YYYY, h:mm:ss a'))
});