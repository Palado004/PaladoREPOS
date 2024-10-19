// script.js

const toggleButton = document.getElementById('toggle-bg');
let backgroundEnabled = true; // Keep track of background state

toggleButton.addEventListener('click', () => {
    const body = document.body;

    if (backgroundEnabled) {
        body.classList.remove('led-background'); // Remove background effect
        toggleButton.textContent = 'Enable Background'; // Update button text
    } else {
        body.classList.add('led-background'); // Add background effect
        toggleButton.textContent = 'Disable Background'; // Update button text
    }

    backgroundEnabled = !backgroundEnabled; // Toggle state
});
