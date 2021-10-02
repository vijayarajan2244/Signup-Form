user = document.getElementById("userName");
pin = document.getElementById("password");
em = document.getElementById("email");

user,pin,em.addEventListener("change",login);


function login(){

    //Username
    person = document.getElementById("userName");
    pass = document.getElementById("password");
    email = document.getElementById("email");

    if(person.value == null || person.value.length<2 || person.value.length>20 ){
        document.getElementById("alertUserName").innerHTML="* Please Enter Your Name";
        document.getElementById("alertUserName").style.marginTop="10px";

        document.getElementById("alertPassword").innerHTML="* Please Enter Valid Password";
        document.getElementById("alertPassword").style.marginTop="10px";

        document.getElementById("alertEmail").innerHTML="* Please Enter Valid Email";
        document.getElementById("alertEmail").style.marginTop="10px";

        email.focus();
        em.focus();
        em.style.border="2px green solid";
        email.style.border="2px red solid";

        person.focus();
        user.focus();
        user.style.border="2px green solid";
        person.style.border="2px red solid";

        pass.focus();
        pin.focus();
        pin.style.border="2px green solid";
        pass.style.border="2px red solid";
      
        return false;
    }

    else{
        person.style.border="2px green solid";
        document.getElementById("alertUserName").innerHTML="";
        person.focus();
    }

    //Email
    if(email.value == null || email.value.length<2){
        document.getElementById("alertEmail").innerHTML="* Please Enter Valid Email";
        document.getElementById("alertEmail").style.marginTop="10px";
        email.focus();
        email.style.border="2px red solid";
        em.focus();
        em.style.border="2px green solid";
        return false;

    }
    else{
        document.getElementById("alertEmail").innerHTML="";
        email.style.border="2px green solid";
        email.focus();
    }


    //Password    
    if(pass.value == null || pass.value.length<2 || pass.value.length>20){
        document.getElementById("alertPassword").innerHTML="* Please Enter Valid Password";
        document.getElementById("alertPassword").style.marginTop="10px";


        pass.style.border="2px red solid";
        pass.focus();

        //pin.focus();
        //pin.style.border="2px green solid";

        return false;
    }

    else{
        pass.style.border="2px green solid";
        document.getElementById("alertPassword").innerHTML="";
        pass.focus();
    }  
}
