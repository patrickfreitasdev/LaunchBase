const user = {
  name: "Mariana",
  transactions: [],
  balance: 0,
};

function createTransaction(obj) {
  user.transactions.push(obj);

  if (obj.type === "credit") {
    user.balance += obj.value;
  } else {
    user.balance -= obj.value;
  }
}

function getHigherTransactionByType(transactionType) {
  let higherTransaction;
  let higherValue = 0;

  user.transactions.forEach((transaction) => {
    if (
      transaction.type == transactionType &&
      transaction.value > higherValue
    ) {
      higherValue = transaction.value;
      higherTransaction = transaction;
    }
  });
  return higherTransaction;
}

function getAverageTransactionValue() {
  let average = 0;

  user.transactions.forEach((transaction) => {
    average += transaction.value;
  });

  const averageTotal = average / user.transactions.length;

  return averageTotal;
}

function getTransactionsCount() {
  const obj = {
    credit: 0,
    debit: 0,
  };

  user.transactions.forEach((transaction) => {
    if (transaction.type === "credit") {
      obj.credit += 1;
    } else {
      obj.debit += 1;
    }
  });

  return obj;
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

const higherTransactionCredit = getHigherTransactionByType("credit");
const higherTransactionDebit = getHigherTransactionByType("debit");
const average = getAverageTransactionValue();
const count = getTransactionsCount();

console.log(user.balance);
console.log(higherTransactionCredit);
console.log(higherTransactionDebit);
console.log(average);
console.log(count);
