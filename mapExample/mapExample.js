async function fetchAndDisplayPosts() {
    try {
        // 1. Fetch data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // 2. Parse the response as JSON
        const posts = await response.json();

        // 3. Get the list element from the DOM
        const postList = document.getElementById('post-list');

        // 4. Map over the array and create HTML elements
        posts.map(post => {
            const listItem = document.createElement('li');
            listItem.textContent = post.title;
            postList.appendChild(listItem);
        });

    } catch (error) {
        // Handle any errors that occurred during the fetch operation
        console.error('Error fetching data:', error);
    }
    finally {
        console.log("execute finally")
    }
}

// Call the function to initiate the fetch operation
fetchAndDisplayPosts();
