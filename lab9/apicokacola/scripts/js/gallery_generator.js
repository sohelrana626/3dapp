$(document).ready(function() {
	var xmlHttp = new XMLHttpRequest ();
	var htmlCode = "";
	var response;
	var send = "scripts/php/hook.php";
	xmlHttp.open("GET", send, true);
	xmlHttp.send(null);
	xmlHttp.onreadystatechange = function() {
		if(xmlHttp.readyState == 4) {
			response = xmlHttp.responseText.split("~");
			for (var i=0;i<response.length;i++) {
				htmlCode += '<a href="assets/images/gallery_images' + response[i] +' " ' + ' data-fancybox data-caption="My X3D model render" > ';
				htmlCode += '<img class="card-img-top img-thumbnail" src="assets/images/gallery_images' + response[i] + '"/>';
				htmlCode += '</a>';			
			}
			document.getElementById('gallery').innerHTML = htmlCode;
		}
	}
});
