var position = 0;

$("#right").click(function() {
  console.log(position);
  if (position > 0) {
    position -= 300;
    $(".block").animate({
      "left": "+=300px"
    }, "slow");
  }
});

$("#left").click(function() {
  console.log(position);
  if (position <= 4500) {
    position += 300;
    $(".block").animate({
      "left": "-=300px"
    }, "slow");
  }



});
