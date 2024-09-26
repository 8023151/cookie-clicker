// Initialize cookie count
let cookieCount = 0;

// Boolean to track if the button is clickable
let canClick = true;

// Find the button and count display elements
const button = document.getElementById('click-button');
const cookieCountDisplay = document.getElementById('cookie-count');

// Add a click event listener to the button
button.addEventListener('click', () => {
    if (canClick) {
        cookieCount++; // Increment the cookie count
        cookieCountDisplay.textContent = cookieCount; // Update the displayed count
        
        // Prevent further clicks for 0.1 seconds
        canClick = false;
        setTimeout(() => {
            canClick = true; // Re-enable clicking after 0.1 seconds (100ms)
        }, 100);
    }
});
