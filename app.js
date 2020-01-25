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
  if(!firstName.value){
          errorMessage(firstName, firstNameMsg);
  } else{
          successMessage(firstName, firstNameMsg);
      }
  if(!lastName.value){
          errorMessage(lastName, lastNameMsg);
  } else{
          successMessage(lastName, lastNameMsg);
        }
  if(!email.value){
          errorMessage(email, emailMsg);
  }else{
          successMessage(email, emailMsg);
        }
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
    



  
