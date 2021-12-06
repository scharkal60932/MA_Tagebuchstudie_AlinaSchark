// Name and Password from the register-form
var user = document.getElementById('userid').value;
var pw = document.getElementById('pw').value;

// storing input from register-form
function store() {
    localStorage.setItem('userid', user.value);
    localStorage.setItem('pw', pw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('userid');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedName && userPw.value == storedPw) {
        alert('Du bist erfolgreich eingeloggt.');
    }else {
        alert('Falscher Benutzername oder Passwort.');
    }
}