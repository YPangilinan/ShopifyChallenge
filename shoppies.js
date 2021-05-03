$(document).ready(function () {
    $("form").submit(function (event) {
     var movie = $("#movie").val().trim();

    console.log(movie);

    var title = movie;
    var queryURL = "http://www.omdbapi.com/?t="+ title +"&apikey=aa19abbe";
  
      $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            console.log(response);
          });
  
      event.preventDefault();
    });
  });