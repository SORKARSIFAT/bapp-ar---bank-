// 1  add event with the deposit btn
// 2 get the deposit amount from the withdraw input filed
// 2.5 also make sure to convert input into a number by using parseFloat()
// 3 get previous deposit total
// 4 calculate total deposit  amount
// 5 set total  deposit amount
// 6 get the previous balance total 
// 6.5 set the new balance total 

document.getElementById("btn-deposit").addEventListener("click",function(){
    const depositFiled = document.getElementById("deposit-field");
    const newDepositAmountString = depositFiled.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalElement = document.getElementById("deposit-total");
    const  previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal =parseFloat(previousDepositTotalString);


    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    // get ballance current total 
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // calculate current total balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    // set the balance total 
    balanceTotalElement.innerText = currentBalanceTotal;

    
    depositTotalElement.innerText = currentDepositTotal;




    
// clear the deposit field  
depositFiled.value = "";


    

     

})