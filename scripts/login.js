create_Login_Listener = function () {
    var login_Button = document.getElementById("login-button");
    var show_Button = document.getElementById("show-button");

    login_Button.addEventListener("click", function (e) {
        if (e.target.id == "login-button")
        {
            console.log("Pressed Login button");
            let uname = document.querySelector("#user-Name-Input").value;
            let upass = document.querySelector("#user-Password-Input").value;
            console.log("User Name",uname," Password",upass);
            //name_validation(uname);
            password_validation(upass);
        }
        
    });
    show_Button.addEventListener("click", function (e) {
        if (e.target.id == "show-button")
        {
            let pass_input = document.querySelector("#user-Password-Input");
            if (pass_input.type == "password") {
                pass_input.type = "text";
            }
            else 
            {
                pass_input.type = "password";
            }
            
            console.log("Toggled Show Password");
            
        }
        
    });
    
};

name_validation = function (name) {
    let unvalidated = name.toString();
    console.log("This is the unvalidated string:",unvalidated);
    let minLength = 12;
    let minUpperCase = 0;
    let minNumber = 0;

    var validated = false;
    var currentNums = 0;
    var currentUppers = 0;

    if (unvalidated.length >= minLength ) {
        for (index=0; index<unvalidated.length; index++) {
            let currentCharacter = unvalidated.charAt[index];
            if (Number.isInteger(currentCharacter)){
                //Is a number
                currentNums += 1;
            }
            else if (currentCharacter == currentCharacter.toUpperCase()) {
                //Is uppercase
                currentUppers += 1;
            }
            else {
                //Unknown
            } 

            
        }
        if ( (currentNums >= minNumber) && (currentUppers >= minUpperCase) ){
            validated = true;
            console.log(currentNums,">=",minNumber," & ",currentUppers,">=",minUpperCase," SO VALIDATED INPUT!");
            return validated;
        }
    }
    else {
        return validated;
    }
    
};

password_validation = function(password)
{
    let unvalidated = password.toString();
    console.log("This is the unvalidated string:",unvalidated);
    let minLength = 12;
    let minUpperCase = 2;
    let minNumber = 2;

    var validated = false;
    var currentNums = 0;
    var currentUppers = 0;

    if (unvalidated.length >= minLength ) {
        for (index=0; index<unvalidated.length; index++) {
            let currentCharacter = unvalidated.charAt[index];
            if (Number.isInteger(currentCharacter)){
                //Is a number
                currentNums += 1;
            }
            else if (currentCharacter == currentCharacter.toUpperCase()) {
                //Is uppercase
                currentUppers += 1;
            }
            else {
                //Unknown
            } 

            
        }
        if ( (currentNums >= minNumber) && (currentUppers >= minUpperCase) ){
            validated = true;
            console.log(currentNums,">=",minNumber," & ",currentUppers,">=",minUpperCase," SO VALIDATED INPUT!");
            return validated;
        }
    }
    else {
        return validated;
    }
};