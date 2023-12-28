const button= document.getElementById('btn');
const logingArea=document.getElementById('loging-area');
const show = document.getElementById('show');
const bankAra = document.getElementById('bankAra');
const depositBtn= document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');
const withdrawDisplay= document.getElementById('withdrawDisplay');



button.addEventListener('click',function(){
    logingArea.style.display='none'
    bankAra.style.opacity='1';
    
    
})
//  deposit

depositBtn.addEventListener('click',function(){

   const depositAmount = document.getElementById('depositAmount').value;
   const depositNumer = parseFloat(depositAmount);

 udpadateSpanText('currentDeposit',depositNumer);
 udpadateSpanText('currentBalace',depositNumer);
 document.getElementById('depositAmount').value='';

});
withdrawBtn.addEventListener('click',function(){
const withdrawNumber =getInputNumber('withdrawAmout');
console.log(withdrawNumber)
}) 

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amoutNumber = parseFloat(amount);
    return amoutNumber;

}



function udpadateSpanText(id,depositNumer){
    
    const current = document.getElementById(id).innerText;
    const currentNumner = parseFloat(current);
    const totalAmount = depositNumer + currentNumner;
    document.getElementById(id).innerText =totalAmount;

}




















