var n = 2;
var url = "#";
var image = "../images/img1.png";

var myDiv = "<div class='row'><div class='col-lg-12'><h2 class='page-header'>Events</h2></div>";

for (var i=1; i<=n; i++) {
		
	myDiv += "<div class='col-lg-3 col-md-4 col-xs-6 thumb'><a href=" + url + "><img class='img-responsive img-rounded link-home' src=" + image + " alt=''></div>";
}

myDiv += "</div>";
document.write(myDiv);