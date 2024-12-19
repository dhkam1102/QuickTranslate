document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("translate-button").addEventListener("click", async () => {
        const text = document.getElementById("input-text").value;
        const selectedLanguage = document.querySelector("input[name='language']:checked").value;
        const API_KEY = "Add your API key";

        try {
            const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    q: text,
                    target: selectedLanguage
                })
            });

            const data = await response.json();

            if (data.data && data.data.translations) {
                document.getElementById("output-text").innerText = data.data.translations[0].translatedText;
            } else {
                document.getElementById("output-text").innerText = "Error: Unexpected API response.";
            }
        } catch (error) {
            document.getElementById("output-text").innerText = "Error translating text.";
        }
    });

    // Listen for messages from the background script
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.result) {
            document.getElementById("output-text").innerText = message.result;
        } else if (message.error) {
            document.getElementById("output-text").innerText = `Error: ${message.error}`;
        }
        sendResponse({ status: "Message received" });
    });
});
