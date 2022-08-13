
//Input UI Elements
let stackSizeEl = document.getElementById("stackSize-el")
let maxLossPctEl = document.getElementById("maxLossPct-el")
let entryPriceEl = document.getElementById("entryPrice-el")
let stopPriceEl = document.getElementById("stopPrice-el")
let targetPriceEl = document.getElementById("takeProfit-el")
let levEl = document.getElementById("lev-el")

//Output UI elements
let positionSizeEl = document.getElementById("positionSize-el")
let maximumLossEl = document.getElementById("maxLoss-el")
let targetGainValueEl = document.getElementById("targetGain-el")
let roiEl = document.getElementById("roi-el")
let reqPriceMoveEl = document.getElementById("reqPriceMove-el")
let riskRewardEl = document.getElementById("rr-el")

function calculatePosition (){
    //User Inputs
    let StackSize = stackSizeEl.value
    let maxLossPct = maxLossPctEl.value/100
    let entryPrice = entryPriceEl.value
    let stopPrice = stopPriceEl.value
    let targetPrice = targetPriceEl.value
    let lev = levEl.value

    // Calculations
    let stopPct = Math.abs(entryPrice-stopPrice)/entryPrice
    let positionSize = ((maxLossPct*StackSize)/stopPct)/lev
    let maxLossValue = maxLossPct*StackSize
    let targetGainPct = Math.abs(((targetPrice-entryPrice)/entryPrice)*100)*lev
    let targetGainValue = targetGainPct*StackSize
    let reqPriceMove = Math.abs(targetPrice-entryPrice)/entryPrice
    let riskReward = reqPriceMove/stopPct

    //Outputs Final Values to UI
    positionSizeEl.innerText = `Position Size : $${positionSize.toFixed(2)}`
    maximumLossEl.innerText = `Maximum Loss : $${maxLossValue.toFixed(2)}`
    targetGainValue.innerText = `Target Gain : $${targetGainPct.toFixed(2)}`
    roiEl.innerText = `ROI : %${targetGainPct.toFixed(2)}`
    reqPriceMove.innerText = `Required Price Movement : %${reqPriceMove.toFixed(2)}`
    riskRewardEl.innerText = `R/R : ${riskReward.toFixed(2)}`
}


/*let positionSize = 0
let stopPct = 0
let maxLossValue = 0
let targetGainPct = 0
let targetGainValue = 0
let reqPriceMove = 0
let riskReward = 0
*/