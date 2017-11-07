var channels = ['freecodecamp', 'shroud', 'DrDisRespectLIVE', 'Lansky']
for(var i=0; i < channels.length; i++) {
  $.ajax({
    url: "https://wind-bow.glitch.me/twitch-api/channels/"+channels[i],
    dataType: 'jsonp', 
    success: function(results) {
      console.log(results)
      api_results = results
      $('#allButton').click(function() {
        api_results = results;
      }) 
      $('#onlineButton').click(function() {
        api_results = [];
        if(results["status"] == null) {
          api_results << results[i];
        };
      })
      $('#offlineButton').click(function() {
        api_results = results;
      })
      if(api_results["status"] == null) {
        $('.twitchLinks').prepend("<div class='row twitchCard'><div class='col'><h1>" + api_results["display_name"] + " is OFFLINE</h1></div></div>")
      }else{
      $('.twitchLinks').prepend("<div class='row twitchCard'><div class='col'><a href='" + api_results["url"] + "'><h1>" + api_results["display_name"] + " is ONLINE</h1></a><h2>Game: " + api_results["game"] + "</h2></div></div>")
      }
    }
  });
}