const button = document.querySelector('button');
const firstName = document.querySelector('.first-name');
const firstNameMsg = document.getElementById('first-name');
const lastName = document.querySelector('.last-name');
const lastNameMsg = document.getElementById('last-name');
const email = document.querySelector('.email');
const emailMsg = document.getElementById('email');
const password = document.querySelector('.password');
const passwordMsg = document.getElementById('password');


button.addEventListener('click', formValidation);

function formValidation(e){
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  //First Name
  if(!firstName.value){
          errorMessage(firstName, firstNameMsg);
  } else{
          successMessage(firstName, firstNameMsg);
      }
  //Last Name
  if(!lastName.value){
          errorMessage(lastName, lastNameMsg);
  } else{
          successMessage(lastName, lastNameMsg);
        }
  //Email
  if(!email.value){
          errorMessage(email, emailMsg);
  }else if(!re.test(email.value)){
          emailMessage(email, emailMsg);
          console.log('bad email');
  }
  else{
          successMessage(email, emailMsg);
        }
  //Password
  if(!password.value){
          errorMessage(password, passwordMsg);
  } else{
          successMessage(password, passwordMsg);   
          }
  
  e.preventDefault();
}

    function errorMessage(input, message){
      message.style.color = "hsl(0, 100%, 74%)";
      message.style.font = "italic";
      input.style.border = " solid hsl(0, 100%, 74%)";
      input.placeholder = "";
      input.style.background = "url(/images/icon-error.svg) no-repeat top right";
   }

   function successMessage(input, message){
    message.style.color = 'white';
    input.style.border = " solid green";
    input.style.background = "";
   }

   function emailMessage(input, message){
    message.innerText = "Looks like this isn't an email"
    message.style.color = "hsl(0, 100%, 74%)";
    message.style.font = "italic";
    input.value = "";
    input.className = "invalidEmail";
    input.style.border = " solid hsl(0, 100%, 74%)";
    input.placeholder = "email@example/com";
    input.style.background = "url(/images/icon-error.svg) no-repeat top right";
   }
    



  
