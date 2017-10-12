$(document).ready(function(){

var following=[];

  //free code camp streem info and status api call
  var url= "https://api.twitch.tv/kraken/streams/freecodecamp";

  $.getJSON(url, function(data1){
    if(data1.stream===null){
      $('#fccStatus').html("Freecodecamp is Currently OFFLINE!");

    }
    else{
      $('#fccStatus').html("Freecodecamp is Currently ONLINE!");
    }
  });

  var followerURL= "https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/";

  $.getJSON(followerURL, function(data2){
  for (var i=0; i<data2.follows.length; i++) {
    var displayName= data2.follows[i].channel.display_name;

following.push(displayName);
  }
  following.push('comster404');
  following.push('brunofin');
  following.push('ESL_SC2');

for(var i=0; i<following.length; i++){
  var url2="https://api.twitch.tv/kraken/streams/" +following[i]+ "/?callback=?";
}

$.getJSON(url2).done(function(data3){
  var logo;
  var status;
  var name;
  if(data3.error){
    logo= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
name = data3.message;
status= data3.error;

$('#followerInfo').prepend('<div class = 'row'>' + '<div class='col-md-4'>' + '<img src='' + logo + ''>' + '</div>' + '<div class='col-md-4'>' + name + '</div>' + '</div>' + '<div class='col-md-4'>' + status + '</div></div>');
  }
});
  });
});
