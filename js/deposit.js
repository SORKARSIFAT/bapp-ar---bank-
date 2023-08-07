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