let token = null;

$(document).ready(function() {

    $("#adminAuth").click(function (e) {
        e.preventDefault();
        let login = $("#admInputLogin").val();
        let pass = $("#admInputPass").val();

        if (login.length === 0 && pass.length === 0) {
            alert("Заполните необходимые поля");
            return;
        }

        tryAuth("admin", {login: login, password: pass});
    });

    $("#userAuth").click(function (e) {
        e.preventDefault();
        let userName = $("#userName").val();
        let userEmail = $("#userEmail").val();
        let userPhone = $("#userPhone").val();

        if (userName.length === 0 || (userEmail.length === 0 && userPhone.length === 0)) {
            alert("Заполните поля");
            return ;
        }
        tryAuth("user", {name: userName, email: userEmail, phone: userPhone});
    });

    function tryAuth (type, obj) {
        $.ajax({
            url: domen + "/auth/" + type,
            type: 'GET',
            data: obj,
            contentType: 'application/json',
            success: function(response) {
                if (response.status === false) {
                    alert("Ошибка авторизации. Проверьте введенные данные");
                    return ;
                }
                role = type;
                token = response.token;
                isAuth = true;
                hideSignup();
                socketReconnection(response);
            }
        });
    }

    $("#closeForm1").click(function (e) {
        e.preventDefault();
        hideSignup();
    });
    $("#closeForm2").click(function (e) {
        e.preventDefault();
        hideSignup();
    });
});

function generateCookie() {
    let phone = getCookie("phone");
    let email = getCookie("email");
    console.log(typeof(email));

    $("#userName").val(getCookie("name"));
    $("#userEmail").val(email == null || email == "" || email == "null" ? "" : email);
    $("#userPhone").val(phone > 0 ? phone : "");
}