
// business logic

function Place(place, location, landmark, season) {
  this.location = location;
  this.landmark = landmark;
  this.season = season;
  this.placeName = place;
};

// user interface logic
$(document).ready(function() {
  $("form#place-form").submit(function(event) {
    event.preventDefault();

    var location = $("input#location").val();
    var season = $("input#season").val();
    var landmark = $("input#landmark").val();
    var place = $("input#place-name").val();

    var newPlace = new Place(place, location, landmark, season);
    console.log(newPlace.landmark)

    $("ul#places-list").append("<li>" + "<span class='placeName'>" + newPlace.placeName + "</span>" + "</li>");

    $(".placeName").last().click(function() {
    $("#show-place").show();
    $("#show-place h2").text(newPlace.placeName);
    $(".location").text(newPlace.location);
    $(".landmark").text(newPlace.landmark);
    $(".season").text(newPlace.season);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");


  });
});
