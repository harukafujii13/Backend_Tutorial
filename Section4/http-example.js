const { get } = require("https");
const request = get("https://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data chunk: ${chunk}`);
  });
  res.on("end", () => {
    console.log("No more data");
  });
});

//get method from Node.js's built-in https module.
//The https module is used for making HTTP and HTTPS requests.
