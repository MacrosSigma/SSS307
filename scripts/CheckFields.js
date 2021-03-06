function CheckFields()
{
    var form = document.Register;
    if (form.username.value == "") {
        alert("Username field cannot be empty!");
        form.username.focus();
        return false;
    }
    if (form.password.value == "") {
        alert("Password field cannot be empty!");
        form.password.focus();
        return false;
    }
    if (form.password.value != "") {
        var rules = /^(?=.*\d)(?=.*[A-Z]*[a-z])\w{6,}$/;
        if (!rules.test(form.password.value)) {
            alert("Password doesn't match the rules.");
            form.password.focus();
            return false;
        }
    }
    if (form.emailaddress.value == "") {
        alert("Emailaddress field cannot be empty!");
        form.emailaddress.focus();
        return false;
    }
    if (form.emailaddress.value != "") {
        var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(form.emailaddress.value)) {
            alert("Please provide a valid email address");
            form.emailaddress.focus();
            return false;
        }
    }
    if (form.firstname.value == "") {
        alert("Firstname field cannot be empty!");
        form.firstname.focus();
        return false;
    }
    if (form.lastname.value == "") {
        alert("Lastname field cannot be empty!");
        form.lastname.focus();
        return false;
    }
    return true;
}