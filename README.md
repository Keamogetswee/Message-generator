# Bible Verse Generator

This is a simple Bible Verse Generator program built with JavaScript. Every time you run the program, it will fetch a random Bible verse from the [Bible API](https://bible-api.com) and display it in your console.

## Features
- Fetches a random Bible verse from an API.
- Randomly selects Bible verses from a predefined list of references.
- Displays the verse text along with the reference.

## Requirements
- Node.js (v12 or later)
- Internet connection to fetch data from the API

## Installation

1. Clone this repository to your local machine.

    ```bash
    git clone https://github.com/Keamogetswee/Message-generator.git
    cd Message-generator
    ```

2. Make sure you have **Node.js** installed. You can check if Node.js is installed by running:

    ```bash
    node -v
    ```

    If it's not installed, you can download and install it from the [official website](https://nodejs.org).

3. Install the necessary dependencies.

    ```bash
    npm init -y   # Initialize a new Node.js project (if you haven't already)
    npm install node-fetch   # Install the node-fetch library to make API requests
    ```

## How to Use

1. Once everything is set up, you can run the `messageGenerator.js` file using Node.js.

    ```bash
    node messageGenerator.js
    ```

2. Each time you run the program, a random Bible verse will be fetched from the API and displayed in your console.

    Example Output:
    ```
    John 3:16: For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.
    ```

## How It Works

- The program picks a random Bible reference (e.g., `John 3:16`, `Jeremiah 29:11`, etc.) from a predefined list of references.
- It then uses the Bible API to fetch the text of the selected verse.
- The program logs the verse and reference to the console.

## License

