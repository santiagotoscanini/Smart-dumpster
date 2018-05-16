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

    // Creación de la petición HTTP
    var req = new XMLHttpRequest();
    // Petición HTTP GET síncrona hacia el archivo del servidor${query}
    req.open("GET", `http://localhost:3000/api/residuo/nom/${query}`,false);
    // null pq es get
    req.send(null);
    // Impresión por la consola de la respuesta recibida desde el servidor
    console.log(req.responseText);
    var request = req.responseText;
    if(request.includes(query)){
        console.log(`existe `+query);
    }
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