$(function(){
	var content;
	var db = firebase.database().ref(location.search.slice(1,location.search.length));
	db.once('value').then(function(snapshot) {
  	var content = snapshot.val();
  	$("#content").text(content);
  });
});