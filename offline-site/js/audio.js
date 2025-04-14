// document.onload=()=>playAudio('/skytup/includes/res/1.mp3');
function playAudio(url) {
  let audio = new Audio(url);
  if (audio.play()) {
    audio.audio();
  }else{
    audio.play();
  }
}

function stopSpeaker(speech_text, speech_btn) {
  let btn = document.getElementById(speech_btn);
  speechSynthesis.cancel();
  btn.setAttribute('onclick', 'visualSpeaker("' + speech_text + '","' + speech_btn + '")');
  btn.innerHTML = "<i class='fa fa-volume-up'></i>";
  btn.style.opacity = "50%";
  btn.style.background = "red";
}

function visualSpeaker(speech_text, speech_btn) {
  var convert = document.getElementById(speech_btn),
    speech = document.getElementById(speech_text),
    count = 1;
  convert.setAttribute('onclick', 'stopSpeaker("' + speech_text + '","' + speech_btn + '")');

  if (!speechSynthesis.speaking || speechSynthesis.pause()) {
    speechText = speech.innerText;
    if (!speechText) {
      speechText = speech.value;
    }
    var speechVoice = new SpeechSynthesisUtterance();
    var voices = speechSynthesis.getVoices();
    speechVoice.voice = voices[2];
    speechVoice.text = speechText;
    speechVoice.lang = 'en-in';
    speechSynthesis.speak(speechVoice);
  }

  if (count == 1) {
    speechSynthesis.resume()
    convert.innerHTML = "<i class='fa fa-volume-up fa-spin'></i>";
    convert.style.opacity = "50%";
    convert.style.background = "green";
    setTimeout(() => {
      count = 2;
    }, 300);

  } else {
    convert.innerHTML = "<i class='fa fa-volume-up'></i>";
    speechSynthesis.cancel();
    count = 1;
  }
  setInterval(() => {
    if (!speechSynthesis.speaking && count != 2) {
      convert.style.background = "red";
      convert.innerHTML = "<i class='fa fa-volume-up'></i>";
      count = 1;
      console.log(count);
    }
  }, 100);


}


function quickSpeech(longText) {
  const maxLength = 100; // maximum length of each part
  const parts = longText.match(new RegExp(`.{1,${maxLength}}`, 'g')); // split into parts
  const synth = window.speechSynthesis;
  let currentIndex = 0;

  const speakPart = () => {
    if (currentIndex >= parts.length) return; // reached end of parts

    const utterance = new SpeechSynthesisUtterance(parts[currentIndex]);
    utterance.onend = () => {
      currentIndex++; // move to next part
      speakPart(); // speak next part
    };

    synth.speak(utterance);
  };

  speakPart(); // start speaking the first part
}

function Speech(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}
function quickStop() {
  const synth = window.speechSynthesis;
  if (synth.speaking) {
    synth.cancel();
  }
}
