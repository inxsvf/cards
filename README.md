# Trigger Cards

Check [demo](https://inxsvf.github.io/cards/example2.html)
Check [just the _trigger card_](https://inxsvf.github.io/cards/example1.html)

Scan the following QR Code to easy access to the demo:
<img src="aux/cards.png" />


## Description

_Trigger Cards_ loads a multiple-choice question into your webpage. 

THis project was developed using Vanilla JavaScript and uses [Shadow DOM API](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot).

## Usage

Include the following code section where you want you _trigger card_ to appear, and change its contents.

```html
	<div id="triggerCardRoot"
	data-trigger-question="<question>"
	data-trigger-description="<description"
	data-trigger-correct-answer="<option number of the correct answer>"
	data-trigger-option-1="Samba"
	data-trigger-option-2="Zumba"
	data-trigger-option-3="Pole-dance"
	data-trigger-result-title="title of the page linked"
	data-trigger-result-url="result page url"
	data-trigger-result-image-url="thumbnail of the page linked"></div>

	<script type="text/javascript" src="https://inxsvf.github.io/cards/src/triggerCard.js"></script>
```

### Notes

When you download the source, be aware to fix the location of the CSS and JavaScript files:

- at l.19 of `triggerCard.js`: 
```js
	..
	let cssFile = document.createElement('link');
	cssFile.setAttribute('href', 'https://inxsvf.github.io/src/cards/main.css');
	..
```

- in your page: 
```html
	<script type="text/javascript" src="https://inxsvf.github.io/src/cards/src/triggerCard.js"></script>
```


