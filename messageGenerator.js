const fetch = require('node-fetch');

// Function to fetch a random Bible verse using the Bible API
async function fetchRandomVerse() {
  // Array of random Bible references (just some examples)
  const references = [
    "John 3:16",
    "Jeremiah 29:11",
    "Philippians 4:13",
    "Psalm 23:1",
    "Romans 8:28"
  ];
// Pick a random reference from the array
const randomReference = references[Math.floor(Math.random() * references.length)];

// Construct the URL to fetch the verse
const url = `https://bible-api.com/${randomReference}`;
}