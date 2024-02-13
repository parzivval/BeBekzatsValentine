document.getElementById('yessir').addEventListener('click', () => {
    // Change the background image of the .image div to a new GIF
    document.querySelector('.image').style.backgroundImage = "url('./img/lovegif.gif')";
});

document.getElementById('nooo').addEventListener('mouseover', () => {
    // Calculate new positions for the button
    const xMove = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);
    const yMove = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);

    // Use transform for smoother animation
    document.getElementById('nooo').style.transform = `translate(${xMove}px, ${yMove}px)`;
});
