var cambio = document.getElementById('cambio')
var amiga = document.getElementById('amiga')
var carro = document.getElementById('carro')
var iconA = document.querySelector('.fa-credit-card')
var iconB = document.querySelector('.fa-building-columns')
var iconC = document.querySelector('.fa-wallet')
var cDetails = document.querySelector('.card-details')



function dofun(){
    cambio.style.color = "skyblue";
    amiga.style.color = "#444";
    carro.style.color = "#444";
    iconA.style.color = "skyblue";
    iconB.style.color = "#aaa";
    iconC.style.color = "#aaa";
    cDetails.style.display = "block";
}
// function dofunA(){
// cambio.style.color = "#444";
// amiga.style.color = "skyblue";
// carro.style.color = "#444";
// iconA.style.color = "#aaa";
// iconB.style.color = "skyblue";
// iconC.style.color = "#aaa";
// cDetails.style.display = "none";
// }

let cNumber = document.getElementById('number');
cNumber.addEventListener('keyup', function(e){
    let num = cNumber.value;

    let newValue = '';
    num = num.replace(/\s/g, '');
    for(var i = 0; i < num.length; i++){
        if (i%4 == 0 && i > 0) newValue = newValue.concat('');   
        newValue = newValue.concat(num[i]);
        cNumber.value = newValue;     
    }
   

    let ccNum = document.getElementById('c-number')
if(num.length<16){
    ccNum.style.border = "1px solid red"
}
else{
    ccNum.style.border="1px solid greenyyellow"
}
});

let eDate = document.getElementById('e-date');
eDate.addEventListener('keyup',function( e ){
    
    let newInput = eDate.Value;

    if(e.which !== 8){
        var numChars = e.target.value.length;
        if(numChars == 2){
            var thisVal = e.target.value;
            thisVal += '/';
            e.target.value = thisVal;
            console.log(thisVal.length)
        }
    }
    if(newInput.length<5){
        eDate.style.border="1px solid red";
    }
    else{
        eDate.style.border="1px solid greenyellow";
    }
});

let cvv =document.getElementById('cvv')
cvv.addEventListener('keyup', function( e ){

    let soy = cvv.value;
    let cvvBox = document.getElementById('cvv-box');
    if(soy.length<3){
        cvvBox.style.border="1px solid red"
    }
    else{
        cvvBox.style.border="1px solid greenyellow"
    }
});
