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