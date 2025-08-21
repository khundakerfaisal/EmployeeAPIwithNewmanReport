const newman = require('newman');
require('dotenv').config();
 
newman.run({
    // collection:`https://api.postman.com/collections/1844288-0c2f5c62-e7d8-4d31-8baa-6158bf88f4a0?access_key=${process.env.secretKey}`,
    // collection:`https://api.postman.com/collections/25113210-9362278c-e5db-4994-87b0-d775d8aa7eaf?access_key=${process.env.secretKey}`,
    // collection:require('./collection/collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
