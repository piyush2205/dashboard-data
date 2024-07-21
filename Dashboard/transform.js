const fs = require('fs');

// Path to your JSON file
const inputFilePath = 'C:/Users/acer/Desktop/mern/visualization-dashboard/data.json'; // Change this path to the actual file path
const outputFilePath = 'C:/Users/acer/Desktop/mern/visualization-dashboard/ndjsondata.ndjson'; // Output path for NDJSON

// Read the JSON file
// Function to normalize end_year to a string
const normalizeEndYear = (endYear) => {
    if (typeof endYear === 'number') {
        return endYear.toString();
    } else if (typeof endYear === 'string') {
        return endYear.trim();
    }
    return ''; // Default to empty string if it's neither a string nor a number
};

// Read the JSON file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    try {
        const jsonArray = JSON.parse(data);

        // Normalize end_year for each item
        jsonArray.forEach(item => {
            item.end_year = normalizeEndYear(item.end_year);
        });

        // Create NDJSON string
        const ndjsonArray = jsonArray.map(item => JSON.stringify(item)).join('\n');

        // Write the NDJSON to a new file
        fs.writeFile(outputFilePath, ndjsonArray, 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }

            console.log('NDJSON file created successfully.');
        });
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }
});
