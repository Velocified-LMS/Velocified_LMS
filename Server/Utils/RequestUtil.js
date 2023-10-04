import axios from 'axios';

// const apiUrl = 'https://example.com/api/v1/posts';

// const postData = {
//   title: 'My new post',
//   content: 'This is the content of my new post.',
// };

axios.post(apiUrl, postData)
  .then(response => {
    // The response is successful.
  })
  .catch(error => {
    // The response is unsuccessful.
  });