console.log("Script started...");  // Debugging: Check if script is running

// Define an array of Bible verses
const verses = [
  "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope. – Jeremiah 29:11",
  "The Lord is my shepherd; I shall not want. – Psalm 23:1",
  "I can do all things through him who strengthens me. – Philippians 4:13",
  "The fear of the Lord is the beginning of wisdom, and the knowledge of the Holy One is insight. – Proverbs 9:10",
  "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. – John 3:16",
  "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. – Romans 8:28",
  "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness, and self-control. – Galatians 5:22-23",
  "For we live by faith, not by sight. – 2 Corinthians 5:7",
  "The Lord is close to the brokenhearted and saves those who are crushed in spirit. – Psalm 34:18",
  "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. – Philippians 4:6",
  "I will instruct and teach you in the way that you should go; I will counsel you with my eye upon you - Psalm 32:8",
  "You shall love the Lord your God with all your heart, with all your soul, and with all your mind - Matthew 22:37"
];

// Function to generate a random index for an array
function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function generateVerse() {
  console.log("Function generateVerse() is being called...");  // Debugging log
  
  const verse = verses[getRandomIndex(verses)];
  console.log("Verse to be displayed:", verse);  // Debugging line
  console.log(verse);  // Main output
}

// Debugging step
console.log("Starting Bible verse generator...");
generateVerse();
