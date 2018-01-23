package app.util;

import java.util.Arrays;
import spark.Request;

public class Util {
    private static String[] ext = {".png", ".woff", ".js", ".css", ".ico"};

    public static boolean isStaticResourceRequest(Request request) {
        return Arrays.stream(ext).anyMatch(e -> request.url().contains(e));
    }

    public static String getEnv() {
        String env = System.getenv("ACTIVE_ENV");
        if (env == null || env.isEmpty()) {
            return "development";
        } else {
            return env;
        }
    }
}
