$(function () {
    var app = {
        init: function () {
            console.log("init.....");
            this.render();
            this.bind();
        },
        render: function () {
            this.$file = $("#file");
            this.$txt = $("#txt");
            this.$submit = $("#submit");
        },
        bind: function () {
            this.$submit.on("click", $.proxy(this._go, { name: 111, age: 23 }))
        },
        _go: function (e) {
            $.ajax({
                url: "/list",
                method: "post",
                data: {
                    file: $("#file").val(),
                    txt: $("#txt").val()
                }
            })
                .done(data => {
                    console.log(data);
                })
                .fail(err => {
                    console.log(err);
                })
        }
    }

    app.init();

})