$("form").submit(function(e) {
    var cityInput = $("#city").val();
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput;
    url += "&&appid=bcd49dc0a841151f291b4e69279dfb71";
    $.get(url, function(res) {
        console.log(res);
        var city = res.name;
        var country = res.sys.country;
        var temp = Math.round((9/5)*(res.main.temp - 273) + 32);
        var infoHTML = "<div class='col-md-6 well'>"
        infoHTML += "<h2>" + city + ", " + country + "</h2>";
        infoHTML += "<p>Current Temperature: " + temp + "&deg;F</p>";
        infoHTML += "</div>"
        $('.weather-data').html(infoHTML);
    }, 'json');

    $('#city').val('');
    e.preventDefault();
});

// http://api.openweathermap.org/data/2.5/weather?q=London,uk&&appid=bcd49dc0a841151f291b4e69279dfb71