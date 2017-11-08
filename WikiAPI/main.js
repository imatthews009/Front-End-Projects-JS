function searchWiki(searchedWords) {
  var apiFriendlySearchedWords = searchedWords.replace(" ", "%20");
  $.ajax({
    url: "https://en.wikipedia.org/w/api.php?",
    dataType: 'jsonp',
    data: {
      action: 'opensearch',
      format: 'json',
      search: searchedWords
    },
    success: function(results) {
      console.log(results);
      console.log(results[1]);
      for(var i = 0; i < results[1].length; i++) {
        $('.insertedWikis').prepend("<div class='wikiCards' id='card" + (i+1) + "'><h1><a href='" + results[3][i] + "'>" + results[1][i] + "</a></h1><h2>" + results[2][i] + "</h2></div>");
        console.log(results[3][i]);
      }
    }
  })
}

function randomWiki() {
  location.href = "https://en.wikipedia.org/wiki/Special:Random"
}