function displayComment(comment) {
  $("#comments").append("<div class='comment'><div class='body'>" + comment.body + "</div><div class='link'><a href='" + comment.location + "'>" + comment.location + "</a></div></div>");
}

$(document).ready(function () {
  $.get('http://circleofenergy.com/comments.json', function(data) {
    console.log(data);

    $.each(data.comments, function(i, comment) {
      displayComment(comment);
    });
  });
});