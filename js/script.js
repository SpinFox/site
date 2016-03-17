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
        'a6520c28-c716-4b21-9ec5-c54f6de793b7',
        'bb196f48-41f1-425c-b5fe-01f6c480e129',
        'db8e498d-4e75-4878-8d32-ac834ebed57e',
        'abe9dbdd-4ffa-4d7e-bf96-604f152ca6dc'
    ];
    var player = document.getElementById('top-player');
    function randomIndex() {
        var index = Math.floor(Math.random() * idList.length);
        var oldIndex = window.localStorage.getItem('idIndex');
        if (oldIndex && oldIndex != index) {
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
