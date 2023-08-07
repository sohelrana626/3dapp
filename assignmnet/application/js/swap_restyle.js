// JavaScript Document
var counter = 0;
$(document).ready(function() {
	
	selectPage();
	
});

function selectPage() {

	$('#home').show();
	$('#about').hide();
	$('#models').hide();
	$('#interaction').hide();
	$('#cokeDescription').hide();
	$('#spriteDescription').hide(); 
	$('#pepperDescription').hide(); 


	$('#navHome').click(function(){
		$('#home').show();
		$('#about').hide();
		$('#models').hide();
		$('#interaction').hide();
		$('#cokeDescription').hide();
		$('#spriteDescription').hide(); 
		$('#pepperDescription').hide(); 	  
	});

	$('#navAbout').click(function(){
		$('#home').hide();
		$('#about').show();
		$('#models').hide();
		$('#interaction').hide();
		$('#cokeDescription').hide();
		$('#spriteDescription').hide(); 
		$('#pepperDescription').hide(); 	  
	});

	$('#navModels').click(function(){
		$('#home').hide();
		$('#about').hide();
		$('#models').show();
		$('#interaction').show(); 
		$('#cokeDescription').show();
		$('#spriteDescription').hide(); 
		$('#pepperDescription').hide();
		$("#x3dModelTitle_coke").show();
		$("#x3dModelTitle_sprite").hide();
		$("#x3dModelTitle_pepper").hide();
		$("#x3dCreationMethod_coke").show();
		$("#x3dCreationMethod_sprite").hide();
		$("#x3dCreationMethod_pepper").hide(); 
	});
}

function cokeDescription() {
	$("button").click(function(){
		
		$("#cokeDescription").show();
        $("#spriteDescription").hide();
		$("#pepperDescription").hide();
		
		$("#x3dModelTitle_coke").show();
		$("#x3dModelTitle_sprite").hide();
		$("#x3dModelTitle_pepper").hide();

		$("#x3dCreationMethod_coke").show();
		$("#x3dCreationMethod_sprite").hide();
		$("#x3dCreationMethod_pepper").hide();

    }); 
}

function spriteDescription() {
    $("button").click(function(){

        $("#cokeDescription").hide();
        $("#spriteDescription").show();
		$("#pepperDescription").hide();
		
		$("#x3dModelTitle_coke").hide();
		$("#x3dModelTitle_sprite").show();
		$("#x3dModelTitle_pepper").hide();

		$("#x3dCreationMethod_coke").hide();
		$("#x3dCreationMethod_sprite").show();
		$("#x3dCreationMethod_pepper").hide();
    }); 
}

function pepperDescription() {
    $("button").click(function(){

        $("#cokeDescription").hide();
        $("#spriteDescription").hide();
		$("#pepperDescription").show();
		
		$("#x3dModelTitle_coke").hide();
		$("#x3dModelTitle_sprite").hide();
		$("#x3dModelTitle_pepper").show();

		$("#x3dCreationMethod_coke").hide();
		$("#x3dCreationMethod_sprite").hide();
		$("#x3dCreationMethod_pepper").show();
    }); 
}

function changeLook() {
	counter += 1;
	switch (counter) {
		case 1:
		  document.getElementById('bodyColor').style.backgroundColor = '#F1C40F'; // Yellow
		  document.getElementById('headerColor').style.backgroundColor = '#3498DB'; // Blue
		  document.getElementById('footerColor').style.backgroundColor = '#27AE60'; // Green
		  break;
		case 2:
		  document.getElementById('bodyColor').style.backgroundColor = '#9B59B6'; // Purple
		  document.getElementById('headerColor').style.backgroundColor = '#E74C3C'; // Red
		  document.getElementById('footerColor').style.backgroundColor = '#2ECC71'; // Green
		  break;
		case 3:
		  document.getElementById('bodyColor').style.backgroundColor = '#FF5733'; // Bright Orange
		  document.getElementById('headerColor').style.backgroundColor = '#1ABC9C'; // Turquoise
		  document.getElementById('footerColor').style.backgroundColor = '#9A7D0A'; // Dark Yellow
		  break;
		case 4:
		  counter = 0;
		  document.getElementById('bodyColor').style.backgroundColor = '#7D3C98'; // Dark Purple
		  document.getElementById('headerColor').style.backgroundColor = '#F39C12'; // Orange
		  document.getElementById('footerColor').style.backgroundColor = '#8E44AD'; // Violet
		  break;
	}
}
function changeBack() {
	document.getElementById('bodyColor').style.backgroundColor = '#FFFFFF';
	document.getElementById('headerColor').style.backgroundColor = 'rgba(175,0,0,1)';
	document.getElementById('footerColor').style.backgroundColor = 'rgba(175,0,0,1)';
}

