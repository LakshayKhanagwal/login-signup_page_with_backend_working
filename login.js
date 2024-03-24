function login() {
    var uname = document.getElementById("username").value
    var pass = document.getElementById("password").value

    if (uname == "" && pass == "") {
        alert("Enter UserName or password")
    } else {
        var array = JSON.parse(localStorage.getItem("login_info"))
        var result = array.filter(obj => {
            return (obj.Uname == uname && obj.Pass == pass)
        });
        console.log(result);
        if (result == "") {
            alert("Invalid Login Credential")
        } else {
            localStorage.setItem("user_data",JSON.stringify(result[0]))
            alert("Login Successful")
            window.location.href="home.html"
        }
    }
}