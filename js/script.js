let errorMsg = document.getElementById("error-msg")
let button = document.getElementById("submit")

button.addEventListener("click", (event) => {
    validateForm(event)
})

function validate_nationality(nationality)
{
    if (nationality === "" || nationality === "select-one")
    {
        errorMsg.innerHTML = "Nationality must be filled!"
        return false
    }
    return true
}

function validate_dob(dob)
{
    let today = new Date().toLocaleDateString()
    let dob_day = new Date(dob).toLocaleDateString()

    if (dob === "")
    {
        errorMsg.innerHTML = "Date of birth must be filled!"
        return false
    }
    else if (dob_day > today)
    {
        errorMsg.innerHTML = "Check the date again!"
        return false
    }
    return true
}

function validate_password(password, confirm_password)
{
    if (password === "")
    {
        errorMsg.innerHTML = "Password must be filled!"
        return false
    }
    else if (password.length < 8)
    {
        errorMsg.innerHTML = "Password must be at least 8 characters!"
        return false
    }
    else if (confirm_password === "")
    {
        errorMsg.innerHTML = "Confirmation password must be filled!"
        return false
    }
    else if (password !== confirm_password)
    {
        errorMsg.innerHTML = "Password confirmation is not match with the password!"
        return false
    }
    return true
}

function validate_username(username)
{
    if (username === "")
    {
        errorMsg.innerHTML = "Username must be filled!"
        return false
    }
    return true
}

function validate_email(email)
{
    if (email === "")
    {
        errorMsg.innerHTML = "Email must be filled!"
        return false
    }
    else
    {
        let at = email.indexOf("@")
        let dot = email.indexOf(".")
        if (at < 1 || dot < 1)
        {
            errorMsg.innerHTML = "Email must contains '@' and '.'!"
            return false
        }
    }
    return true
}

function validate_name(name)
{
    if (name === "")
    {
        errorMsg.innerHTML = "Name must be filled!"
        return false
    }
    return true
}

function validateForm(event)
{
    let name = document.forms["register-form"]["input-name"].value
    let email = document.forms["register-form"]["input-email"].value
    let username = document.forms["register-form"]["input-username"].value
    let password = document.forms["register-form"]["input-password"].value
    let confirm_password = document.forms["register-form"]["input-confirm-password"].value
    let date_of_birth = document.forms["register-form"]["input-birth-date"].value
    let nationality = document.forms["register-form"]["input-nationality"].value

    if (!validate_name(name) || !validate_email(email) || !validate_username(username) || !validate_password(password, confirm_password) || !validate_dob(date_of_birth) || !validate_nationality(nationality))
    {
        event.preventDefault()
        return
    }
    else
    {
        window.location.replace("./index.html");
        alert("Registration is successful!")
        errorMsg.innerHTML = ""
        event.preventDefault()
        return
    }
}