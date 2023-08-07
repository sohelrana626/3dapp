var counter = 0;

function swap(selected) {
	// First do not display all div id contents
	document.getElementById('home').style.display = 'none';
	document.getElementById('coke').style.display = 'none';
	document.getElementById('sprite').style.display = 'none';
	document.getElementById('pepper').style.display = 'none';
	
	// Then display the selected div id contents	
	document.getElementById(selected).style.display = 'block';
}

function changeLook() {
	counter += 1;
	switch (counter) {
        case 1:
            document.getElementById('bodyColor').style.backgroundColor = '#131a35';
			document.getElementById('headerColor').style.backgroundColor = '#35131a';
			document.getElementById('footerColor').style.backgroundColor = '#1a3513';
            break;
        case 2:
			document.getElementById('bodyColor').style.backgroundColor = '#131a35';
			document.getElementById('headerColor').style.backgroundColor = '#1d1335';
			document.getElementById('footerColor').style.backgroundColor = '#132b35';
            break;
        case 3:
			document.getElementById('bodyColor').style.backgroundColor = '#021f30';
			document.getElementById('headerColor').style.backgroundColor = '#032e3b';
			document.getElementById('footerColor').style.backgroundColor = '#0b1d3d';
            break;
        case 4:
            counter = 0;
			document.getElementById('bodyColor').style.backgroundColor = '#514d5c';
			document.getElementById('headerColor').style.backgroundColor = '#3b3748';
			document.getElementById('footerColor').style.backgroundColor = '#262134';
            break;
		case 4:
			counter = 0;
			document.getElementById('bodyColor').style.backgroundColor = '#cfcfd1';
			document.getElementById('headerColor').style.backgroundColor = '#171717';
			document.getElementById('footerColor').style.backgroundColor = '#2e2e2e';
			break;
    }
}

function changeBack() {
	document.getElementById('bodyColor').style.backgroundColor = '#dee2e6';
	document.getElementById('headerColor').style.backgroundColor = '#222831';
	document.getElementById('footerColor').style.backgroundColor = '#760003';
}