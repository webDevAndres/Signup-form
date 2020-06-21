"use strict";
var $ = function(id) {
    return document.getElementById(id);
};
var joinList = function() {
    var email = $("email").value;
    var email2 = $("email2").value;
    var firstName = $("first_name").value;
    var isValid = true;

    if (email == "") {
        $("email_error").firstChild.nodeValue = "Please enter an email address.";
        isValid = false;
    }
    else {
        $("email_error").firstChild.nodeValue = "";
    }

    if (email2 == "") {
        $("email_error2").firstChild.nodeValue = "Please enter an email address.";
        isValid = false;
    } else if (email != email2) {
        $("email_error2").firstChild.nodeValue = "This does not match the first entry.";
        isValid = false;
    }
    else {
        $("email_error2").firstChild.nodeValue = "";
    }

    if (firstName == "") {
        $("first_name_error").firstChild.nodeValue = "Please enter a name.";
        isValid = false;
    }
    else {
        $("first_name_error").firstChild.nodeValue = "";
    }

    if (isValid) {
        $("email_form").submit();
    }
    
};

window.onload = function() {
    $("sign_up").onclick = joinList;
    $("email").focus();
};