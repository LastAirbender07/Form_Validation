function func()
{
    var i
    let x = document.forms["login"]["mail"].value
    let y = document.forms["login"]["pwd"].value

    if(!x.includes('@'))
    {
        window.alert("Enter a valid E-mail Id")
        return false
    }

    if(y.length < 8)
    {
        window.alert("Invalid Password")
        return false
    }

    else 
    {
        display = "Login Successful!!!";
        window.alert(display)
        return true
    }
};