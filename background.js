chrome.contextMenus.create({
    id: "translate",
    title: "Translate Text",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(async (info) => {
    if (info.menuItemId === "translate") {
        const selectedText = info.selectionText;
        const targetLang = "en"; // Change this as needed

        try {
            const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    q: selectedText,
                    target: targetLang
                })
            });

            const data = await response.json();
            alert(data.data.translations[0].translatedText);
        } catch (error) {
            console.error("Translation Error:", error);
            alert("Error translating text.");
        }
    }
});
