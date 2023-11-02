const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify("a", 100);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

async function parallel() {
  const promise = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all;
}

async function parallel() {
  try {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);
    console.log(output1, output2, output3);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

//passed the promises array to Promise.all() to await their resolution.
//wrapped the logic in a try-catch block for better error handling.
