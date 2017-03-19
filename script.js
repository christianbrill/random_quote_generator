$(document).ready(function() {

   // new quotation button
   $('#newQuote').click(function(e) {
      e.preventDefault();

      // random color selection on button push
      var colorArray = ["#1abc9c", "#3498db", "#9b59b6", "#34495e", "#e67e22", "#27ae60", "#c0392b", "#f1c40f", "#7f8c8d", "#96281B", "#DB0A5B", "#674172", "#336E7B", "#F2784B", "#F39C12"];

      Array.prototype.random = function () {
         return this[Math.floor((Math.random()*this.length))];
      }

      var colorPicked = colorArray.random();

      $('body').css('background-color', colorPicked);
      $('p').css('color', colorPicked);

      // ajax request to andruxnet
      $.ajax({
         url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous',
         type: 'POST',
         data: {},
         dataType:'json',
         success: function(response) {
            $("#quoteDiv p").text("" + response.quote + "");                   $("#author").text("- " + response.author);
                          },
         error: function(err) { alert(err); },
         beforeSend: function(xhr) {
         xhr.setRequestHeader("X-Mashape-Authorization", "ZDRLNucPDUmshnv84BUjqJQcW3ewp1jleEBjsn4t5qLdVhvu5C");}
      }); // ajax end
   }); // button end


   $("#twitter").click(function() {
      var quoteContent = $("#quoteDiv p").text();
      var authorContent = $("#author").text();
      $(this).attr("href", "https://twitter.com/intent/tweet?text=" + quoteContent + authorContent);
      $(this).attr("target", "_blank");
   }); // twitter post link
}); // document.ready end
    
