document.getElementById("fetch-button").addEventListener("click", fetchData);

function fetchData() {
  const xhr = new XMLHttpRequest();
  const url = "https://jsonplaceholder.typicode.com/posts";

  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      displayData(data);
    } else {
      handleError(`Error: ${xhr.status}`);
    }
  };

  xhr.onerror = function () {
    handleError("Request failed");
  };

  xhr.send();
}

function displayData(data) {
  const container = document.getElementById("data-container");
  container.innerHTML = "";

  data.forEach((item) => {
    const div = document.createElement("div");
    div.className = "data-item";
    div.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.body}</p>
        `;
    container.appendChild(div);
  });
}

function handleError(message) {
  const container = document.getElementById("data-container");
  container.innerHTML = `<p style="color: red;">${message}</p>`;
}

// Display Data
// The displayData function dynamically creates and inserts elements into the data-container div based on the fetched data.
//  Error Handling
// The handleError function is called when an error occurs, displaying an error message to the user.
// User Interaction
// i have added a button that triggers the data fetching process when clicked, making the user interaction more engaging.
