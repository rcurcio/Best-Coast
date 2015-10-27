var loc_name;
var loc_description;
function change_name(){
	//temp setting value to location. will get multiple location names from database
	loc_name="Location";
	document.getElementById("location_name").innerHTML = loc_name;
}

function change_description(){
	//temp setting value to location description. will get multiple descriptions from database
	loc_description="This is a placeholder description.";
	document.getElementById("location_description").innerHTML = loc_description;
}

window.onload = function(){
	change_name();
	change_description();
}

//using lists.js to generate user comment list
//use AJAX to fill in list from database later on
$(function() {
 
// this sets up a "template" for the list items
var options = {
	valueNames: [ 'imgUrl', 'text' ],
	item: '<li><div class="commenterImage"><img class="imgUrl"/></div><div class="commentText"> <p class="text"></p> </div></li>s'
};
                
//this json is used to generate the comments. each object is a comment -
//use ajax to get the data from the server and then generated the json and passed it into list.js
var values = [{
	imgUrl: 'http://lorempixel.com/50/50/people/5',
	text: "Wow this food is amazing!"
},
	{
	imgUrl: 'http://lorempixel.com/50/50/people/6',
	text: "The beaches here are incredible"
},
	{
	imgUrl: 'http://lorempixel.com/50/50/people/7',
	text: "Don't get the fish tacos at the pier. Just don't."
}];

	var commentList = new List('comments', options, values); // pass the object in
});
        