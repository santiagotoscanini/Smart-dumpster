window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'es-UY';

var btn = document.getElementById('btn1');
var texto = document.createElement('p');
var container = document.getElementById('textbox');


btn.addEventListener('click', () => {
    dictate();
});

const dictate = () => {
    recognition.start();
    recognition.onresult = (event) => {
        const speechToText = event.results[0][0].transcript;
        texto.textContent  = speechToText;
        container.value = (texto.innerHTML);
    }
}