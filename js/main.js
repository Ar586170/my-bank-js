document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit-btn").addEventListener("click", function() {
        const emailField = document.getElementById("user-email");
        const email = emailField.value;
        const passwordField = document.getElementById("user-password");
        const password = passwordField.value;

        if (email === "ar586170@gmail.com" && password === "rafi") {
            window.location.href = "bank.html";
        } 
        else {
            alert("Please enter a valid password");
        }
    });
});


//deposite

document.getElementById("deposite-btn").addEventListener("click", function() {
    const depositField = document.getElementById("deposite-amount");
    const currentDepositAmountString = depositField.value;
    const currentDepositAmount = parseFloat(currentDepositAmountString);

    const depositeTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositeTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const newDepositAmount = previousDepositTotal + currentDepositAmount;
    depositeTotalElement.innerText = newDepositAmount;

    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);

    const currentBalanceTotal = previousBalanceTotal + currentDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = "";
});



//withdraw
document.getElementById("withdraw-btn").addEventListener("click", function() {
    const withdrawField = document.getElementById("withdraw-amount");
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawTotalElement = document.getElementById("withdraw-total-amount");
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount; // Subtracting withdrawal amount from the balance
    balanceTotalElement.innerText = newBalanceTotal;

    withdrawField.value = "";
});