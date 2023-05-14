// Obtener el primer elemento <article>
var article = document.querySelector('article:first-of-type');

// Obtener una lista de todos los elementos <p> dentro del primer <article>
var paragraphs = article.querySelectorAll('p');

// Configurar la animación para cada párrafo
var animationDuration = 500; // Duración de la animación en milisegundos
var delayBetweenParagraphs = 250; // Retraso entre cada párrafo en milisegundos
var startY = 20; // Posición de inicio en píxeles

for (var i = 0; i < paragraphs.length; i++) {
    // Ocultar el párrafo antes de animarlo
    paragraphs[i].style.opacity = 0;
    paragraphs[i].style.transform = 'translateY(' + startY + 'px)';

    // Configurar la animación
    paragraphs[i].style.transitionProperty = 'opacity, transform';
    paragraphs[i].style.transitionDuration = animationDuration + 'ms';
    paragraphs[i].style.transitionDelay = (delayBetweenParagraphs * i) + 'ms';
    paragraphs[i].style.transitionTimingFunction = 'ease-out';

    // Mostrar el párrafo con la animación
    setTimeout(function (paragraph) {
        paragraph.style.opacity = 1;
        paragraph.style.transform = 'translateY(0)';
    }, delayBetweenParagraphs * i, paragraphs[i]);
}
