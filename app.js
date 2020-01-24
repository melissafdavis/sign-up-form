const button = document.querySelector('button');
const emailDiv = document.querySelector('.email');


button.addEventListener('click', validateEntry);


    function validateEntry(e) {
      
      const email = document.querySelector('.email-input');
      const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    
      if(!email.value || !re.test(email.value)){
        errorMessage();
      } else{
        successMessage();
      }
      
      e.preventDefault();

      
    }

    function errorMessage(){
      var node= document.createElement('div');
      node.className = "errorMessage";
      var errorMessage = document.createTextNode("Please enter a valid email address");
      node.appendChild(errorMessage);
      var parent = emailDiv;
      parent.appendChild(node);

      setTimeout(function(){ parent.removeChild(node) }, 3000);
    }

    function successMessage(){
      var node= document.createElement('div');
      node.className = "successMessage";
      var errorMessage = document.createTextNode("Thank you! Check your email to confirm your email subscription.");
      node.appendChild(errorMessage);
      var parent = emailDiv;
      parent.appendChild(node);

      setTimeout(function(){ parent.removeChild(node) }, 5000);
      
    }
    



  
