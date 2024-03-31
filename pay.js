function goLogin()
           {
            window.location.href="login.html"
           }
function getusername(){
    const UName=localStorage.getItem("CustomerName");
      
    document.getElementById("cxname").textContent="Welcome "+UName;
    }


function gopay(){
     
    window.location.href="paymentcomplete.html";
    // console.log(tpay," tpay");
}

function randomCno(){

    return Math.floor(1000000000000 + Math.random()*9000000000000);
}
function randompay(){

    return Math.floor(1000 + Math.random()*9000);
}

function tabledata(){
    document.getElementById("consNum1").textContent=randomCno();
    document.getElementById("consNum2").textContent=randomCno();
    document.getElementById("consNum3").textContent=randomCno();
    // generate due
    const payment1=randompay();
    const payment2=randompay();
    const payment3=randompay();
    document.getElementById("DueAmount1").textContent=payment1+" Rs";
    document.getElementById("DueAmount2").textContent=payment2+" Rs";
    document.getElementById("DueAmount3").textContent=payment3+" Rs";
    //pay
    document.getElementById("pay1").textContent=payment1+" Rs";
    document.getElementById("pay2").textContent=payment2+" Rs";
    document.getElementById("pay3").textContent=payment3+" Rs";


    // calculate total pay whenever checkbox is clicked
    function updatepayable(){
        var currentTotal=0;

        

        for(var i=1;i<=3;i++){
            var checkbox=document.getElementById("checkbox"+i);
            if(checkbox.checked){
                currentTotal+=parseInt(document.getElementById("pay"+i).textContent)
            }
        }
        localStorage.setItem("TotalPayable",currentTotal);
        document.getElementById("TotalPayable").textContent="TotalPayable: "+ currentTotal +"Rs" ;

        
    }
    
    
    // add event to know checked or unchecked
        for(var i=1;i<=3;i++){
            var checkbox=document.getElementById("checkbox"+i);
            checkbox.addEventListener("click",updatepayable);
        }
    
    
    
    


}

// card selection

function cardselection(){
    window.location.href="cardselection.html";
}


function gohome()
       {
        window.location.href="home.html"
       }

    function pricedetails(){   
        var price=localStorage.getItem("TotalPayable");
        element=document.getElementsByClassName("amount");
        for(var i=0; i<element.length;i++){
            element[i].textContent=price;
        }
        document.getElementById("finalamount").textContent="Total Payable: "+ price + "Rs";


        var radioButtons = document.getElementsByName("card");
        for (var i = 0; i < radioButtons.length; i++) {
            radioButtons[i].addEventListener("change", function() {
            var selectedCard = this.value; 
            localStorage.setItem("radio", selectedCard); 
        });
       
        }
    }


    

//payment and reciept download


    // function cardtype(){

    //     var radiobutton=document.getElementsByName("card");
        
    //     var cardno="";
    //     for(var i=0; i<radiobutton.length;i++){

    //         if(radiobutton[i].checked){

    //             cardno=radiobutton[i]
    //             break;
    //         }
    //     }
    //     console.log(cardno);
    //     document.getElementById("typeofcard").textContent="Pay by" + cardno ;
    // }


    function cardtype() {
        var cc=localStorage.getItem("radio");

        document.getElementById("typeofcard").textContent = "Pay by " + cc;

        var totalpayable=localStorage.getItem("TotalPayable");
        document.getElementById("Totalpayable").textContent="Payment Amount INR " + totalpayable +"Rs";
    }

// maximum number limit
    function maxlengthcheck(object){
        var maxLength=16;
        if(object.value.length>maxLength){
            object.value=object.value.slice(0,maxLength);
        }

        document.getElementById("maxlimitmessage").textContent=object.value.length===maxLength ? "maximum length exceeded!":"";
    }