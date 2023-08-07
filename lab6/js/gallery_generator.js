// Function to create and return an XMLHttpRequest object for making AJAX requests
function getXMLHttp() {
	var xmlHttp;
	try {
		xmlHttp = new XMLHttpRequest();
	} catch (e) {
		try {
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				// If all attempts to create the XMLHttpRequest object fail, return false
				// indicating that AJAX is not supported in the user's browser
				return false;
			}
		}
	}
	return xmlHttp;
}

// Create an XMLHttpRequest object using the getXMLHttp() function
var xmlHttp = getXMLHttp();

// Initialize variables to store the generated HTML code and server response
var htmlCode = "";
var response;

// Wait for the document to be ready before executing the following code
$(document).ready(function() {
	// URL to the server-side PHP function that reads the image directory to find thumbnail file names
	var send = "hook.php";

	// Open the connection to the web server using the GET method
	xmlHttp.open("GET", send, true);

	// Send the request to the server (we are sending nothing, hence null)
	xmlHttp.send(null);

	// Check for changes in the state of the XMLHttpRequest object
	xmlHttp.onreadystatechange = function() {
		// When readyState is 4, the request is complete and a response is received
		if (xmlHttp.readyState == 4) {
			// Split the server response into an array of file names using "~" as the delimiter
			response = xmlHttp.responseText.split("~");

			// Loop through the response array to build the HTML code for the image gallery
			for (var i = 0; i < response.length; i++) {
				htmlCode += '<a href="' + response[i] + '" data-fancybox data-caption="My X3D model render" >';
				htmlCode += '<img class="card-img-top img-thumbnail" src="' + response[i] + '"/>';
				htmlCode += '</a>';
			}

			// Set the generated HTML code as the content of the 'gallery' element in the DOM
			document.getElementById('gallery').innerHTML = htmlCode;
		}
	};
});
