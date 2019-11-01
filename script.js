<<<<<<< HEAD
$("#search-btn").on("click", function(event){
    event.preventDefault();
    var foodInput = $("#food-input").val().trim();
    getBeer(foodInput);
});

function getBeer(food){
    var queryURL = "https://api.punkapi.com/v2/beers/?food=" + food;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        updateBeer(response);
        var beerYearStr = response[0].first_brewed;
        var beerYear = beerYearStr.slice(3,7);
        console.log(beerYearStr);
        console.log(beerYear);
        getMovie(beerYear);
        // getGif(beer);
    });
}

function updateBeer(response){
    $("#beer").empty();
    var random = Math.floor(Math.random()*response.length);
    var beerName = response[random].name;
    $("#beer").html("<h6>Beer For You: </h6>" + beerName + "!");
    var beerLook = $("<img>").attr("src",response[random].image_url);
    beerLook.attr("width",150);
    $("#beer").append(beerLook);
}

function getMovie(beerYear){
    var queryURL = "https://www.omdbapi.com/?y=" + beerYear + "&t=beer&apikey=trilogy";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        updateMovie(response);
    });
}

function updateMovie(response){
    $("#movie").empty();
    var movieName = response.Title;
    $("#movie").html("<h6>Movie For You: </h6>" + movieName + "!");
    console.log(response);
    var moviePoster = $("<img>").attr("src",response.Poster);
    $("#movie").append(moviePoster);
}

// function getGif(beer){
//     var APIKey = "dc6zaTOxFJmzC";
//     var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=" + APIKey + "&tag=" + beer;
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response){
//          var gifUrl = response.data.image_original_url;
//          var beerImg = $("<img>");
//          beerImg.attr("src", gifUrl);
//          beerImg.attr("width", 300);
//          beerImg.attr("alt", "beer Image");
//          $("#beer").append(beerImg);
//     });
// }
=======
>>>>>>> parent of 17bc871... beerapi done
