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
    wholeTitle.style.fontSize = '5vw';
    setTimeout(() => {
        wholeTitle.style.fontSize = '5.4vw';
        span.style.textDecoration = 'none';
        span.innerHTML = wordsToReplaceWith[Math.floor(Math.random() * wordsToReplaceWith.length)];
    }, 230)
}
replaceTtext()
setInterval(replaceTtext, 2000)

window.onscroll = function () { progBar() };

function progBar() {
    const nav = document.getElementById('nav');
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progBar").style.width = scrolled + "%";
    function e() {
        if (scrolled < 20) {
            return 15
        } else {
            return scrolled;
        }
    }
    document.getElementById("nav").style.gap = `${e()}px`;
    document.getElementById("branding").style.paddingRight = `${e()}px`;
}

screen.orientation.addEventListener("change", function (e) {
    alert('Landscape works best on most devices - Try it out!');
});

