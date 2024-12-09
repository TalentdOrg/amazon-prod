const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  console.log("Original file content:");
  console.log(data);

  // Remove all lines that start with "// Hash"
  const cleanedData = data.replace(/^\/\/ Hash.*\n/gm, '');

  console.log("\nCleaned file content:");
  console.log(cleanedData);

  // Optionally, write the cleaned data back to the file
  fs.writeFile(filePath, cleanedData, 'utf8', (err) => {
    if (err) {
      console.error("Error writing the cleaned data:", err);
    } else {
      console.log("\nHashes removed and file updated!");
    }
  });
});
