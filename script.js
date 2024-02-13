// Your existing JavaScript setup for changing the image and text on 'yessir' click
document.getElementById('yessir').addEventListener('click', () => {
    const imageDiv = document.querySelector('.image');
    const header = document.querySelector('h1');

    imageDiv.style.backgroundImage = "url('./img/lovegif.gif')";
    imageDiv.classList.add('image-change-animation');
    header.textContent = "Я не сомневался в твоем правильном выборе🤍";
    header.classList.add('text-change-animation');
});

// Attach animationend listeners directly to elements being animated
document.querySelectorAll('.image-change-animation, .text-change-animation').forEach(el => {
    el.addEventListener('animationend', () => {
        el.classList.remove('image-change-animation', 'text-change-animation');
    });
});

const noButton = document.getElementById('nooo');

function moveButton() {
    const xMove = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    const yMove = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);

    noButton.style.transform = `translate(${xMove}px, ${yMove}px)`;
}

// Apply moveButton for both mouseover and touchstart events
noButton.addEventListener('mouseover', moveButton);
noButton.addEventListener('touchstart', moveButton, {passive: true});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '🤍'; // Using the heart emoji
    // Randomly position hearts at the start
    heart.style.left = `${Math.random() * 100}%`;
    // Randomize the size of the hearts
    heart.style.fontSize = `${Math.random() * (30 - 10) + 10}px`; // Sizes between 10px and 30px
    // Randomize the animation duration to make the movement vary
    heart.style.animationDuration = `${Math.random() * (5 - 2) + 2}s`; // Durations between 2s and 5s
    // Start animation at a random delay to avoid a uniform flow
    heart.style.animationDelay = `${Math.random() * 2}s`;
    // Adjust the sideways movement to ensure hearts float more naturally
    heart.style.transform = `translateX(${Math.random() * (50 - -50) + -50}%)`; // Starts at random X positions
    document.body.appendChild(heart);

    // Remove heart after it finishes floating to avoid DOM overload
    setTimeout(() => {
        heart.remove();
    }, 5000); // Adjust based on the longest possible animation duration
}

// Create a new heart every 300 milliseconds
setInterval(createHeart, 300);
