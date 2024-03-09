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
    span.style.textDecoration = 'line-through';
    setTimeout(() => {
        span.style.textDecoration = 'none';
        span.innerHTML = wordsToReplaceWith[Math.floor(Math.random() * wordsToReplaceWith.length)];
    }, 230)
}

setInterval(replaceTtext, 800);