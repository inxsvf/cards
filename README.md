# Cards

Ver [demo](https://users.fba.up.pt/~up200601296/ix/)

## Usage

Na posição onde pretende inserir o _trigger card_, incluir os seguintes elementos, e alterar o conteúdo do _trigger_ pretendido. 
```html
	<div id="triggerCardRoot" 
	data-trigger-question="Em qual destas danças, se perdem mais calorias por aula?"
	data-trigger-description="Prepare-se para a praia e para as festas de verão de uma forma divertida."
	data-trigger-correct-answer="2"
	data-trigger-option1="Samba"
	data-trigger-option2="Zumba"
	data-trigger-option3="Pole-dance"
	data-trigger-result-title="Os melhores tipos de dança para emagrecer e definir o corpo"
	data-trigger-result-url="https://hintigo.com.br/danca-para-emagrecer/"
	data-trigger-result-image-url="https://cdn.hintigo.com.br/uploads/2017/10/danca-para-emagrecer-425x318.jpg"></div>

	<script type="text/javascript" src="https://inxsvf.github.io/cards/triggerCard.js"></script>
```

## Notas

Nas seguintes situações, são referenciados os documentos aqui alojados:

- Ao incluir o _trigger card_ : 
```html
	<script type="text/javascript" src="https://inxsvf.github.io/cards/triggerCard.js"></script>
```

- Ao incluir os estilos, no ficheiro `triggerCard.js` l.19 : 
```js
	..
	let cssFile = document.createElement('link');
	cssFile.setAttribute('href', 'https://inxsvf.github.io/cards/main.css');
	..
```









