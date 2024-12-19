
# Language Translator Chrome Extension

## Overview

The **Language Translator** is a simple Chrome extension created as a practice project to explore building Chrome extensions. It provides a user-friendly interface to translate text into different languages using the Google Translate API. This extension demonstrates core concepts like interacting with the DOM, utilizing Chrome APIs, and working with a third-party API for translation.

## Features

- **Text Translation**: Allows users to input text and translate it into a selected target language.
- **Language Selection**: Users can choose between multiple target languages (e.g., Korean, Japanese, Chinese) via a radio button interface.
- **Real-Time Results**: Displays the translated text in the extension interface.
- **Context Menu Integration**: Enables quick text translation directly from the context menu (right-click menu) of the browser.

## How It Works

1. **User Input**: The user enters text into the provided text area.
2. **Language Selection**: The user selects a target language by choosing from the provided options.
3. **Translation Request**: When the "Translate" button is clicked, the extension sends a request to the Google Translate API with the user's text and selected language.
4. **Display Results**: The translated text is displayed in the extension's interface under the "Translation Result" section.
5. **Context Menu**: Users can highlight text on a webpage, right-click, and select "Translate Text" to get a quick translation (displayed via a browser alert).

## How to Use

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Add Your Own Google Translate API Key**:
   - Obtain your API key from [Google Cloud Console](https://console.cloud.google.com/).
   - Replace the placeholder API key in `popup.js` and `background.js` with your own.

3. **Load the Extension**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" in the top-right corner.
   - Click "Load unpacked" and select the folder containing the extension files.

4. **Start Using**:
   - Click the extension icon in your browser toolbar to open the popup.
   - Enter text, select a target language, and click "Translate" to view the results.
   - Alternatively, highlight text on a webpage, right-click, and select "Translate Text" from the context menu.

## Requirements

- A Google Cloud Platform account to generate your own Google Translate API key.
- Chrome browser to install and test the extension.

## Notes

- This project is for practice purposes only and serves as an introduction to building Chrome extensions and working with APIs.
- Ensure your Google Translate API key is kept secure and not hardcoded in production projects.

## Future Enhancements

- Add more language options dynamically from the API.
- Improve the UI for a more polished user experience.
- Implement error handling for API limits and network issues.

Enjoy exploring how to create and use Chrome extensions! 🎉
