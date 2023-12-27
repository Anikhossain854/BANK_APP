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
depositBtn.addEventListener('click',function(){

 const depositAmount = document.getElementById('depositAmount').value;
 const depositNumer = parseFloat(depositAmount);
   
//  deposit
    const currentDeposit = document.getElementById('currentDeposit').innerText;
    const currentNumner = parseFloat(currentDeposit);
    const totalDeposit = depositNumer + currentNumner;
     document.getElementById('currentDeposit').innerText = totalDeposit;
  
    //   TotalBalace
    const totalBalace = document.getElementById('totalBalace').innerText;
    const totalBalaceNumner = parseFloat(totalBalace);
    const newBalace = depositNumer + totalBalaceNumner;
    document.getElementById('totalBalace').innerText =newBalace;
    



  document.getElementById('depositAmount').value='';




});

// withdraw

withdrawBtn.addEventListener('click',function(){

 const withdraNumber = getInputNumber('withdrawAmout')


})


function getInputNumber(id){
    const withdrawAmout = document.getElementById(id).value;
    const  withdraNumber  = parseFloat(withdrawAmout);
    // console.log(withdraNumber)
    return withdraNumber;

}




















