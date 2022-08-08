let apiUrl = 'http://13.57.234.28:9090';
let loggedInUser;
let resp;
// retrieve the currently logged in user from the back end
async function getLoggedInUser() {
    let userId = sessionStorage.getItem('user-id');
    if (userId) {
            resp = await fetch(apiUrl+'/users/'+userId, {
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
    window.location.href = 'logIn.html';
}

async function getUser() {
    // let userId = sessionStorage.getItem('user_id'); 
    // let resp = await fetch(apiUrl+'/users/'+userId, {
    //         headers:new Headers({
    //             'Auth':sessionStorage.getItem('shop')
    //         })
    //     });
    //     if (resp.ok) {
    //         loggedInUser = await resp.json();
    document.getElementById("username").innerHTML = resp.username;
            
        
   
}
