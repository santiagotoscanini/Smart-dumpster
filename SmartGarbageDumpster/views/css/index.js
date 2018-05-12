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
/*
const stitch = require("mongodb-stitch")
const clientPromise = stitch.StitchClientFactory.create('smartgarbagedumpster-wxlos');
clientPromise.then(client => {
  const db = client.service('mongodb', 'mongodb-atlas').db('sgd');
  client.login().then(() =>
    db.collection('tipos').updateOne({owner_id: client.authedId()}, {$set:{number:42}}, {upsert:true})
  ).then(() =>
    db.collection('tipos').find({owner_id: client.authedId()}).limit(100).execute()
  ).then(docs => {
    console.log("Found docs", docs)
    console.log("[MongoDB Stitch] Connected to Stitch")
  }).catch(err => {
    console.error(err)
  });
});
*/
