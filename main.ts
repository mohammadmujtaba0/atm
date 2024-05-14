#! /usr/bin/env node
import inquirer from "inquirer";

console.log("Welcome in Bank created with TS,Inquire and Node.js");
let myBalance = 50000;
let myPin = 88990;
let pinAnswer = await inquirer.prompt([
  { message: "Enter Your Pin", type: "number", name: "pin" },
]);
if (pinAnswer.pin === myPin) {
  console.log("Correct Pin Code!!!");
  let ask = await inquirer.prompt([
    {
      name: "Operation",
      type: "list",
      message: "Please Select one of the following option",
      choices: ["Withdraw", "Check Balance"],
    },
  ]);
  console.log(ask.Operation);
  if (ask.Operation === "Withdraw") {
    let amount = await inquirer.prompt([
      {
        name: "Amount",
        type: "list",
        message: "Choose on of the option",
        choices: [5000, 10000, 25000, 50000, 60000, "enter amount"],
      },
    ]);
    if (amount.Amount === 5000) {
      console.log(`Your remaining account Balance is ${myBalance - 5000}`);
    } else if (amount.Amount === 10000) {
      console.log(`Your remaining account Balance is ${myBalance - 10000}`);
    } else if (amount.Amount === 25000) {
      console.log(`Your remaining account Balance is ${myBalance - 25000}`);
    } else if (amount.Amount === 50000) {
      console.log(`Your remaining account Balance is ${myBalance - 50000}`);
    } else if (amount.Amount >= myBalance) {
      console.log(`Your Have Insufficient Balance`);
    } else if (amount.Amount === "enter amount") {
      let money = await inquirer.prompt([
        {
          name: "Money",
          type: "number",
          message: "Enter Amount you want to Withdraw",
        },
      ]);
      if (money.Money >= myBalance) {
        console.log(`You have Insufficient Balance`);
      } else if ((myBalance -= money.Money)) {
        console.log(`Your Remaining account balance is ${+myBalance}`);
      }
    }
  } else if (ask.Operation === "Check Balance") {
    console.log(`Your account balance is ${myBalance}`);
  }
} else {
  console.log(`Your Pin is incorrect`);
}
