function clickAllowButton() {
    // TODO wait for the page to have been loaded instead of firing off
    document.getElementById("cli_login_button").click()
}

function isLoginSucessful() {
    // could wait until @ awsapps.com/start/user-consent/login-success.html
    if (document.documentElement.textContent.indexOf('Request approved') > -1) {
        console.log("Sucess! close window");
        
        // window.close(); cant do this; what else?
        // kick up an alert() to confirm so I can just hit space to close?
    }
}
console.log("(｡◕‿◕｡)ﾉ ohai");
window.addEventListener('pageshow', (event) => {
    isLoginSucessful(); // validation 
})


// TODO select profile
clickAllowButton();



