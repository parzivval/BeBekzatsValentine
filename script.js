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
