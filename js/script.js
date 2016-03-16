function showVideo() {
killPlayers();
    document.getElementById('video').style.display = 'block';
}
function showOrder() {
    document.getElementById('order').style.display = 'block';
}
function hideVideo() {
    document.getElementById('video').style.display = 'none';
}
function hideOrder() {
    document.getElementById('order').style.display = 'none';
}
function scrollTo(target){
	     hideVideo();
         hideOrder();
        var speed = 1000;
        var top = $('#' + target).offset().top;
        $('html, body').animate({scrollTop: top}, speed);
        return false;
    };
function killPlayers ()  {
	var iframes = document.getElementsByTagName('iframe');
	for (var i=0; i<iframes.length; i++) {
	var playerURL = document.getElementsByTagName('iframe')[i].src;
	document.getElementsByTagName('iframe')[i].src = playerURL;
          }
}
