$(document).ready(function() {
   $('#dogGet').click(function() {
     $.ajax({
       dataType: "json",
       url: "https://random.dog/woof.json",
       success: function(results) {
         console.log(results["url"]);
         if (results["url"].endsWith(".mp4")) {
           $('#dog').attr("src", "images/blank.png");
         } else {
           $('#dog').attr("src", results["url"]);
         }
       },
       error: function(xhr,status,error) {
         console.log(error);
       }
     });
   });
   $('#drinkGet').click(function() {
      $.ajax({
        dataType: "json",
        url: "https://coffee.alexflipnote.dev/random.json",
        success: function(results) {
          console.log(results["url"]);
          if (results["url"].endsWith(".mp4")) {
            $('#drink').attr("src", "images/blank.png");
          } else {
            $('#drink').attr("src", results["url"]);
          }
        },
        error: function(xhr,status,error) {
          console.log(error);
        }
      });
    });
 });