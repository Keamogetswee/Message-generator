// Use ES module syntax to import node-fetch
import fetch from 'node-fetch';

// Function to fetch a random Bible verse using the Bible API
async function fetchRandomVerse() {
  // Array of random Bible references
  const references = [
    "John 3:16",
    "Jeremiah 29:11",
    "Philippians 4:13",
    "Psalm 23:1",
    "Romans 8:28",
    "Psalm 32:8",
    "Matthew 22:37",
    "John 1:1",
    "Deuteronomy 31:6",
    "Luke 18: 1-8",
    "Matthew 6:25",
    "Isaiah 41:10",
    "Philippians 4:6-7",
    "Ephesians 3:20-21",
    "Joshua 1:9",
  ];

  // Pick a random reference from the array
  const randomReference = references[Math.floor(Math.random() * references.length)];

  // Construct the URL to fetch the verse
  const url = `https://bible-api.com/${randomReference}`;

  try {
    // Fetch the Bible verse from the API
    const response = await fetch(url);
    const data = await response.json();

    // Log the reference and verse
    if (data.verses && data.verses.length > 0) {
      console.log(`${data.reference}: ${data.verses[0].text}`);  // Log verse text
    } else {
      console.log('No verse found');
    }
  } catch (error) {
    console.log('Error fetching the verse:', error);
  }
}

fetchRandomVerse();
