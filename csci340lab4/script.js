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
           var elem = document.getElementById("dogGet");
           elem.value = "Locate ($5 per click)";
           var $num = $("#randNum");
           $.ajax({
            type: "GET",
            dataType: "json",
            url: "https://api.math.tools/numbers/random?min=214&max=1743&total=1",
            success: function(result) {
               $num.text(result + " miles away");
               console.log(result);
               console.log(num);
            },
            error: function(xhr,status,error) {
              console.log(error);
            }
          });
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