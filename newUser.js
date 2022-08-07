let apiUrl = 'http://13.57.234.28:9090'
let registeredUser = null; 
function createUser() {
  let createNewUser = document.getElementById("create"); 
  createNewUser.addEventListener('click', register); 
}

async function register() {
  let username = document.getElementById("username"); 
  let password = document.getElementById("password"); 
  let passwordr = document.getElementById("passwordr");
  passwordr.addEventListener('focusout', function (password, passwordr) {
    if (password != passwordr) {
      window.alert("password does not much. Please reenter the password"); 
      passwordr.focus(); 
    }
  })

  let user = {
    "user_id": 1,
    "role_id": 1, 
    username: username, 
    passwd: password
  }

  let resp = await fetch(apiUrl+'/users', {
        method:'POST',
        body:JSON.stringify(credentials),
        headers:new Headers({
            'Content-Type': 'application/json',
        })
    });
    if (resp.status===200) {
        registeredUser = await resp.json();
      if (registeredUser) {
        window.location.href = './logIn.html';
      } else {
        window.location.href = './createUser.html'; 
      }  
    } else {
        msgSpan.innerText = 'Incorrect credentials. Please try again.';
    }
}


