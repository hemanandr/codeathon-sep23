// This function finds the maximum profit that can be made from buying and selling stocks
function findMaxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    let buy = 0;
    let sell = 0;

    // Loop through the prices array to find the maximum profit
    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        const potentialProfit = currentPrice - minPrice;

        // If the potential profit is greater than the current max profit, update the max profit and the buy and sell days
        if (potentialProfit > maxProfit) {
            maxProfit = potentialProfit;
            sell = i;
            buy = prices.indexOf(minPrice);
        }

        // If the current price is less than the minimum price, update the minimum price
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        }
    }

    // If a profit can be made, log the buy and sell days and the maximum profit
    if (maxProfit > 0) {
        console.log(`Buy on day ${buy} at price ${prices[buy]}`);
        console.log(`Sell on day ${sell} at price ${prices[sell]}`);
        console.log(`Max profit: ${maxProfit}`);
        return maxProfit;
    } else {
        // If no profit can be made, log a message and return -1
        console.log("No profit can be made");
        return -1;
    }
}

// Call the findMaxProfit function with an array of prices
findMaxProfit([100,180,260,310,40,535,695]); // Buy on day 4 at price 40, Sell on day 6 at price 695, Max profit: 655