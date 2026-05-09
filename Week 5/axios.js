import axios from 'axios';

// GET request
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });



  
// POST request
axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'Hello',
    body: 'This is a test',
    userId: 1
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });