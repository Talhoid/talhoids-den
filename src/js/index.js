let code = document.getElementById("code");
let string = "Talhoid";
let timeSpan = 3000;
let done = false;
let id;
const ease = (a)=>{return .5<a?4*Math.pow(a-1,3)+1:4*Math.pow(a,3)};
function loop () {
  let value = ease(performance.now() / timeSpan > 1 ? 1 : performance.now() / timeSpan);
  let howManyChars = Math.floor(ease(performance.now() / timeSpan > 1 ? 1 : performance.now() / timeSpan) * string.length);
  code.innerText = [...string].map(e => Math.random() > value ? String.fromCharCode(Math.random() * 255) : e).join("").slice(0, howManyChars);
  id = (value != 1 ? window.requestAnimationFrame : i => { window.cancelAnimationFrame(i); darkSwitch() })(value != 1 ? loop : id);
}
function darkSwitch() {
  document.documentElement.classList.add('dark');
}
loop();

// explain the code
