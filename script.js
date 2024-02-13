document.getElementById('yessir').addEventListener('click', () => {
    // Change the background image of the .image div to a new GIF
    document.querySelector('.image').style.backgroundImage = "url('./img/lovegif.gif')";
});

document.getElementById('nooo').addEventListener('mouseover', () => {
    leftPos = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);
    bottomPos = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    document.getElementById('nooo').style.position = "absolute";
    document.getElementById('nooo').style.left = leftPos + "%";
    document.getElementById('nooo').style.bottom = bottomPos + "%";
});

document.getElementById('nooo').addEventListener('click', () => {
    leftPos = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);
    bottomPos = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    document.getElementById('nooo').style.position = "absolute";
    document.getElementById('nooo').style.left = leftPos + "%";
    document.getElementById('nooo').style.bottom = bottomPos + "%";
});
