/*const fs = require( "fs");
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
var fs = require "fs");
fs.readFile("input.txt", (err, data) => {
if (err) return console.error(err);
res.end(data.toString())); 
*/

//  2nd - Wav

//  Reading from a Stream
//  Create a readable stream
// Handle stream events  -> data, end, and error
const rstream = fs.createReadStream( "inputs.txt" );
rstream.on("data", (chunkdata) => {
res.write(chunkdata);
});
rstream.on("end", () => {
res. end();
});
rstream. on("error", (err) => {
console.log (err);
res.end("file not found");
});



// 3rd way
const rrstream = fs.createReadStream("input .txt");
rrstream.pipe(res);

server.listen(8000, "127.0.0.1");