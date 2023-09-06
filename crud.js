
// Challenge Time
// 1: Create a folder named it Thapa
// 2: Create a file in it named bio.txt and data into it.
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data without getting the buffer data at first.
// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder

const fs = require("fs");

//fs.mkdirSync("abhi");

//fs.writeFileSync("abhi/bio.txt", "My name is abhishek bad boy")

//fs.appendFileSync("abhi/bio.txt", " no i'm good boy")

//to not get data in binary form
//const data = fs.readFileSync("abhi/bio.txt","utf8");
//console.log(data);

//to delete bio.txt
fs.unlinkSync("abhi/bio.txt");
