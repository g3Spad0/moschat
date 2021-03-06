package ru.chat.utils;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;

public class Time {
    public static final String format = "yyyy.MM.dd HH:mm:ss";

    public static String getFormatDate(LocalDateTime localDateTime) {
        return localDateTime == null ? null : localDateTime.format(DateTimeFormatter.ofPattern(format));
    }

    public static String getNowDate() {
        Date date = Calendar.getInstance().getTime();
        DateFormat dateFormat = new SimpleDateFormat("yyyy.MM.dd HH:mm:ss");
        return dateFormat.format(date);
    }
}
