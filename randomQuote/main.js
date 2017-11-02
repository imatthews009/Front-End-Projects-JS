var text;
var author;

$(document).ready(function() {
  function getQuote() {
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(results){
        text = results['quoteText'] 
        author = results['quoteAuthor'] 
        $('#quoteText').html(text);
        $('#quoteAuthor').html(author);
      }
    });
  };
  getQuote();

  
  $('.quoteButton').click(function() {
    getQuote();
  });  

  $('.shareButton').click(function() {
    { window.open("https://twitter.com/share?url="+escape(window.location.href)+"&text="+text + ' - ' + author, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false; }
  });

});