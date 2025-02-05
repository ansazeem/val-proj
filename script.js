// Small script to add a random rotation to polaroid images
document.addEventListener("DOMContentLoaded", function() {
    const polaroids = document.querySelectorAll(".polaroid");

    polaroids.forEach(polaroid => {
        let randomRotation = (Math.random() * 10 - 5).toFixed(2); // Random rotation between -5 and 5 degrees
        polaroid.style.transform = `rotate(${randomRotation}deg)`;
    });
});

// Function to show the "You get a kiss!" message
function showKissMessage() {
    var message = document.getElementById("kiss-message");
    message.style.display = "block"; // Display the message when clicked
}

// Function to show the love letter and hide the kiss button
function showLoveLetter() {
    document.getElementById("love-letter").style.display = "block"; // Show the love letter popup
    document.getElementById("kiss-btn").style.display = "none"; // Hide the kiss button
    document.getElementById("show-letter-btn").style.display = "none"; // Hide the "Show Love Letter" button
}

// Function to close the love letter and show the kiss button again
function closeLoveLetter() {
    document.getElementById("love-letter").style.display = "none"; // Hide the love letter popup
    document.getElementById("kiss-btn").style.display = "block"; // Show the kiss button again
    document.getElementById("show-letter-btn").style.display = "block"; // Show the "Show Love Letter" button again
}


