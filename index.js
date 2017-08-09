$(function(){
    var firedb = firebase.database().ref();
    var key = firebase.database().ref().push().key;
    document.querySelectorAll("#name")[0].textContent = "write.it/?" + key;
    document.querySelectorAll("#name")[0].href = "/?" + key;
    $("#publish").click(function(){
        var updates = {};
        updates[key] = $("#editor").text();
        firedb.update(updates);
    });
});