
//Input UI Elements
let stackSizeEl = document.getElementById("stackSize-el")
let maxLossPctEl = document.getElementById("maxLossPct-el")
let entryPriceEl = document.getElementById("entryPrice-el")
let stopPriceEl = document.getElementById("stopPrice-el")
let targetPriceEl = document.getElementById("takeProfit-el")
let levEl = document.getElementById("lev-el")

//Output UI elements
let positionSizeEl = document.getElementById("positionSize-el")
let contractSizeEl = document.getElementById("contractSize-el")
let maximumLossEl = document.getElementById("maxLoss-el")
let liquidationEl = document.getElementById("liqPrice-el")
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
    
    function longshort (){
        if (entryPrice > stopPrice){
            return( entryPrice-(entryPrice/lev))
        } else {
            return(entryPrice+(entryPrice/lev))
        }
    }
    // Calculations
    let stopPct = Math.abs(((stopPrice-entryPrice)/entryPrice))
    let positionSize = (((maxLossPct*StackSize)/(stopPct)/lev))
    let contractSize = (positionSize*lev)/entryPrice
    //let liquidationPrice = entryPrice-(entryPrice/lev)
    let maxLossValue = (maxLossPct*StackSize)
    let targetGainPct = Math.abs(((targetPrice-entryPrice)/entryPrice)*100)*lev
    let targetGainValue = Math.abs((targetGainPct)*positionSize)/100
    let reqPriceMove = ((targetPrice-entryPrice)/entryPrice)*100
    let riskReward = Math.abs((reqPriceMove)/(stopPct*100))



   

   /* let stopPct = Math.abs(entryPrice-stopPrice)/entryPrice
    let positionSize = ((maxLossPct*StackSize)/stopPct)/lev
    let liquidationPrice = (positionSize)/(positionSize/entryPrice)
    let maxLossValue = maxLossPct*StackSize
    let targetGainPct = Math.abs(((targetPrice-entryPrice)/entryPrice)*100)*lev
    let targetGainValue = (targetGainPct/100)*positionSize
    let reqPriceMove = Math.abs((targetPrice-entryPrice)/entryPrice)*100
    let riskReward = (reqPriceMove/100)/stopPct*/


    //Outputs Final Values to UI
    positionSizeEl.innerText = `Position Size [Margin] : $${positionSize.toFixed(2)}`
    contractSizeEl.innerText = `Contract Size : ${contractSize.toFixed(2)}`
    maximumLossEl.innerText = `Maximum Loss : $${maxLossValue.toFixed(2)}`
    //liquidationEl.innerText = `Liquidation : $${liquidationPrice.toFixed(2)}`
    targetGainValueEl.innerText = `Target Gain : $${targetGainValue.toFixed(2)}`
    roiEl.innerText = `ROI : ${targetGainPct.toFixed(2)}%`
    reqPriceMoveEl.innerText = `Required Price Movement : ${reqPriceMove.toFixed(2)}%`
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