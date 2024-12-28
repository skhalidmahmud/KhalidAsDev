// Check for saved user preference for dark/light mode
const modeToggle = document.getElementById('modeToggle');

// Function to switch between dark and light modes
const toggleMode = () => {
    // Toggle between light-mode and dark-mode classes on body
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    // Save the user's preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
};

// Load the theme from localStorage when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
});

// Add event listener to the toggle button
modeToggle.addEventListener('click', toggleMode);

// Function to show or hide the under development warning
const showDevWarning = () => {
    const devWarning = document.getElementById('dev-warning');
    devWarning.style.display = 'block'; // Shows the warning
};

// Function to hide the under development warning
const hideDevWarning = () => {
    const devWarning = document.getElementById('dev-warning');
    devWarning.style.display = 'none'; // Hides the warning
};

// Example of showing the warning (you can trigger this based on conditions)
showDevWarning();

