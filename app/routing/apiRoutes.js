
var friendsData = require("../data/friends");

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
        // console.log(jsonFriends);

    })

    
        // for (var i = 0; i < friend.length; i ++) {
        //     var currentfriend = friends[1]
        //     app.post(route), function (req,res){

        //         best match
        //         users data
        //         users scores
        //         total difference
        //         for (var i = 0; i < curretfriend.score.length; i++) {
        //         total if friend math.add parseint
        // push total into empty variable for HTML
        //         }
        //     }
        // }
    app.post("/api/friends", function(req, res) {

        var newFriendScores = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;
    
        //runs through all current friends in list
        for(var i=0; i<friendsData.length; i++){
          var scoresDiff = 0;
          //run through scores to compare friends
          for(var j=0; j<newFriendScores.length; j++){
            scoresDiff += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(newFriendScores[j])));
          }
    
          //push results into scoresArray
          scoresArray.push(scoresDiff);
        }
    
        //after all friends are compared, find best match
        for(var i=0; i<scoresArray.length; i++){
          if(scoresArray[i] <= scoresArray[bestMatch]){
            bestMatch = i;
          }
        }
    
        //return bestMatch data
        var bff = friendsData[bestMatch];
        res.json(bff);
    
        //pushes new submission into the friendsList array
        friendsData.push(req.body);
      });
};