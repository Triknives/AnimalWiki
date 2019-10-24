
$(document).ready(function(){


  $("form#choices").submit(function(event) {
    var userChoice = parseInt($("#animalChoice").val());
    event.preventDefault();
    console.log(userChoice)
    if (userChoice === 1){
      $("#turtles").show();

    };
  })
});
