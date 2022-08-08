
getLoggedInUser().then(setup);

function setup() {
    if (!loggedInUser) {
        let loginBtn = document.getElementById('login');
        loginBtn.addEventListener('click', login);
    } else {
        window.location.href='./index.html';
    }
}
async function login() {
    let msgSpan = document.getElementById('msg');
    msgSpan.innerText='';
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let credentials = {username:username, passwd:password};
    let resp = await fetch(apiUrl+'/auth', {
        method:'POST',
        body:JSON.stringify(credentials),
        headers:new Headers({
            'Content-Type': 'application/json',
        })
    });
    if (resp.status===200) {
        loggedInUser = await resp.json();
        if (loggedInUser) {
            sessionStorage.setItem('shop', resp.headers.get('Auth'));
            sessionStorage.setItem('user-id', loggedInUser.user_id);
            sessionStorage.setItem('user-name', loggedInUser.username); 
            if (loggedInUser['role_id'].role_id == 2) {
                console.log('Admin on board')
                window.location.href='AdminPage.html'
            } else {
                window.location.href = 'homePage.html';
            }
        }
    } else {
        msgSpan.innerText = 'Incorrect credentials. Please try again.';
    }
}

