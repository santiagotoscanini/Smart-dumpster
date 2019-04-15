window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'es-UY';

var btn = document.getElementById('btn1');
var texto = document.createElement('p');
var container = document.getElementById('textbox');

document.body.onkeyup= function(e) {
    if(e.keyCode == 32){
        btn.disabled = true;
        dictate();
        setTimeout( function ()  {
            btn.disabled= false;
            container.value = "";
        }, 10000);
    }  

};

function get_mic_data() {
    var query = texto.innerText;

    // Creación de la petición HTTP
    var reqGetDBData = new XMLHttpRequest();
    reqGetDBData.open("GET", `http://localhost:3000/api/residuo/nom/${query}`, false);
    reqGetDBData.send(null);
    console.log(reqGetDBData.responseText);

 

    var request = reqGetDBData.responseText;

    if(request.includes(query)){
        var tipo_amarillo = "amarillo";
        var tipo_azul ="azul";
        var tipo_gris = "gris";
        var tipo_todo = "todo";
        if(request.includes(tipo_gris)){
            var req2 = new XMLHttpRequest();
            req2.open("GET", `/api/residuo/archivo/${1}`,false);
            req2.send(null);
        }else if(request.includes(tipo_azul)){
            var req3 = new XMLHttpRequest();
            req3.open("GET", `/api/residuo/archivo/${2}`,false);
            req3.send(null);
        }else if(request.includes(tipo_amarillo)){
            var req4 = new XMLHttpRequest();
            req4.open("GET", `/api/residuo/archivo/${3}`,false);
            req4.send(null);
        }else if(request.includes(tipo_todo)){
            var req6 = new XMLHttpRequest();
            req6.open("GET", `/api/residuo/archivo/${5}`,false);
            req6.send(null);
        console.log(`todo funciona: `+query);
        }
    }else{
        var req5 = new XMLHttpRequest();
        req5.open("GET", `/api/residuo/archivo/${4}`,false);
        req5.send(null);
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