document.addEventListener("DOMContentLoaded", function () {
    const checkButton = document.querySelector(".check-btn");
    const inputField = document.getElementById("link-input");
    const loadingBar = document.querySelector(".loading-bar");
    const loadingContainer = document.querySelector(".loading-bar-container");
    const resultText = document.getElementById("result-text");
    const resultSection = document.querySelector(".result-section");

    // Hide loading bar and result at the start
    loadingContainer.style.display = "none";
    resultSection.style.display = "none";

    checkButton.addEventListener("click", function () {
        let userLink = inputField.value.trim();

        if (userLink === "") {
            alert("❌ Please enter a link before checking.");
            return;
        }

        // Reset result section and show "Scanning..."
        resultSection.style.display = "block";
        resultText.innerText = "🔍 Scanning... Please wait.";
        resultText.style.color = "#00ffff";

        // Show loading bar and reset its width
        loadingContainer.style.display = "block";
        loadingBar.style.width = "0";
        loadingBar.style.transition = "none"; // Reset animation instantly

        setTimeout(() => {
            loadingBar.style.transition = "width 3s";
            loadingBar.style.width = "100%";
        }, 100);

        // After scanning is complete, show the result
        setTimeout(() => {
            loadingContainer.style.display = "none";

            // Fake logic for phishing detection (You can replace this with real API logic)
            const safeSites = ["google.com", "wikipedia.org", "github.com", "xnxx.com", "youtube.com"];
            const isSafe = safeSites.some(site => userLink.includes(site));

            if (isSafe) {
                resultText.innerText = "✅ This website is SAFE!";
                resultText.style.color = "#00ff00";
            } else {
                resultText.innerText = "⚠️ Warning: This website might be UNSAFE!";
                resultText.style.color = "#ff0000";
            }
        }, 3500);
    });
});
