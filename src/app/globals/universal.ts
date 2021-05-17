export const appVersion: string = "1.0";
export const version = "Version 1.0";
export const coy: string = "EasyMall";
export const scheme: string = "EasyMall";
export const scheme_full: string = "EasyMall";
export const signInTitle = "EasyMall";
export const footerText = "www.easymall.ng";

export const footerURL = "https://www.easymall.ng";
// export const rootURL:string = 'http://localhost:1224/';
export const rootURL = "http://54.93.155.199:8080/";
// export const bucket = 'rubikpay.spectrumbucket';
// export const socketURL = 'http://172.105.84.55:4444/';
// export const bucket = 'rubikpay.buddybucket';
export const bucket = "rubikpay.spectrumbucket";
export const k: string = "sk_live_4a9f0279d3bfae966187841dc15c0dffff7b679f";
// export const k: string = 'sk_test_ff881bba6c6b491f877d557735bbf58df724c456';
// pk_live_4f0e944f079ad16f6599a6e047bf41210911c580 pk_test_6bff14bb35b87f431f3a8420380d7289162961c4
export const bank_name: string = "UBA";
export const bank_account: string = "1021783714";

export function calShippingFee(weight: number, quantity: number) {
  // console.log('Weight: ' + weight + '| Quantity: ' + quantity);
  let fee: number = 0;
  if (weight < 1) {
    weight = weight * 10;
  }
  let totalWeight = weight * quantity;
  // console.log('totalWeight: ' + totalWeight);
  if (totalWeight <= 2) {
    fee = 1500;
  } else {
    let excess: number = totalWeight - 2;
    fee = 1500 + excess * 250;
  }
  // console.log('fee: ' + fee);
  return fee;
}
export function calCartFee(products: any = []) {
  let subTotal: number = 0;
  let totalShipping: number = 0;
  let total: number = 0;
  if (products) {
    products.forEach((prod) => {
      // console.log(
      //   'Product name: ' +
      //     prod.productName +
      //     '|Product Weight: ' +
      //     prod.weight +
      //     '|Product Quantity: ' +
      //     prod.quantity
      // );
      subTotal = subTotal + prod.quantity * prod.unitPrice;
      totalShipping =
        totalShipping + calShippingFee(prod.weight, prod.quantity);
      total = subTotal + totalShipping;
    });
    // console.log(
    //   'CalCartFee: ' +
    //     JSON.stringify({
    //       subTotal: subTotal,
    //       totalShipping: totalShipping,
    //       total: total,
    //     })
    // );

    return { subTotal: subTotal, totalShipping: totalShipping, total: total };
  } else {
    return { subTotal: 0, totalShipping: 0, total: 0 };
  }
}
export function getBaseUserRandomNumber() {
  return new Promise((resolve, reject) => {
    var rd = ""; //   var rd= randomize('A0', 6);var cnt=0;
    resolve(rd);
  });
}
export function formatFromKobo(amt) {
  return (amt * 1) / 100;
}
export function validateTelcoPrefix(mobile: string) {
  let telcoPrefixes = new Array();
  telcoPrefixes = JSON.parse(localStorage.TelcoPrefixes);
  if (telcoPrefixes.includes(Number(mobile.substr(1, 3)))) {
    return true;
  } else {
    return false;
  }
}
export function compareLabels(a, b) {
  if (a.label < b.label) {
    return -1;
  }
  if (a.label > b.label) {
    return 1;
  }
  return 0;
}
export function compareTitle(a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}
export function maskAccountNumber(num) {
  let first3 = num.substring(1, 4);
  let last3 = num.substring(7, 10);
  return first3 + "****" + last3;
}
export function cal_online_charge(amt) {
  return Math.round((amt / 0.985) * 1);
}
export function preparePurchase(wallet, amount) {
  let model = {
    canProceed: false,
    reason: "",
    wallet: wallet,
  };
  if (amount > wallet.ledger_balance) {
    //Low funds
    model.canProceed = false;
    model.reason = "Insufficient Balance";
  } else {
    model.canProceed = true;
    model.reason = "Sufficient Balance";
    wallet.ledger_balance = wallet.ledger_balance - amount;
    wallet.transaction_funds = wallet.transaction_funds * 1 + amount;
    wallet.isLocked = false;
    model.wallet = wallet;
  }
  return model;
}
export function debitWallet(wallet, amount) {
  wallet.balance = wallet.ledger_balance;
  wallet.transaction_funds = wallet.transaction_funds * 1 - amount;
  wallet.isLocked = false;
  return wallet;
}
export function creditWallet(wallet, amount) {
  wallet.balance = wallet.ledger_balance * 1 + amount;
  wallet.ledger_balance = wallet.balance;
  //  wallet.transaction_funds=((wallet.transaction_funds*1)-(amount));
  wallet.isLocked = false;
  return wallet;
}
export function alphanumeric_unique() {
  return Math.random()
    .toString(36)
    .split("")
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    })
    .join("")
    .substr(2, 8);
}
