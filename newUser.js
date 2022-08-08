let api = 'http://13.57.234.28:9090'
let registeredUser = null; 
function createUser() {
  let createNewUser = document.getElementById("create"); 
  createNewUser.addEventListener('click', register); 
}

async function register() {
  let username = document.getElementById("username").value; 
  let password = document.getElementById("password").value; 
  let passwordr = document.getElementById("passwordr").value;
  // passwordr.addEventListener('focusout', function (password, passwordr) {
  //   if (password != passwordr) {
  //     window.alert("password does not much. Please reenter the password"); 
  //   }
  // })

  let user = {
    "user_id": 1,
     "role_id": {
        "role_id": 1,
        "role_name": "User",
        "role_description": "Game Player"
    },
    username: username, 
    passwd: password
  }

  let resp = await fetch(api+'/users', {
        method:'POST',
        body:JSON.stringify(user),
        headers:new Headers({
            'Content-Type': 'application/json',
        })
    });
    if (resp.status===201) {
        registeredUser = await resp.json();
      if (registeredUser) {
        window.location.href = './logIn.html';
      } else {
        window.location.href = './createUser.html'; 
      }  
    } else {
        msgSpan.innerText = 'Failed to connect.';
    }
}

createUser(); 




