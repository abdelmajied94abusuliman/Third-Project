var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let arrayOfKeysAndValues = JSON.parse(localStorage.getItem('userInfo')) || [];
let obj = {};


let formLogInEvent = document.getElementById("btn-log")

formLogInEvent.onclick = function (event) {

    let valueFromEmailLog = document.getElementById("login-email").value
    console.log(valueFromEmailLog);
    let valueFromPasswordLog = document.getElementById("login-password").value
    console.log(valueFromPasswordLog);

    console.log(arrayOfKeysAndValues[0].email);
    console.log(arrayOfKeysAndValues[0].password);


    for ( i=0 ; i<arrayOfKeysAndValues.length ; i++ ){
        if (valueFromEmailLog.toUpperCase() == arrayOfKeysAndValues[i].email.toUpperCase()){
            document.getElementById("login-email-accept").style.display = 'block';
            document.getElementById("login-email-warining").style.display = 'none' ;

            if (valueFromPasswordLog == arrayOfKeysAndValues[i].password) {
                document.getElementById("login-password-accept").style.display = 'block'
                document.getElementById("login-password-warining").style.display = 'none'
                let objectUser = arrayOfKeysAndValues[i];
                localStorage.setItem('current-user', JSON.stringify(objectUser))
                window.location.href = "../landing-page/landing-page.html"
                break  
            }
            else {
                event.preventDefault()
            }
        } else {
            document.getElementById("login-password-warining").style.display = 'block' 
            document.getElementById("login-password-accept").style.display = 'none'
            document.getElementById("login-email-warining").style.display = 'block'
            document.getElementById("login-email-accept").style.display = 'none'
            console.log(false);
            event.preventDefault()

        }
    }
}

function backToSignUp() {
    window.location.href = '../sign-up-page/Signup.html'
}