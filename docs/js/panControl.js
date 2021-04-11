//From WebAudio API example
let otherStudentsCtx;
let typingCtx;
let printerCtx;
let seasonsCtx;

var otherStudents = document.getElementById("otherStudents");
var typing = document.getElementById("typing");
var printer = document.getElementById("printer");
var seasons = document.getElementById("seasons");

const myAudio = document.querySelectorAll('audio');
const pre = document.querySelector('pre');
const myScript = document.currentScript;

const panControl = document.querySelector('.panning-control');
const panValue = document.querySelector('.panning-value');

pre.innerHTML = myScript.innerHTML;

if(otherStudents && !otherStudentsCtx) {
    myAudio[0].addEventListener('play', () => {
        // Create audio context if it doesn't already exist
        if(!otherStudentsCtx) {
          otherStudentsCtx = new window.AudioContext();
        }
      
        // Create a MediaElementAudioSourceNode
        // Feed the HTMLMediaElement into it
        let source = otherStudentsCtx.createMediaElementSource(myAudio[0]);
      
        // Create a stereo panner
        let panNode = otherStudentsCtx.createStereoPanner();
      
        // Event handler function to increase panning to the right and left
        // when the slider is moved
      
        panControl.oninput = function() {
          panNode.pan.value = panControl.value;
          panValue.innerHTML = panControl.value;
        }
      
        // connect the AudioBufferSourceNode to the gainNode
        // and the gainNode to the destination, so we can play the
        // music and adjust the panning using the controls
        source.connect(panNode);
        panNode.connect(otherStudentsCtx.destination);
      })
}

if(typing && !typingCtx) {
    myAudio[1].addEventListener('play', () => {
        if(!typingCtx) {
          typingCtx = new window.AudioContext();
        }

        let source = typingCtx.createMediaElementSource(myAudio[1]);

        let panNode = typingCtx.createStereoPanner();
      
        panControl.oninput = function() {
          panNode.pan.value = panControl.value;
          panValue.innerHTML = panControl.value;
        }

        source.connect(panNode);
        panNode.connect(typingCtx.destination);
      })
}

if(printer && !printerCtx) {
    myAudio[2].addEventListener('play', () => {
        if(!printerCtx) {
          printerCtx = new window.AudioContext();
        }

        let source = printerCtx.createMediaElementSource(myAudio[2]);

        let panNode = printerCtx.createStereoPanner();
      
        panControl.oninput = function() {
          panNode.pan.value = panControl.value;
          panValue.innerHTML = panControl.value;
        }

        source.connect(panNode);
        panNode.connect(printerCtx.destination);
      })
}

if(seasons && !seasonsCtx) {
    myAudio[3].addEventListener('play', () => {
        if(!typingCtx) {
          seasonsCtx = new window.AudioContext();
        }

        let source = seasonsCtx.createMediaElementSource(myAudio[3]);

        let panNode = seasonsCtx.createStereoPanner();
      
        panControl.oninput = function() {
          panNode.pan.value = panControl.value;
          panValue.innerHTML = panControl.value;
        }

        source.connect(panNode);
        panNode.connect(seasonsCtx.destination);
      })
}