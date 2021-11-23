const btnStart = document.getElementById('start');
const btnPlay = document.getElementById('play');
const btnStop = document.getElementById('stop');
const input = document.getElementById('input');
let inputValue = ''
let simpleLoop = null
Tone.context.resume();

btnStart.addEventListener('click', () => {
    Tone.context.resume().then(() => Tone.Transport.start());
});


input.addEventListener('input', (event) =>
{
  inputValue = event.target.value
  console.log(event.target.value, 'INput value', inputValue);
  simpleLoop = scribble.clip({ synth: 'Synth', notes: inputValue, pattern: 'x' });
})
btnPlay.addEventListener('click', () =>
{
    simpleLoop.start();
});

btnStop.addEventListener('click', () => {
    simpleLoop.stop();
});
