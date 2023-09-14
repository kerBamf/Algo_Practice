var maxProfit = function(prices) {
    let max = 0
    let diff = 0

    for(let i = 0; i < prices.length; i++) {
        diff = prices[i+1] - prices[i]
        if(diff > 0) {
            max += diff
        }
    }

    return max

};

console.log(maxProfit([3, 6, 7, 2 ,3, 1, 4, 4, 9, 8, 2, 4]))