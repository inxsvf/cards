/* load structure and files */
const mainTemplate = "<div class='triggerCard'> <header><hr/></header> <main> <div id='trigger' data-correct-answer=''> <div class='h1'></div> <div class='h2'></div> <p class='secondary'>1323 pessoas já responderam</p> </div> <div id='optionsWrapper'></div> <div id='recommendation' hidden='true'> <div class='h1'>Para saber mais..</div> </div> </main> <footer> <hr/> <p class='secondary right'><a href='#'>Termos e Condições</a></p> </footer> </div>";

const optionTemplate = "<div id='option-{{id}}' class='choice' onclick='ShowAnswers(this)'><span class='text'>{{value}}</span></div>";

const articleTemplate = "<a class='articleCard' href='{{url}}'><div class='h1'>{{title}}</div><span class='thumbnail' style='background-image: url(\"{{img}}\");'></a>";

let host = document.querySelector('#triggerCardRoot');
let shadowRoot = host.attachShadow({mode: 'open'});
shadowRoot.innerHTML = mainTemplate;

let googleFonts = document.createElement('link');
googleFonts.setAttribute('rel', 'stylesheet');
googleFonts.setAttribute('href', 'https://fonts.googleapis.com/css?family=Montserrat:400,700');
document.getElementsByTagName('head')[0].appendChild(googleFonts);

let cssFile = document.createElement('link');
cssFile.setAttribute('rel', 'stylesheet');
cssFile.setAttribute('href', 'https://inxsvf.github.io/cards/main.css');
shadowRoot.querySelector('.triggerCard').appendChild(cssFile);

/* load question */
const triggerData = {
	Question: host.dataset.triggerQuestion, 
	QuestionDescription: host.dataset.triggerDescription, 
	CorrectAnswerId: host.dataset.triggerCorrectAnswer,
	Answers: [
		{ Id: 1, Value: host.dataset.triggerOption1 },
		{ Id: 2, Value: host.dataset.triggerOption2 },
		{ Id: 3, Value: host.dataset.triggerOption3 }
	],
	Result: {
		Title: host.dataset.triggerResultTitle,
		Url: host.dataset.triggerResultUrl,
		Image: host.dataset.triggerResultImageUrl
	}
};

const options = triggerData.Answers.map( obj => optionTemplate.replace("{{id}}", obj.Id).replace("{{value}}", obj.Value) ).join('');

const suggestion = articleTemplate.replace("{{url}}", triggerData.Result.Url)
								  .replace("{{title}}", triggerData.Result.Title)
								  .replace("{{img}}", triggerData.Result.Image);

shadowRoot.querySelector('#trigger').dataset.correctAnswer = 'option-' + triggerData.CorrectAnswerId;
shadowRoot.querySelector('#trigger .h1').textContent = triggerData.Question;
shadowRoot.querySelector('#trigger .h2').textContent = triggerData.QuestionDescription;
shadowRoot.querySelector('#optionsWrapper').innerHTML = options;
shadowRoot.querySelector('#recommendation').innerHTML += suggestion;


/* answer */
const iconResult = "<span class='icon-result'></span>";

function ShowAnswers(choice) {
	DisableSelection();

	ShowResults(choice);

	ShowSuggestion();
};

function DisableSelection() {
	let optionsCollection = shadowRoot.querySelector('#optionsWrapper').children;
	let options = Array.prototype.slice.call( optionsCollection );
	
	options.forEach(function(element) {
		element.removeEventListener("click", ShowAnswers, false);
		element.onclick = null;

		element.classList.add('disabled');
	});
}

function ShowResults(choice) {
	let correctOptionId = shadowRoot.querySelector('#trigger').dataset.correctAnswer;

	let options = shadowRoot.querySelectorAll('[id^=option]');

	options.forEach(function(element) {

		if(element.id == correctOptionId ) {
			element.classList.add('correct');
			element.innerHTML = element.innerHTML + iconResult;
		}
		else if(element.id == choice.id) {
		 	element.classList.add('incorrect');
			element.innerHTML = element.innerHTML + iconResult;
		}
		else {
		 	element.classList.add('incorrect');
		}

	});
		
	choice.classList.add('selected');
}

function ShowSuggestion() {
	let element = shadowRoot.querySelector('#recommendation');
	element.classList.add('fade');
	element.hidden = false;


	let footer = shadowRoot.querySelector('footer');
	footer.style.opacity = 0;
	footer.classList.add('fade');
}



