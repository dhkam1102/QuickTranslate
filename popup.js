document.getElementById("translate-button").addEventListener("click", async () => {
    const text = document.getElementById("input-text").value;
    const targetLang = "en"; // Change this to your preferred target language

    try {
        const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY`, {
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
