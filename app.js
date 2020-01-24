const button = document.querySelector('button');
//const emailDiv = document.querySelector('.email');


button.addEventListener('click', validateFirstName);
button.addEventListener('click', validateLastName);
button.addEventListener('click', validateEmail);
button.addEventListener('click', validatePassword);


function validateFirstName(e) {
  //first name input
  const firstName = document.querySelector('.first-name');
  //first name input error message
  const message = document.getElementById('first-name')

  if(!firstName.value){
    //errorMessage();
    message.style.color = "hsl(0, 100%, 74%)";
    firstName.style.border = " solid hsl(0, 100%, 74%)";
    firstName.placeholder = "";
    firstName.style.background = "url(/images/icon-error.svg) no-repeat";
    
  } else{
    //successMessage();
    message.style.color = 'white';
    firstName.style.border = " solid green";
    firstName.style.background = "";
  }
  e.preventDefault();
}

function validateLastName(e) {
  const lastName = document.querySelector('.last-name');
  const message = document.getElementById('last-name')
  if(!lastName.value){
    message.style.color = "hsl(0, 100%, 74%)";
    lastName.style.border = " solid hsl(0, 100%, 74%)";
    lastName.placeholder = "";
    lastName.style.background = "url(/images/icon-error.svg) no-repeat";
  } else{
    //successMessage();
    message.style.color = 'white';
    lastName.style.border = " solid green";
    lastName.style.background = "";
  }
  e.preventDefault();
}


    function validateEmail(e) {
      const email = document.querySelector('.email');
      const message = document.getElementById('email')
      const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      if(!email.value){
        message.style.color = "hsl(0, 100%, 74%)";
        email.style.border = " solid hsl(0, 100%, 74%)";
        email.placeholder = "";
        email.style.background = "url(/images/icon-error.svg) no-repeat";
      }else if(!re.test(email.value)){
        //needs to be a div that's added below input field
        console.log('Looks like that is not an email');
      }
      else{
        //successMessage();
        message.style.color = 'white';
        email.style.border = " solid green";
        email.style.background = "";
      }
      e.preventDefault();
    }

    function validatePassword(e) {
      const password = document.querySelector('.password');
      const message = document.getElementById('password')
      var re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

      if(!password.value){
        //errorMessage();
        message.style.color = "hsl(0, 100%, 74%)";
        password.style.border = " solid hsl(0, 100%, 74%)";
        password.placeholder = "";
        password.style.background = "url(/images/icon-error.svg) no-repeat";
      } else{
        //successMessage();
      message.style.color = 'white';
      password.style.border = " solid green";
      password.style.background = ""
      }
      
       
      
      e.preventDefault();
    }

    // function errorMessage(){
    //   var node= document.createElement('div');
    //   node.className = "errorMessage";
    //   var errorMessage = document.createTextNode("Please enter a valid email address");
    //   node.appendChild(errorMessage);
    //   var parent = emailDiv;
    //   parent.appendChild(node);

    //   setTimeout(function(){ parent.removeChild(node) }, 3000);
    // }

    // function successMessage(){
    //   var node= document.createElement('div');
    //   node.className = "successMessage";
    //   var errorMessage = document.createTextNode("Thank you! Check your email to confirm your email subscription.");
    //   node.appendChild(errorMessage);
    //   var parent = emailDiv;
    //   parent.appendChild(node);

    //   setTimeout(function(){ parent.removeChild(node) }, 5000);
      
    // }
    



  
