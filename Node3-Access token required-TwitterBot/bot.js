console.log("Bot has started.");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

// var stream = T.stream('user');
 
// stream.on('follow', followed); 

// function followed(eventMsg) {
// 	var name = eventMsg.source.name;
// 	var screenName = eventMsg.source.screen_name;
// 	tweetIt('.@' + screenName + 'do you like ranbows'); //you will need to modify the tweetIn function so this can work for example:- tweetIn(txt) 

// }

//To set an interval use this function under
setInterval(tweetIt, 1000*60);

tweetIt();

//({
 
//});

// T.get('search/tweets', { q: 'rainbow', count: 2 }, function(err, data, response) {
//   var tweets = data.statuses;
//   for(var i = 0;i < tweets.length; i++){
//   	console.log(tweets[i].text);
//   }
// })
function tweetIt(){
	var r = Math.floor(Math.random()* 100);
T.post('statuses/update', { status: 'Random number ' + r }, function(err, data, response) {
  if(err){
  	console.log("Something went wrong.");
  }else{
  	console.log("It worked!");
  }

  
})
}