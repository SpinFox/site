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
}
function killPlayers ()  {
	var iframes = document.getElementsByTagName('iframe');
	for (var i=0; i<iframes.length; i++) {
	var playerURL = document.getElementsByTagName('iframe')[i].src;
	document.getElementsByTagName('iframe')[i].src = playerURL;
          }
}
window.onload = function() {
    var idList = [
        '0a56c41d-f335-43a0-8ea3-830247fa695c',
        '82163cd5-1de0-44fe-960f-c9f35431dfc6',
        'ee1cc145-46b1-4045-a3ab-b0cf721c6410',
        'ffc76225-dec2-46d4-8ce9-e20576b63ed0',
        '32615e77-6d98-40f3-a974-85ab79638470'
    ];
    var player = document.getElementById('top-player');
    function randomIndex() {
        var index = Math.floor(Math.random() * (idList.length - 1));
        var oldIndex = window.localStorage.getItem('idIndex');
        if (oldIndex != index) {
            window.localStorage.setItem('idIndex', index);
            return index;
        } else {
            randomIndex();
        }
    }
    var currentId = idList[randomIndex()];
    var url = '//media.megavisor.com/player/embed?' + currentId + '#allowFlash=true&allowFullscreen=true&allowAnaglyph=false&autoPlay=true&zoom=false';
    player.setAttribute('src', url);
};
