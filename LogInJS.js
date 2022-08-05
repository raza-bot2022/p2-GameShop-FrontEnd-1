
getLoggedInUser().then(setup);
function setup() {
    if (!loggedInUser) {
        let loginBtn = document.getElementById('loginBtn');
        loginBtn.addEventListener('click', login);
    } else {
        window.location.href='./index.html';
    }
}
async function login() {
    let msgSpan = document.getElementById('msg');
    msgSpan.innerText='';
    let username = document.getElementById('usernameInput').value;
    let password = document.getElementById('passwordInput').value;
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
            sessionStorage.setItem('game', resp.headers.get('Auth'));
            sessionStorage.setItem('game-id', loggedInUser.user_id);
            if (loggedInUser['role_id'].role_id == 2) {
                console.log('Admin on board')
                //window.location.href=‘./admin.html’
            } else {
                msgSpan.innerText = 'Successfully';
                window.location.href = './index.html';
            }
        }
    } else {
        msgSpan.innerText = 'Incorrect credentials. Please try again.';
    }
}