$(document).ready(function(){
      $('#searchItem').click(function(){
        var sValue = $('#searchTxt').val();
        var url = "https://en.wikipedia.org/w/api.php/?action=opensearch&search=" + sValue + "&format=json&callback=?";
        
        $.ajax({
          type: "GET",
          url: url,
          async: false,
          dataType: "json",
          success: function (data) {
            $('#output').html('');
            for (var i = 0; i < data[1].length; i++) {
              $('#output').prepend("<a href= " +data[3][i]+ "><section><div><h2>" +data[1][i]+ "</h2><p>" +data[2][i]+ "</p></div></section></a>");
            }
            if(sValue === false) {
              alert("No result Found!");
            }
          },
          error: function (errorTxt) {
             alert("No result Found!");
          }
        });
      });
    });