
/* question definition */
const triggerData = {
	Question: "Em qual destas danças, se perdem mais calorias por aula?", 
	QuestionDescription: "Prepare-se para a praia e para as festas de verão de uma forma divertida.", 
	CorrectAnswerId: 2,
	Answers: [
		{ Id: 1, Value: "Samba" },
		{ Id: 2, Value: "Zumba" },
		{ Id: 3, Value: "Pole-dance" }
	],
	Result: {
		Title: "Os melhores tipos de dança para emagrecer e definir o corpo",
		Url: "https://hintigo.com.br/danca-para-emagrecer/",
		Image: "https://cdn.hintigo.com.br/uploads/2017/10/danca-para-emagrecer-425x318.jpg"
	}
};
/* END question definition */


/* load structure and files */
const mainTemplate = "<div class='triggerCard'> <header><hr/></header> <main> <div id='trigger' data-correctAnswer=''> <h1></h1> <h2></h2> <p class='secondary'>1323 pessoas já responderam</p> </div> <div id='optionsWrapper'></div> <div id='recommendation' hidden='true'> <h1>Para saber mais..</h1> </div> </main> <footer> <hr/> <p class='secondary right'><a href='#'>Termos e Condições</a></p> </footer> </div>";

const optionTemplate = "<div id='option-{{id}}' class='choice' onclick='ShowAnswers(this)'><span class='text'>{{value}}</span></div>";

const articleTemplate = "<a class='articleCard' href='{{url}}'><h1>{{title}}</h1><span class='thumbnail' style='background-image: url(\"{{img}}\");'></a>";

let host = document.querySelector('#shadowHost');
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
const options = triggerData.Answers.map( obj => optionTemplate.replace("{{id}}", obj.Id).replace("{{value}}", obj.Value) ).join('');

const suggestion = articleTemplate.replace("{{url}}", triggerData.Result.Url)
								  .replace("{{title}}", triggerData.Result.Title)
								  .replace("{{img}}", triggerData.Result.Image);

shadowRoot.querySelector('#trigger').dataset.correctanswer = 'option-' + triggerData.CorrectAnswerId;
shadowRoot.querySelector('#trigger h1').textContent = triggerData.Question;
shadowRoot.querySelector('#trigger h2').textContent = triggerData.QuestionDescription;
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
	let correctOptionId = shadowRoot.querySelector('#trigger').dataset.correctanswer;

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



