const { send } = require("./request");
const { read } = require("./response");

function makeRequest(url, data) {
  send(url, data);
  return read();
}

const responseData = makeRequest("https://google.com", "hello");
console.log(responseData);

//These lines import the send function from a request module and the read function from a response module.
