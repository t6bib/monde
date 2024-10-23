// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select the elements
    const welcomeContainer = document.querySelector('.welcome-container');
    const homepage = document.querySelector('.homepage');
    
    // Fireworks will directly be initialized on the .fireworks div of the homepage
    const fireworksContainer = document.querySelector('.fireworks-container');

    // Transition to homepage after 2 seconds
    setTimeout(() => {
        // Slide the welcome container to the left
        welcomeContainer.style.transform = 'translateX(-100%)'; // Slide left
        welcomeContainer.style.transition = 'transform 1s ease'; // Smooth sliding effect

        // Show homepage with left sliding effect
        homepage.classList.add('visible'); // Slide homepage into view from the right
    }, 2100); // Show welcome message for 3 seconds

    // Initialize fireworks on explore button click
    document.getElementById('explore-btn').addEventListener('click', () => {
        // Create fireworks instance in the fireworks container
        const fireworks = new Fireworks.default(fireworksContainer, {
            // Adjust options if needed
            speed: 5,
            intensity: 10,
            traceSpeed: 0.8,
        });
        fireworks.start(); // Start fireworks
    });
});
