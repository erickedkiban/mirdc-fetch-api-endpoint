# mirdc-fetch-api-endpoint
const fetchMIRDCData = require('./index');

// Usage example
const url = 'https://api.example.com/data';
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

fetchMIRDCData(url, options)
    .then(data => {
        // Handle fetched data
        console.log('Fetched data:', data);
    })
    .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
    });


Sample :
Fetched data: {
  data: [
    {
      id: 1,
      name: 'erick',
      lastname: 'edquiban',
      email: 'edquiban.erick@gmail.com',
      createdAt: '2024-04-02T06:31:35.012Z',
      updatedAt: '2024-04-02T07:39:53.622Z',
      publishedAt: '2024-04-02T06:31:39.351Z'
    }
  ],
  meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 5 } }
}