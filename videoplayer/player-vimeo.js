$(document).ready(function () {
    var myWindow = $("#window"),
        undo = $("#undo");

    undo.kendoButton();
    undo.click(function () {
        myWindow.data("kendoWindow").open();
        undo.fadeOut();
    });

    function onClose() {
        undo.fadeIn();
    }

    myWindow.kendoWindow({
        width: "670px",
        title: "Curtis1000 - NOP Commerce",
        visible: false,
        actions: [
            "Pin",
            "Minimize",
            "Close"
        ],
        close: onClose
    }).data("kendoWindow").center().open();    

    var player = new Vimeo.Player('made-in-ny');

    player.setVolume(0.2);

    player.on('play', function () {
        console.log('played the video!');
    });
});