let apiUrl = 'http://18.188.201.179:8080';
let loggedInUser;
// retrieve the currently logged in user from the back end
async function getLoggedInUser() {
    let userId = sessionStorage.getItem('user-id');
    if (userId) {
        let resp = await fetch(apiUrl+'/users/'+userId, {
            headers:new Headers({
                'Auth':sessionStorage.getItem('shop')
            })
        });
        if (resp.ok) {
            loggedInUser = await resp.json();
        }
    }
}
function logOut() {
    loggedInUser = null;
    sessionStorage.clear();
    showLoggedOutDisplay();
    if (window.location.href.includes('mypets.html')) {
        window.location.href='./AdminPage.html';
    }
}
