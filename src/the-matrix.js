const blessed = require('blessed');
const katakana = require('./lib/katakana.js'); // Import Katakana characters

// Katakana characters
const characters = Object.keys(katakana);

// Screen dimensions
const height = process.stdout.rows;
const width = process.stdout.columns;

// Initialize lines at random positions
let lines = new Array(width * 3).fill(null).map(() => ({
    pos: -Math.floor(Math.random() * height),
    speed: Math.ceil(Math.random() * 5),
    column: Math.floor(Math.random() * width),
    length: Math.floor(Math.random() * height / 2) + 5, // Line length varies
    hasWhite: Math.random() < 0.5, // Only half of the lines will have a white character
}));

// Create a blessed screen
let screen = blessed.screen({
    fullUnicode: true,
});

// Create a text box to hold the matrix animation
let box = blessed.box({
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    tags: true
});
screen.append(box);

function render() {
    // Create an empty frame for this render
    let frame = new Array(height).fill(null).map(() => new Array(width).fill('{green-fg} {/}'));

    // Render each line
    lines.forEach(line => {
        for (let i = 0; i < height; i++) {
            let intensity = '';
            if (i >= line.pos && i < line.pos + line.length) {
                if (i === line.pos + line.length - 1 && line.hasWhite) {
                    intensity = '{bold}{white-fg}'; // Set bottom character to white and bold
                } else if (i >= line.pos && i < line.pos + line.length / 2) {
                    intensity = '{#009200-fg}'; // Bold characters
                } else if (i >= line.pos + line.length / 2 && i < line.pos + line.length * 3 / 4) {
                    intensity = '{bold}{#00ff00-fg}'; // Bold characters
                } else if (i >= line.pos + line.length * 3 / 4) {
                    intensity = '{#005300-fg}'; // Bold characters
                }
                frame[i][line.column] = intensity + getRandomChar() + '{/}';
            }
        }

        line.pos += line.speed;
        if (line.pos - line.speed > height) {
            line.pos = -Math.floor(Math.random() * height);
            line.speed = Math.ceil(Math.random() * 5);
            line.column = Math.floor(Math.random() * width);
            line.length = Math.floor(Math.random() * height / 2) + 5;
            line.hasWhite = Math.random() < 0.2;
        }
    });

    // Update the box content
    box.setContent(frame.map(row => row.join('')).join('\n'));

    // Render the screen
    screen.render();

    // Schedule the next render only after this one is complete
    setTimeout(render, 100);
}

function getRandomChar() {
    // Get random character from Katakana characters
    const randomIndex = Math.floor(Math.random() * characters.length);
    return katakana[characters[randomIndex]];
}


// Start rendering
render();
