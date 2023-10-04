const { resolve } = require('path');

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Stuff Worked');
  } else {
    reject('Error, it broke');
  }
});

// promise
//   .then((result) => {
//     throw Error;
//     return result + '!';
//   })
//   .then((result2) => {
//     console.log(result2);
//   })
//   .catch(() => console.log('error!'));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'HIII');
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'POOOKIE');
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'Is it me you are looking for?');
});

Promise.all([promise, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});

promise
  .then((result) => result + '!')
  .then((result2) => result2 + '?')
  .catch(() => console.log('error!'))
  .then((result3) => {
    // throw Error;
    console.log(result3 + '!');
  });
