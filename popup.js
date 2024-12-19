// popup.js (JavaScript for handling functionality)

document.getElementById("translate-button").addEventListener("click", async () => {
    const text = document.getElementById("input-text").value;
    const targetLang = "ko"; // Change this to your preferred target language
    const API_KEY = process.env.API_KEY

    try {
        const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                q: text,
                target: targetLang
            })
        });

        const data = await response.json();
        document.getElementById("output-text").innerText = data.data.translations[0].translatedText;
    } catch (error) {
        console.error("Translation Error:", error);
        document.getElementById("output-text").innerText = "Error translating text.";
    }
});
