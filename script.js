function getBeer(food){
    var queryURL = "https://api.punkapi.com/v2/beers/?food=" + food;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        updateBeer(response);
        getMovie(beerYear);
    });
}

function updateBeer(response){
    $("#beer").empty();
    var random = Math.floor(Math.random()*response.length);
    var beerName = response[random].name;
    var beerYearStr = response[0].first_brewed;
    var beerYear = beerYearStr.slice(3,7);
    console.log(beerYearStr);
    console.log(beerYear);
    $("#beer").append(beerName);
    getMovie(beerYear);
}

function getMovie(beerYear){
    var queryURL = "https://www.omdbapi.com/?y=" + beerYear + "t=beer&apikey=trilogy";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        updateMovie(response);
    });
}

function updateMovie(response){
    var movieName = response.Title;
    $("#movie").append(movieName);
}

$("#search-btn").on("click", function(event){
    event.preventDefault();
    var foodInput = $("#food-input").val().trim();
    getBeer(foodInput);
});