public static string GetAntiXsrfToken() {
    string cookieToken, formToken;
    Antiery.GetTokens(null, out cookieToken, out formToken);
    var responseCookie = new HttpCookie("__AJAXAntiXsrfToken")
    {
        HttpOnly = true,
        Value = cookieToken
    };
    if(FormsAuthentication.RequireSSL && HttpContext.Current.Request.IsSecureConnecti     on)
    {
        responseCookie.Secure = true;
    }
    HttpContext.Current.Response.Cookies.Set(responseCookie);

    return formToken;
}

static void ValidateAntiXsrfToken() {
     string tokenHeader, tokenCookie;
     try
     {
        // get header token                    
        tokenHeader = HttpContext.Current.Request.Headers.Get("__RequestVerificationToken");

                // get cookie token
                var requestCookie = HttpContext.Current.Request.Cookies["__AntiXsrfToken"];
                tokenCookie = requestCookie.Value;

                AntiForgery.Validate(tokenCookie, tokenHeader);
            }
            catch
            {
                HttpContext.Current.Response.Clear();
                HttpContext.Current.Response.StatusCode = 404;
                HttpContext.Current.Response.End();
            }
}


function CallServer(baseUrl, methodName, MethodArgument, callback) {
    $.ajax({
        type: "POST",
        url: baseUrl + methodName,
        data: MethodArgument,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        headers: {'__RequestVerificationToken': $("input[name='__RequestVerificationToken']").val()
        },
        success: function (data) {
            if (callback != undefined && typeof (callback) === "function") {
                callback(data.d);
            }
        },
        error: function (data) {
            if (data.status == 401 || data.status == 403)
                window.location.href = "../Common/accessdenied";
            else if (data.status == 419) {
                displayUserMessage(commonMessage.RE_SESSIONINFO_NOT_FOUND, true);
                window.location.href = "../Common/logout";
            }
            else
                displayUserMessage(commonMessage.SERVICE_NOT_RESPONDING, true);
        }
    });