function signup() {
    var name = document.getElementById("Name").value
    var mail = document.getElementById("email").value
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    if (name == "" && mail == "" && username == "" && password == "") {
        alert("Fill all mendatory Fields")
    } else {
        obj = {
            Name: name,
            Email: mail,
            Uname: username,
            Pass: password
        }
        var array = JSON.parse(localStorage.getItem("login_info"))
        if (array == null) {
            array = []
        }
        array.push(obj)
        localStorage.setItem("login_info", JSON.stringify(array))
        console.log(obj);
        window.location.href="login.html"
    }
}