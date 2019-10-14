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
            type: 'post',
            url: baseurl.LOGIN_OUT,
            success: options.callback
        });
    },
    getInfo: function (options) {
        $.ajax({
            url: baseurl.GET_USER,
            success: options.callback
        });
    },
    getAllInfo: function (options) {
        $.ajax({
            url: baseurl.GET_ALL_USER,
            success: options.callback
        });
    },
    edit: function (options) {
        $.ajax({
            type: 'post',
            url: baseurl.CHANGE_USER,
            data: options.data, // 获取options中的数据
            contentType: false,
            processData: false,
            success: options.callback // 获取options中的回调函数
        });
    }
};