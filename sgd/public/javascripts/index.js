window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'es-UY';

var btn = document.getElementById('btn1');
var texto = document.createElement('p');
var container = document.getElementById('textbox');

btn.addEventListener('click', () => {
    dictate();

});

function get_mic_data() {
    var query = texto.innerText;
    return console.log(query);
};

const dictate = () => {
    recognition.start();
    recognition.onresult = (event) => {
        const speechToText = event.results[0][0].transcript;
        texto.textContent  = speechToText;
        get_mic_data();
        container.value = (texto.innerHTML);
    };
};

