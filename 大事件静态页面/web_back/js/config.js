var user = {
    login: function (options) {
        $.ajax({
            type: 'post',
            url: baseurl.LOGIN_IN,
            data: options.data,
            success: options.callback
        });
    },
    logout: function (options) {

    }
};