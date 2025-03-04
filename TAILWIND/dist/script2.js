let btn= document.getElementById("btn");
let box= document.getElementById("box");
let w= document.getElementById("wrong");

btn.addEventListener("click",()=>{
    box.classList.remove("hidden");
});

w.addEventListener("click",()=>{
    box.classList.add("hidden");
});






// Mock Stock Recommendations
const recommendedStocks = [
    { name: "TCS", price: "₹3,200", change: "+1.75%" },
    { name: "Reliance", price: "₹2,500", change: "+0.95%" },
    { name: "Infosys", price: "₹1,450", change: "-0.50%" }
];

const indianStocks = ["HDFC Bank", "Tata Motors", "Wipro"];
const usStocks = ["Apple (AAPL)", "Tesla (TSLA)", "Amazon (AMZN)"];
const mutualFunds = ["SBI Bluechip", "Axis Growth Fund", "HDFC Flexi Cap"];

// Populate Stock Recommendations
const recommendationContainer = document.getElementById("recommendations");
recommendedStocks.forEach(stock => {
    const stockCard = document.createElement("div");
    stockCard.classList = "p-4 bg-white shadow rounded-lg text-center";
    stockCard.innerHTML = `
        <p class="text-lg font-semibold">${stock.name}</p>
        <p class="text-gray-600">${stock.price}</p>
        <p class="${stock.change.includes('-') ? 'text-red-500' : 'text-green-500'}">${stock.change}</p>
    `;
    recommendationContainer.appendChild(stockCard);
});

// Populate Stock Sections
const populateStocks = (listId, stocks) => {
    const list = document.getElementById(listId);
    stocks.forEach(stock => {
        const li = document.createElement("li");
        li.classList = "border-b py-2";
        li.textContent = stock;
        list.appendChild(li);
    });
};

populateStocks("indianStocks", indianStocks);
populateStocks("usStocks", usStocks);
populateStocks("mutualFunds", mutualFunds);

// Stock Search Functionality
document.getElementById("stockSearch").addEventListener("keyup", (event) => {
    const query = event.target.value.toLowerCase();
    const allStocks = [...indianStocks, ...usStocks, ...mutualFunds];

    if (query.length > 0) {
        alert(`Searching for "${query}" in stock database...`);
    }
});

function GotoNews() {
    window.location.assign("new2.html");
}

const API_KEY = "0bd857e15e4b4755977894991adb3be7"; // Replace with your API key

// Fetch Stock News
async function fetchNews() {
    const searchQuery = document.getElementById("searchInput").value || "stock market";
    const url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.articles.length === 0) {
            alert("No news found!");
            return;
        }

        displayNews(data.articles);
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

// Display News in UI
function displayNews(articles) {
    const newsContainer = document.getElementById("newsContainer");
    newsContainer.innerHTML = "";

    articles.slice(0, 9).forEach(article => {
        const newsCard = document.createElement("div");
        newsCard.classList = "bg-white p-4 rounded-lg shadow-lg";
        newsCard.innerHTML = `
            <img src="${article.urlToImage}" class="w-full h-40 object-cover rounded">
            <h3 class="text-lg font-bold mt-2">${article.title}</h3>
            <p class="text-gray-600">${article.description || "No description available."}</p>
            <a href="${article.url}" target="_blank" class="text-blue-500 mt-2 inline-block">Read more</a>
        `;
        newsContainer.appendChild(newsCard);
    });
}

// Fetch top news on page load
fetchNews();
