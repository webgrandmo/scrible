const btnStart = document.getElementById('start');
const btnPlay = document.getElementById('play');
const btnStop = document.getElementById('stop');
const input = document.getElementById('input');
let inputValue = ''
Tone.context.resume();

btnStart.addEventListener('click', () => {
    Tone.context.resume().then(() => Tone.Transport.start());
});
const simpleLoop = scribble.clip({ synth: 'Synth', notes: 'c4', pattern: 'x' });

input.addEventListener('input', (event) =>
{
  inputValue = event.target.value
  console.log(event.target.value, 'INput value', inputValue);
  return inputValue
})
btnPlay.addEventListener('click', () =>
{
    simpleLoop.start();
});

btnStop.addEventListener('click', () => {
    simpleLoop.stop();
});
