package ru.chat.websocket.permissions;

import org.springframework.stereotype.Component;
import ru.chat.auth.AuthData;

@Component
public class Admin {
    public static final String login = "admin";
    public static final String password = "pass";
    public static final String token = "4i903idfljksjkiuhewu8932okwdk";
    public static final String key = "fdjsjwqjkdskdsklsdakj";
    public static final String name = "Администратор";

    public AuthData validateHttp(String login, String password) {
        AuthData authData = new AuthData();

        authData.setRole("admin");
        authData.setStatus(isAllowed(login, password));
        if (!authData.isStatus()) {
            return authData;
        }
        authData.setName(name);
        authData.setToken(token);
        return authData;
    }

    // здесь можно проводить валидацию
    public boolean isAllowed(String login, String password) {
        if (login == null || login.isEmpty() || password == null || password.isEmpty())
            return false;

        return login.equals(Admin.login) && password.equals(Admin.password);
    }
}
