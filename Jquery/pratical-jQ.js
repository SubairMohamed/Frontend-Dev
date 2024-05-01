//Functions In a Separate File

$(document).ready(function () {
  $("h3").addClass("animate__animated animate__shakeX");
  $("h4").css("padding-top", "2rem");
  $(".well").css("background-color", "orange");
  $("button").css("color", "blue");
  $("#target3").addClass("btn-danger");
  $("#target2").addClass("animate__animated animate__bounce");
  $("#target1").prop("disabled", true);
  $("#left").html("<strong>Left Well</strong>");
  //$("#target6").remove();
  //$("#target2").appendTo("#right-well");
  //$("#target4").clone().appendTo("#left-well");
  $("#target5").parent().css("color", "black");
  $("#right-well").children().css("color", "red");
  $(".btn:nth-child(3)").addClass("animate__animated animate__swing");
  $(".btn:even").css("background-color", "orange");
});

$(function () {
  $(".btn:odd").click(function () {
    $(".btn:odd").css("background-color", "green");
  });
});
