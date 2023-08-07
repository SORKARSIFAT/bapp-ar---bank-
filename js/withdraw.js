// 1  add event with the withdraw btn
// 2 get the withdraw amount from the withdraw input filed
// 2.5 also make sure to convert input into a number by using parseFloat()
// 3 get previous withdraw total
// 4 calculate total withdraw amount
// 5 set total withdraw amount
// 6 get the previous balance total 
// 6.5 set the new balance total 


// step - 1

document.getElementById("btn-withdraw").addEventListener("click",function(){

            //   step -2

const withdrawField = document.getElementById("withdraw-field");
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);

        //    step -3 
        
const withdrawTotalElement = document.getElementById("withdraw-total");
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal        = parseFloat(previousWithdrawTotalString);

       

        //  step -6

const balanceTotalElement = document.getElementById("balance-total");
const   previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //    step -8
 withdrawField.value = "";

        // if= validation 
   if(newWithdrawAmount > previousBalanceTotal){
    alert("taka nai bap");
    return;
   }

    // step -4 

const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

//  step -5 

withdrawTotalElement.innerText = currentWithdrawTotal;   

//  step -6
            //  step -6.5 



const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;     

    
})



