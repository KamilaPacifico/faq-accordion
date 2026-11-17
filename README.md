# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [https://github.com/KamilaPacifico/faq-accordion](https://github.com/KamilaPacifico/NOME-DO-REPOSITORIO)
- Live Site URL: [https://kamilapacifico.github.io/faq-accordion/](https://kamilapacifico.github.io/faq-accordion/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- ARIA attributes (`aria-expanded`, `aria-controls`, `aria-labelledby`)

### What I learned

- Using a `<button>` inside a heading for each question gives keyboard support (Tab, Enter, Space) without extra code.
- `aria-expanded` tells screen readers whether an answer is open or closed, and the `hidden` attribute hides the answer.
- Margin collapse can push a whole page down; using `padding` on the `body` fixed it.
- Using `:focus-visible` to show the focus outline only for keyboard users.
- Switching the background image with a `min-width` media query.

```js
botao.setAttribute('aria-expanded', String(!estaAberto));
resposta.hidden = estaAberto;
```

### Continued development

- Add a smooth open/close animation.
- Practice more with accessibility and responsive layouts.

## Author

- GitHub - [@KamilaPacifico](https://github.com/KamilaPacifico)
- Frontend Mentor - [@KamilaPacifico]https://www.frontendmentor.io/profile/KamilaPacifico