const TAX_VALUE=0.005;
const CARDS_AMOUNT= 3;
function userCard(index) {
  let balance= 100;
  let transactionLimit= 100;
  let	historyLogs =[];

  function getCardOptions() {

    return {
      balance: balance,
      transactionLimit: transactionLimit,
      historyLogs: historyLogs,
      key: index
    }
  }

  function putCredits(amount) {
    balance+=amount;
    setLog('Received credits',amount);
  }

  function takeCredits(amount){
    if(amount<=transactionLimit&&amount<=balance) {
      balance-=amount;
      setLog('Withdrawal of credits',amount);
    } else {
    console.error('You exceeded the credit limit or do not have  enough money')
    }
  }

  function setTransactionLimit(amount) {
    transactionLimit=amount;
    setLog('Transaction limit change',amount);
  }

  function transferCredits(amount,card) {
    if(amount<=transactionLimit&&amount<=balance) {
      balance-=amount;
      balance=balance-amount*TAX_VALUE;
      card.putCredits(amount);
      setLog('Withdrawal of credits',amount+amount*TAX_VALUE);
    } else {
      
    console.error('You exceeded the credit limit or do not have  enough money');
    }
  }
  function setLog(operationType, amount) {
    historyLogs.push({
      operationType: operationType,
      credits: amount,
      operationTime: new Date().toLocaleString('en-GB')
  });
  
}
  
  if(index>=1&&index<=CARDS_AMOUNT) {

    return {
      putCredits: putCredits,
      takeCredits: takeCredits,
      setTransactionLimit: setTransactionLimit,
      getCardOptions: getCardOptions,
      transferCredits: transferCredits,
      setLog: setLog  
    }
  } else {
    console.error('The index should be in the range of 1 to 3');
  }  
}
class UserAccount {
  constructor(name) {
    this.name=name,
    this.cards= [],
    this.addCard= function() {
      if(this.cards.length<CARDS_AMOUNT) {
        this.cards.push(userCard(this.cards.length+1))
      } else {
        console.error('You can not have more than 3 cards')
    } 
    }
  }
  getCardByKey(index) {
    return this.cards[index-1];
  }
}
