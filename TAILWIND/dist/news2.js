// const API_KEY = "0bd857e15e4b4755977894991adb3be7"; // Replace with your API key

// // Fetch Stock News
// async function fetchNews() {
//     const searchQuery = document.getElementById("searchInput").value || "stock market";
//     const url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         if (data.articles.length === 0) {
//             alert("No news found!");
//             return;
//         }

//         displayNews(data.articles);
//     } catch (error) {
//         console.error("Error fetching news:", error);
//     }
// }

// // Display News in UI
// function displayNews(articles) {
//     const newsContainer = document.getElementById("newsContainer");
//     newsContainer.innerHTML = "";

//     articles.slice(0, 9).forEach(article => {
//         const newsCard = document.createElement("div");
//         newsCard.classList = "bg-white p-4 rounded-lg shadow-lg";
//         newsCard.innerHTML = `
//             <img src="${article.urlToImage}" class="w-full h-40 object-cover rounded">
//             <h3 class="text-lg font-bold mt-2">${article.title}</h3>
//             <p class="text-gray-600">${article.description || "No description available."}</p>
//             <a href="${article.url}" target="_blank" class="text-blue-500 mt-2 inline-block">Read more</a>
//         `;
//         newsContainer.appendChild(newsCard);
//     });
// }

// // Fetch top news on page load
// fetchNews();
