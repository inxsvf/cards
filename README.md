# Cards

Ver [demo](https://https://users.fba.up.pt/~up200601296/ix/)

## Alterar pergunta

Nas linhas l.3-17 do ficheiro _triggerCard.js_, alterar o texto e os links:

```javascript
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
```

## Usar

Na posiçao que é para aparecer, incluir:
```html
	<div id="shadowHost"></div>

	<script type="text/javascript" src="triggerCard.js"></script>
```









