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
setInterval(replaceTtext, 800);