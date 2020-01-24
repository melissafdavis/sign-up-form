const button = document.querySelector('button');
//const emailDiv = document.querySelector('.email');


button.addEventListener('click', validateFirstName);
button.addEventListener('click', validateLastName);
button.addEventListener('click', validateEmail);
button.addEventListener('click', validatePassword);


function validateFirstName(e) {
  const firstName = document.querySelector('.first-name');
  //const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(!firstName.value){
    //errorMessage();
    console.log('First Name cannot be empty');
  } else{
    //successMessage();
    console.log('good first name');
  }
  e.preventDefault();
}

function validateLastName(e) {
  const lastName = document.querySelector('.last-name');
  //const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(!lastName.value){
    //errorMessage();
    console.log('Last Name cannot be empty');
  } else{
    //successMessage();
    console.log('good last name');
  }
  e.preventDefault();
}


    function validateEmail(e) {
      const email = document.querySelector('.email');
      const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      if(!email.value || !re.test(email.value)){
        //errorMessage();
        console.log('bad email');
      } else{
        //successMessage();
        console.log('thanks');
      }
      e.preventDefault();
    }

    function validatePassword(e) {
      const password = document.querySelector('.password');
      const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      if(!password.value || !re.test(password.value)){
        //errorMessage();
        console.log('bad password');
      } else{
        //successMessage();
        console.log('thanks');
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
    



  
