const url = 'https://example.com/api/data';
const reqHdrNew = {
  'Authorization': 'Bearer your_access_token',
  'Content-Type': 'application/json'
};

fetch(url, {
  method: 'GET',
  headers: reqHdrNew
})
.then(response => {
  // Handle the response
})
.catch(error => {
  // Handle any errors
});
