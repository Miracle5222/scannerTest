"use strict";

const fs = require("fs"); // File System | Node.js
const axios = require("axios"); // HTTP client
const FormData = require("form-data"); // Readable "multipart/form-data" streams

const image_1 = "sunflower.jpg";
const image_2 = "photo1.jpg";

const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});

server.listen(3001, () => {
  console.log("Server running on port 3001");
});
(async () => {
  let form = new FormData();

  form.append("organs", "auto");
  form.append("images", fs.createReadStream(image_1));

  // form.append("organs", "auto");
  // form.append("images", fs.createReadStream(image_2));

  const project = "all"; // try specific floras: 'weurope', 'canada'…

  try {
    const { status, data } = await axios.post(
      "https://my-api.plantnet.org/v2/identify/" +
        project +
        "?api-key=2b10jQdBt0cIGEGlkqAbzFkBFO",
      form,
      {
        headers: form.getHeaders(),
      }
    );

    console.log("status", status); // should be: 200
    console.log("data", require("util").inspect(data, false, null, true)); // should be: read "Step 6" below
  } catch (error) {
    console.error("error", error);
  }
})();
