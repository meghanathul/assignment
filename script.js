function validation() {
    var name = document.getElementById('name').value;
    var lname = document.getElementById('lname').value;
    var age = document.getElementById('age').value;
    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var copass = document.getElementById('con-password').value;

    //check name
    if (name == "") {
        document.getElementById('data').innerHTML = "** Please fill the name field."
        return false;
    }
    if ((name.length <= 2) || (name.length > 20)) {
        document.getElementById('data').innerHTML = "** name schould greater than 2."
        return false;
    }

    //check lname
    if (lname == '') {
        document.getElementById('data1').innerHTML = "** Please fill the lastname field."

        return false;

    }
    //check age
    if (age == '') {
        document.getElementById('data2').innerHTML = "** Please fill the age field."
        return false;
    }
    if (age.length <= 18) {
        document.getElementById('data2').innerHTML = "** user age schould greater than 18."
        return false;
    }

    // check mobile
    if (mobile == '') {
        document.getElementById('data3').innerHTML = "** Please fill the mobile field."
        return false;
    }
    if (isNaN(mobile)) {
        document.getElementById('data3').innerHTML = "** user must write digit only."
        return false;
    }
    if (mobile.length != 10) {
        document.getElementById('data3').innerHTML = "** mobile no schoud be 10 digit."
        return false;
    }
    //check email
    if (email == '') {
        document.getElementById('data4').innerHTML = "** Please fill the email field."
        return false;
    }
    if (email.indexOf('@') <= 0) {
        document.getElementById('data4').innerHTML = "**'@' schoud be there in email "
        return false;
    }
    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('data4').innerHTML = "** Invalid email"
        return false;
    }
    //check password
    if (password == '') {
        document.getElementById('data5').innerHTML = "** Please fill the password field."
        return false;
    }

    if ((password.length <= 5) || (password.length > 20)) {

        document.getElementById('data5').innerHTML = "** password schould greater than 5."
        return false;
    }
    if (password != copass) {
        document.getElementById('data6').innerHTML = "** password is not same"
        return false;
    }
    if (copass == '') {
        document.getElementById('data6').innerHTML = "** Please fill the confirm password field."
        return false;

    }
    else {
        return true
    }
}

//for reset input field
function reset() {
    var inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '')
}