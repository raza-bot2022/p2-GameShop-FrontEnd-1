let apiUrl = 'http://13.57.234.28:9090';
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
    window.location.href = 'index.html';
}

       
        
   
