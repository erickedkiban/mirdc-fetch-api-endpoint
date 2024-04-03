function fetchMIRDCData(url, options) {
    return fetch(url, options)
        .then(response => {
            // Check if response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse response JSON and return it
            return response.json();
        })
        .catch(error => {
            // Handle any errors that occur during fetching
            console.error('There was a problem with the fetch operation:', error);
            throw error;
        });
}

// Export your plugin function
module.exports = fetchMIRDCData;