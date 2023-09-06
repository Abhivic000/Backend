const fs = require("fs");

//fs.writeFile("read.txt", "today is awesome day" , (err) => {
//   console.log("files is created");
//    console.log(err);
//});

// we pass them a function as an argument a callback
// that gets called when that task completes.
// The callback has an argument that tells you whether
//the operation completed successfully.
//Now we need to say what to do when fs. writeFile
//has completed (even if it's nothing), and start
//checking for errors.

//fs.appendFile("read.txt",
//" hii every one how are you",
//(err) => {
//   console.log('everything cool');
//});

fs.readFile("read.txt", "utf-8", (err, data) =>{
    console.log(data);
});

// Challenge Time
//1: Create a folder named it Thapa
//2: Create a file in it named bio.txt and data into it.
//3: Add more data into the file at the end of the existing data.
//4: Read the data without getting the buffer data at first.
//file encoding
//5: Rename the file name to mybio.txt
//6: now delete both the file and the folder


//const fs = require("fs");

// fs.mkdir("thapa", (err) => {
//console.log("folder created");
// });
// fs.writeFile(""./thapa/bio.txt"
//console. log("files created");

