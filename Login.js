function confirmpage(){  
const urlfind= new URLSearchParams(window.location.search);
const CustomerName= urlfind.get("CusName");
const MobileNumber= urlfind.get("Email");
const Fpassword= urlfind.get("Password");
const Spassword= urlfind.get("Confirm-password");
localStorage.setItem("Fpassword",Fpassword);
localStorage.setItem("CustomerName",CustomerName);


  if (Fpassword==Spassword)
     { var genUser=generateID();

      document.getElementById("DCusID").textContent= "Customer ID: " + genUser;
      document.getElementById("DCusName").textContent= "Customer Name: " + CustomerName;
        document.getElementById("DMobNo").textContent= "Email: " + MobileNumber;
            function generateID()
            {  
                return Math.floor(100000+ Math.random() *900000);

            }  
            
            localStorage.setItem("genUser",genUser);
            
           }
           else
           {
            document.getElementById("DCusName").textContent="Error Password Not matched ";
           }

         }
   function gohome()
           {
            window.location.href="register.html"
           }
      function goLogin()
           {
            window.location.href="login.html"
           }
           
           
 
function loginpage(){
    const UserID= document.getElementById("userid").value;
    const first= document.getElementById("pass").value;
   //  const second= document.getElementById("Cpass").value;


    const strongUID=localStorage.getItem("genUser");
    const strongPasssword=localStorage.getItem("Fpassword");

       if (first!==strongPasssword || strongUID!==UserID)
           {

            return alert("Invalid Entry");
            
          }
           else
           {
            //  console.log(first+second);
            window.location.href="home.html";

           }
        }
   function usernamedata(){

   }
   
   function getusername(){
      const UName=localStorage.getItem("CustomerName");

      document.getElementById("cxname").textContent="Welcome "+UName;
   }