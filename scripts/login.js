create_Login_Listener = function () {
    var login_Button = document.getElementById("login-button");
    var create_Button = document.getElementById("create-button");
    var show_Button = document.getElementById("show-button");
    var passwordVisible = false;
    const visible_image = "/static/img/edited_visible.png";
    const non_visible_image = "/static/img/visibility-off.png";
    login_Button.addEventListener("click", function (e) {
        if (e.target.id == "login-button")
        {
            console.log("Pressed Login button");
            let uname = document.querySelector("#user-Name-Input").value;
            let upass = document.querySelector("#user-Password-Input").value;
            console.log("User Name",uname," Password",upass);
            if (name_validation(uname) && password_validation(upass))
            {
                console.log("Username Passed Validation");
                console.log("Password Passed Validation");
                if (!checkUser(uname,upass)){
                    console.log("Username NOT found in DB!");
                }
                else
                {
                    //Continue to login to site/page
                    console.log("USER NOW LOGGED IN as",uname);
                }
            }
            else {
                console.log("Username & Password Failed Validation");
            }
            
        }
        
    });

    create_Button.addEventListener("click", function (e){
        if (e.target.id=="create-button")
        {
            //Some action
            console.log("Create User Button Pressed");

            let uname = document.querySelector("#user-Name-Input").value;
            let upass = document.querySelector("#user-Password-Input").value;
            console.log("User Name",uname," Password",upass);
            if (name_validation(uname) && password_validation(upass))
            {
                console.log("Selected New Username, Passed Validation");
                console.log("Secected New Password, Passed Validation");
                if (!checkUser(uname,upass)) {
                    createNewUser(uname,upass);
                }
                else {
                    console.log("Username already Created");
                }
                
            }
            else {
                console.log("Selected New Username & Password Failed Validation");
            }
        }

    });
    show_Button.addEventListener("click", function (e) {
        if (e.target.id == "show-button")
        {
            let pass_input = document.querySelector("#user-Password-Input");
            let pass_button = document.querySelector("#show-button");
            if (passwordVisible) {
                pass_button.style.backgroundImage = "url('"+visible_image+"')";
                passwordVisible = false;
            }
            else {
                pass_button.style.backgroundImage = "url('"+non_visible_image+"')";
                passwordVisible = true;
            }
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
            let currentCharacter = unvalidated[index];
            if (!isNaN(currentCharacter)){
                //Is a number
                console.log(currentCharacter," is a Number!");
                currentNums = currentNums + 1;
            }
            else if (currentCharacter == currentCharacter.toUpperCase()) {
                //Is uppercase
                console.log(currentCharacter," is Uppercase!");
                currentUppers = currentUppers + 1;
            }
            else {
                //Lowercase Character
                console.log("Lowercase Character",currentCharacter);
            } 

            
        }
        if ( (currentNums >= minNumber) && (currentUppers >= minUpperCase) ){
            validated = true;
            console.log(currentNums,">=",minNumber," & ",currentUppers,">=",minUpperCase," SO VALIDATED INPUT!");
            return validated;
        }
        else {
            console.log(currentNums,">=",minNumber," & ",currentUppers,">=",minUpperCase," NOT VALIDATED INPUT!");
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
            let currentCharacter = unvalidated[index];
            //var numberCheck = String.isInteger(currentCharacter);
            if (!isNaN(currentCharacter)){
                //Is a number
                console.log(currentCharacter," is a Number!");
                currentNums = currentNums + 1;
            }
            else if (currentCharacter == currentCharacter.toUpperCase()) {
                //Is uppercase
                console.log(currentCharacter," is Uppercase!");
                currentUppers = currentUppers + 1;
            }
            else {
                //Lowercase Character
                console.log("Lowercase Character",currentCharacter);
            } 

            
        }

        if ( (currentNums >= minNumber) && (currentUppers >= minUpperCase) ){
            validated = true;
            console.log(currentNums,">=",minNumber," & ",currentUppers,">=",minUpperCase," SO VALIDATED INPUT!");
            return validated;
        }
        else {
            console.log(currentNums,">=",minNumber," & ",currentUppers,">=",minUpperCase," NOT VALIDATED INPUT!");
        }
    }
    else {
        return validated;
    }
};