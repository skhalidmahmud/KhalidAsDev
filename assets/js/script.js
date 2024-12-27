// Day/Night Mode Toggle Functionality
const modeToggle = document.getElementById('modeToggle');
const modeIcon = document.getElementById('modeIcon');

// Check saved theme in localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    modeIcon.classList.remove('fa-sun');
    modeIcon.classList.add('fa-moon');
}

// Toggle Day/Night Mode
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
    // Update the mode icon
    if (document.body.classList.contains('dark')) {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    }
});
