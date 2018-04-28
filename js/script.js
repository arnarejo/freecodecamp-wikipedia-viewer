$(document).ready(function() {
  $("#searching_for").click(function() {
    var search_term = $("#search_term").val();
    var url =
    "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
    search_term +
    "&format=json&callback=?";
    $.ajax({
      url: url,
      type: "GET",
      contentType: "application/json; charset=utf-8",
      async: false,
      dataType: "json",
      success: function(data) {
        for (var i = 0; i < data[1].length; i++) {
          var title = data[1][i];
          var link = data[3][i];
          var text = data[2][i];

          $("#output").append(
            "<a href=" +
            link +
            ">" +
            '<li class="list-group-item list-group-item-action">' +
            "<h4>" +
            title +
            "</h4>" +
            "<p>" +
            text +
            "</p></li></a>"
          );
        }
      }
    });
  });
});
