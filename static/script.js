const wordsToReplaceWith = [
    'Evolve',
    'Help',
    'Research',
    'Communicate',
    'Generate',
    'Sustain',
    'Grow',
    'Grow Your Business',
    'Help Organizations',
    'Reach',
    'Innovate',
    'Collaborate',
    'Elevate',
    'Accelerate',
    'Transform',
    'Enhance',
    'Empower',
    'Achieve',
    'Inspire',
];

wordsToReplaceWith[Math.floor(Math.random() * wordsToReplaceWith.length)];

function replaceTtext() {
    const span = document.getElementById('titleChangeText');
    const wholeTitle = document.getElementById('heroTitle');
    span.style.textDecoration = 'line-through';
    wholeTitle.style.fontSize = '4vw';
    setTimeout(() => {
        wholeTitle.style.fontSize = '5vw';
        span.style.textDecoration = 'none';
        span.innerHTML = wordsToReplaceWith[Math.floor(Math.random() * wordsToReplaceWith.length)];
    }, 230)
}
replaceTtext()
setInterval(replaceTtext, 800)

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progBar").style.width = scrolled + "%";
}