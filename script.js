let currency = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.1,
    'QUARTER': 0.25,
    'ONE': 1,
    'FIVE': 5,
    'TEN': 10,
    'TWENTY': 20,
    'ONE HUNDRED': 100
  }
  
  
  function checkCashRegister(price, cash, cid) {
    let obj = {
      status: "",
      change: []
    }
    let change = cash - price;
    let arr = []
  
  let index = Object.values(currency).findIndex(x => x > change) 
  
  for (let i = 0; i<index; i++) {
    arr.push(cid[i])
  }
  
  let sum = arr.map(x => x[1]).reduce((a,b) => a + b)
  
  const changeSum = () => {
    let output = []
   for (let i = arr.length - 1; i>=0; i--) {
      if (change >= arr[i][1]) {
        output.push(arr[i])
        change-=arr[i][1]
        change = Number(change.toFixed(2))
  
      }
      else if (change > currency[arr[i][0]]) {
        arr[i][1] = currency[arr[i][0]] * Math.floor(change / currency[arr[i][0]])
        output.push(arr[i])
        change-=arr[i][1]
        change = Number(change.toFixed(2))
  
      }
   }
   return output
  }
  
  
  
  if (sum < change) {
    obj.status = "INSUFFICIENT_FUNDS"
    return obj
  }
  else if (sum === change) {
    obj.status = "CLOSED"
    obj.change = cid
    return obj
  }
  else {
    obj.status = "OPEN"
    obj.change = changeSum()
    return obj
  
  }
  }
    
  
   
  
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);