

document.getElementById('login-submit').addEventListener('click', function () {

    //----- ger user email field
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // emailField.value = '';

    //----- get user paddword
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // passwordField.value = '';


    //----- check email and password
    if (userEmail == 'rakib@gmail.com' && userPassword == 'rakib') {
        // get open another page banking.html
        window.location.href = 'banking.html';
    }

})









