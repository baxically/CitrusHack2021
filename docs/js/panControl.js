//From WebAudio API example
let audioCtx;
const myAudio = document.querySelector('audio');
const pre = document.querySelector('pre');
const myScript = document.currentScript;

const panControl = document.querySelector('.panning-control');
const panValue = document.querySelector('.panning-value');

pre.innerHTML = myScript.innerHTML;

myAudio.addEventListener('play', () => {
  // Create audio context if it doesn't already exist
  if(!audioCtx) {
    audioCtx = new window.AudioContext();
  }

  // Create a MediaElementAudioSourceNode
  // Feed the HTMLMediaElement into it
  let source = audioCtx.createMediaElementSource(myAudio);

  // Create a stereo panner
  let panNode = audioCtx.createStereoPanner();

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
  panNode.connect(audioCtx.destination);
})