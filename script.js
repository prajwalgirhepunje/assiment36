const InputElement=document.getElementById("Input-text");
const OutputGreting = document.getElementById("gretting");
const Savebutn =document.getElementById("save-btn");
const Logoutbtn =document.getElementById("logout-btn");
   function Savebtn(){
        let UserName = InputElement.value;
        if(!UserName){
            alert("Please enter your Name");
            return ;
        }
        localStorage.setItem('Name', UserName);
    OutputGreting.innerText= `Hello ${UserName}`;
    Savebutn.style.display="none";
    InputElement.style.display="none";
   }
   let GetName= localStorage.getItem("Name");
   if(GetName){
      OutputGreting.innerText=`Hello ${GetName}`;
      Savebutn.style.display="none";
      InputElement.style.display="none";
   }
   function Logoutbutn(){
      localStorage.removeItem("Name");
      window.location.reload();
   }