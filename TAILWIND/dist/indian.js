const API_KEY = "9ITOJP8EC7O4MX8S"; // Replace with your stock API key 9ITOJP8EC7O4MX8S

const holdings = [
    { name: "Jindal Photo Ltd", price: 614.90, invested: 816.45, change: -4.20 },
    { name: "Ratnaveer Precision", price: 139.45, invested: 263.33, change: -2.67 }
];

// Fetch Stock Data from Alpha Vantage API
async function fetchStockData() {
    const symbol = document.getElementById("stockSearch").value.trim() || "RELIANCE.BSE";
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (!data["Global Quote"]) {
            alert("Stock not found or API limit reached!");
            return;
        }

        const price = data["Global Quote"]["05. price"];
        document.getElementById("stockPrice").textContent = `₹${parseFloat(price).toFixed(2)}`;
        updateChart(symbol);
    } catch (error) {
        console.error("Error fetching stock data:", error);
    }
}

// Load Holdings List
function loadHoldings() {
    const list = document.getElementById("holdingsList");
    list.innerHTML = "";
    
    holdings.forEach(stock => {
        const li = document.createElement("div");
        li.classList = "border p-4 rounded-lg shadow-md mt-2";
        li.innerHTML = `
            <h3 class="font-semibold">${stock.name}</h3>
            <p>Price: ₹${stock.price} <span class="${stock.change < 0 ? 'text-red-500' : 'text-green-500'}">${stock.change}%</span></p>
            <p>Invested: ₹${stock.invested}</p>
        `;
        list.appendChild(li);
    });
}
loadHoldings();

// TradingView Chart Integration
function updateChart(symbol = "NSE:NIFTY") {
    document.getElementById("tradingview-widget-container").innerHTML = `
        <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
        <script type="text/javascript">
            new TradingView.widget({
                "width": "100%",
                "height": 500,
                "symbol": "${symbol}",
                "interval": "D",
                "timezone": "Asia/Kolkata",
                "theme": "light",
                "style": "1",
                "locale": "en",
                "enable_publishing": false,
                "container_id": "tradingview-widget-container"
            });
        <\/script>
    `;
}
updateChart();
