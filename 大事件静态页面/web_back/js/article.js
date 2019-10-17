var article = {
    getCate : function (options) {
        $.ajax({
            type : 'get',
            url : baseurl.GET_CATE,
            success : options.callback
        });
    },
    addCate : function (options) {
        $.ajax({
            type : 'post',
            url : baseurl.ADD_CATE,
            data : options.data,
            success : options.callback
        });
    },
    changeCate : function (options) {
        $.ajax({
            type : 'post',
            url : baseurl.CHANGE_CATE,
            data : options.data,
            success : options.callback
        });
    },
    delCate : function (options) {
        $.ajax({
            type : 'post',
            url : baseurl.DEL_CATE,
            data : options.data,
            success : options.callback
        });
    }
}