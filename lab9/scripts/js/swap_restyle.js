var counter = 0;
$(document).ready(function() {
	
	selectPage();
	selectModel();

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
		});
	}

	function selectModel() {

		$('#navCoke').click(function(){
			$('#coke').show();
			$('#sprite').hide();
			$('#pepper').hide();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').hide(); 
		});

		$('#navSprite').click(function(){
			$('#coke').hide();
			$('#sprite').show();
			$('#pepper').hide();
			$('#interaction').show(); 
			$('#cokeDescription').hide();
			$('#spriteDescription').show();
			$('#pepperDescription').hide();  	  	  
		});

		$('#navPepper').click(function(){
			$('#coke').hide();
			$('#sprite').hide();
			$('#pepper').show();
			$('#interaction').show(); 
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').show(); 	   
		});
	}
});
function changeLook() {
	counter += 1;
	switch (counter) {
	  case 1:
		document.getElementById('bodyColor').style.backgroundColor = '#2C3E50'; // Deep blue
		document.getElementById('headerColor').style.backgroundColor = '#4A235A'; // Deep purple
		document.getElementById('footerColor').style.backgroundColor = '#1B4F72'; // Deep indigo
		break;
	  case 2:
		document.getElementById('bodyColor').style.backgroundColor = '#2E4053'; // Deep blue-gray
		document.getElementById('headerColor').style.backgroundColor = '#6C3483'; // Deep lavender
		document.getElementById('footerColor').style.backgroundColor = '#186A3B'; // Deep green
		break;
	  case 3:
		document.getElementById('bodyColor').style.backgroundColor = '#34495E'; // Deep gray
		document.getElementById('headerColor').style.backgroundColor = '#7D3C98'; // Deep violet
		document.getElementById('footerColor').style.backgroundColor = '#154360'; // Deep blue
		break;
	  case 4:
		counter = 0;
		document.getElementById('bodyColor').style.backgroundColor = '#2C3E50'; // Deep blue
		document.getElementById('headerColor').style.backgroundColor = '#4A235A'; // Deep purple
		document.getElementById('footerColor').style.backgroundColor = '#1B4F72'; // Deep indigo
		break;
	}
  }
  
  function changeBack() {
	document.getElementById('bodyColor').style.backgroundColor = '#FFFFFF';
	document.getElementById('headerColor').style.backgroundColor = '#273746'; // Deep gray
	document.getElementById('footerColor').style.backgroundColor = '#273746'; // Deep gray
  }
  