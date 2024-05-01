$(document).ready(function () {
  // Name
  $("#name").focus(function () {
    $("#s-name").html("Please Enter Your Name");
  });

  $("#name").blur(function () {
    $("#s-name").html("");
  });
  //ends Name

  // Email
  $("#email").focus(function () {
    $("#s-email").html("Please Enter Your Email");
  });

  $("#email").blur(function () {
    $("#s-email").html("");
  });
  //ends Email

  //Phone
  $("#number").focus(function () {
    $("#s-number").html("Please Enter Your Phone");
  });

  $("#number").blur(function () {
    $("#s-number").html("");
  });
  // Ends Phone

  //Subject
  $("#subject").focus(function () {
    $("#s-subject").html("Please Enter Your Subject");
  });

  $("#subject").blur(function () {
    $("#s-subject").html("");
  });
  //Ends Subject

  // Message
  $("#message").focus(function () {
    $("#s-message").html("Please Enter Your Message");
  });

  $("#message").blur(function () {
    $("#s-message").html("");
  });
  //Ends Message

  $(".btn").click(function () {
    $("#card").hide();
  });
});
