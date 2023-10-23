const { url } = require('inspector');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then(console.log);

async function fetchUser() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await Response.json();
  console.log(data);
}

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
];

Promise.all(
  urls.map((url) =>
    fetch(url)
      .then((res) => res.json())
      .then((array) => {
        console.log('users', array[0]);
        console.log('posta', array[1]);
        console.log('albums', array[2]);
      })
      .catch('oops')
  )
);

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      url.map((url) => fetch(url).then((resp) => resp.json()))
    );
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('oops', err);
  }
};
