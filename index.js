
function test(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let code = document.getElementById("phone_code").value;
  let number = document.getElementById("number").value;
  let eemail=document.getElementById("for_email")
 let phonee= document.getElementById("for_number")
  if(email.length<=0  && number.length<=0)
  {
eemail.innerText="PLEASE ENTER YOUR EMAIL"
phonee.innerText="PLEASE ENTER YOUR PHONE-NUMBER"
  }
  
  else if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && number.length == 10) {
    const data = {
      email,
      code,
      number,
    };
    localStorage.setItem("details", JSON.stringify(data));
    window.location.href = "Nextpage.html";
  } 
 
  
  else if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && number.length !== 10) {
    document.getElementById("for_email").innerText = "";
    document.getElementById("for_number").innerText =
      "PLEASE CHECK THE INPUT NUMBER";
  } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && number.length == 10) {
    document.getElementById("for_number").innerText = "";
   
  eemail.innerText =
      "PLEASE CHECK THE INPUT EMAIL";
  }

  else if(email.length<=0 )
  {
    eemail.innerText="PLEASE ENTER YOUR EMAIL"

  }
  else if(number.length<=0)
  {
    phonee.innerText="PLEASE ENTER YOUR NUMBER"
  }
}
