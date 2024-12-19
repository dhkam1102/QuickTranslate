// Create a context menu item for translating selected text
chrome.contextMenus.create({
    id: "translate",
    title: "Translate Text",
    contexts: ["selection"], // Show only when text is selected
});

// Listen for clicks on the context menu item
chrome.contextMenus.onClicked.addListener(async (info) => {
    if (info.menuItemId === "translate") {
        const selectedText = info.selectionText;

        if (!selectedText) {
            console.log("No text selected for translation.");
            chrome.runtime.sendMessage({ error: "No text selected for translation." });
            return;
        }

        const targetLang = "ko"; // Default target language (Korean)
        const API_KEY = "Add your API key";

        try {
            // Make a POST request to Google Translate API
            const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    q: selectedText,
                    target: targetLang,
                }),
            });

            const data = await response.json();

            // Check if the API response contains translations
            if (data.data && data.data.translations) {
                const translatedText = data.data.translations[0].translatedText;
                chrome.runtime.sendMessage({ result: translatedText });
            } else {
                console.error("Unexpected API Response:", data);
                chrome.runtime.sendMessage({ error: "Unexpected API response from Google Translate API." });
            }
        } catch (error) {
            console.error("Translation Error:", error);
            chrome.runtime.sendMessage({ error: "Error translating text. Please check your API key or network connection." });
        }
    }
});
