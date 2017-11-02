$(document).ready(function() {
  function newQuote() {
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(apiResponse) {
        quote = apiResponse.quoteText;        
        if (apiResponse.quoteAuthor) {
          author = "said by " + apiResponse.quoteAuthor;
          $('.author').html(author);
        } else {
          $('.author').html("Unknown");
        }
        $('.saying').html(quote);
        
      }
    });
  };
  newQuote();
  
  $('.get-quote').click(function() {
    newQuote();
  });
  
  $('.share-quote').click(function() {
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " — " + author));
  });
});