var path = require('path');

var friendsData = require("../data/friends");

module.exports = function (app) {


    app.get("/survey", function (req, res) {

        console.log(friendsData);
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
    })
};