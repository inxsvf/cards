# Trigger Cards

<p align="center">
    <a href="https://inxsvf.github.io/cards/example2.html">View Demo</a>
    ·
    <a href="https://inxsvf.github.io/cards/example1.html">View Trigger Card</a>
  </p>
<p align="center">
  <img src="https://raw.githubusercontent.com/inxsvf/cards/master/aux/cards.png" alt="View Demo" height="150">
</p>


## Description

_Trigger Cards_ loads a multiple-choice question into your webpage. 

This project was developed using plain JavaScript. 

## Usage

Include the following code section where you want your _trigger card_ to appear, and change its contents.

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
	cssFile.setAttribute('href', 'https://inxsvf.github.io/cards/main.css');
	..
```

- in your page: 
```html
	<script type="text/javascript" src="https://inxsvf.github.io/cards/src/triggerCard.js"></script>
```






