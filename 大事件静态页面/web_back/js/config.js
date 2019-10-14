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
        $.ajax({
            type : 'post',
            url : baseurl.LOGIN_OUT,
            success : options.callback
        });
    },
    getuser : function (options) {
        $.ajax({
            type : 'get',
            url : baseurl.GET_USER,
            success : options.callback
        });
    },
    getinfo : function (options) {
        $.ajax({
            type : 'get',
            url : baseurl.GET_USER,
            success : options.callback
        });
    },
    changeuser : function (options) {
        $.ajax({
            type : 'post',
            url : baseurl.CHANGE_USER,
            success : options.callback
        });
    }
};