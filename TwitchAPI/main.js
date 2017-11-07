var channels = ['freecodecamp', 'shroud', 'DrDisRespectLIVE', 'Lansky', 'imaqtpie']
channelName = ""
for(i=0; i < channels.length; i++) {
  (function(i) {
    $.ajax({
      url: "https://wind-bow.glitch.me/twitch-api/streams/"+channels[i],
      dataType: 'jsonp', 
      success: function(results) {
        if(results["stream"] == null) {
          $('.twitchLinks').prepend("<div class='row twitchCard all offline'><div class='col'><h1 class='offline-color'>" + channels[i] + " is OFFLINE</h1></div></div>")
        }else{
        $('.twitchLinks').prepend("<div class='row twitchCard all online'><div class='col'><a href='" + results["stream"]["channel"]["_links"]["self"] + "'><h1 class='online-color'>" + results["stream"]["channel"]["display_name"] + " is ONLINE</h1></a><h2>Game: " + results["stream"]["channel"]["game"] + "</h2 class='online-color'></div></div>")
        }
      }
    });
  })(i);
}

$(document).ready(function() {
  $('#allButton').click(function() {
    $('.all').show();
    console.log('works');
  })

  $('#onlineButton').click(function() {
    $('.offline').hide();
    $('.online').show();
  })

  $('#offlineButton').click(function() {
    $('.offline').show();
    $('.online').hide();
  })

})
