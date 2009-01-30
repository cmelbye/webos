var Kernel = Class.create({
    initialize: function() {
        this.version = "webOS 0.1.0";
    },
    init: function() {
        var ui = new UI();
        var loading = ui.loading({
            centered: true,
            content: "Loading " + this.version + "...",
            width: '200px',
            height: '100px',
            spinner: true,
            accent: true
        })
        $('webos').insert( loading );
        var e = setTimeout(
            "Effect.DropOut('" + ui.options.id + "');" +
            "Effect.BlindDown('taskbar');", 5000);
    }
});
