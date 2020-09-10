console.log('Its working');

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

//$('theme-dot').

function setTheme(mode){
	if(mode == 'light'){
		$('#email-input').css ("color","#4b5156");
		$('#subject-input').css ("color","#4b5156");
		$('#message-input').css ("color","#4b5156");
		$('#name-input').css ("color","#4b5156");
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		$('#email-input').css ("color","white");
		$('#subject-input').css ("color","white");
		$('#message-input').css ("color","white");
		$('#name-input').css ("color","white");
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		$('#email-input').css ("color","white");
		$('#subject-input').css ("color","white");
		$('#message-input').css ("color","white");
		$('#name-input').css ("color","white");
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'red'){
		$('#email-input').css ("color","white");
		$('#subject-input').css ("color","white");
		$('#message-input').css ("color","white");
		$('#name-input').css ("color","white");
		document.getElementById('theme-style').href = 'red.css'
	}

	localStorage.setItem('theme', mode)
}