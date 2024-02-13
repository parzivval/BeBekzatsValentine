document.getElementById('yessir').addEventListener('click', () => {
    // Change the background image of the .image div to a new GIF
    document.querySelector('.image').style.backgroundImage = "url('./img/lovegif.gif')";

    // Change the text of the h1 element
    document.querySelector('h1').textContent = "Я не сомневался в твоем правильном выборе🤍";
});


document.getElementById('nooo').addEventListener('mouseover', () => {
    // Increase the range for further movement
    const xMove = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    const yMove = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);

    // Use transform for smoother and faster animation
    document.getElementById('nooo').style.transform = `translate(${xMove}px, ${yMove}px)`;
});
