// Check for stored theme preference
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'night') {
        document.body.classList.add('night-mode');
        document.querySelector('header').classList.add('night-mode');
        document.querySelector('footer').classList.add('night-mode');
    }

    const modeToggle = document.getElementById('modeToggle');
    modeToggle.addEventListener('click', toggleMode);
});

function toggleMode() {
    const isNight = document.body.classList.contains('night-mode');
    
    // Switch to day mode
    if (isNight) {
        document.body.classList.remove('night-mode');
        document.querySelector('header').classList.remove('night-mode');
        document.querySelector('footer').classList.remove('night-mode');
        localStorage.setItem('theme', 'day');
    } 
    // Switch to night mode
    else {
        document.body.classList.add('night-mode');
        document.querySelector('header').classList.add('night-mode');
        document.querySelector('footer').classList.add('night-mode');
        localStorage.setItem('theme', 'night');
    }
}
