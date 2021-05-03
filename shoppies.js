$(document).ready(function () {
    $("form").submit(function (event) {
     var movie = $("#movie").val().trim();

    console.log(movie);

    var title = movie;
    var queryURL = "http://www.omdbapi.com/?s="+ title +"&apikey=aa19abbe";
  
      $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            console.log(response);
            console.log(response.search.title[1])

            for(var i=0; i<response.length; i++){
                // var newDiv = $("<div>");
                // newDiv.addClass("card");
                // var newRow = $("<div>").addClass("row mt-2 mb-0");
                // var imgDiv = $("<div>").addClass("col-lg-6");
                // var infoDiv = $("<div>").addClass("col-lg-6");

                // //results for div
                // var resultsFor = $("<p>");
                // resultsFor.html("<h5>Results For" + title + "</h5>");

                // //titles
                // var movieTitle = response[i].title;
                // console.log(movieTitle)

                // //img
                // var movieImg = $("<img>");
                // movieImg.attr("src", response[i].poster);
                // movieImg.css("width","300px");

                // //appending to div
                // imgDiv.append(movieImg);
                // infoDiv.append("<p>" + movieTitle + "</p>");
                // newRow.append(imgDiv);
                // newRow.append(infoDiv);
                // newDiv.append(newRow);

                // $(".results").append(newDiv);

                console.log(response[i].Actors)

            }




          });
  
      event.preventDefault();
    });
  });