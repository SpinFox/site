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
        '5a3819bd-efc2-4376-9ff4-1a0900a2b41d',
        'ffc76225-dec2-46d4-8ce9-e20576b63ed0',
        '32615e77-6d98-40f3-a974-85ab79638470',
        '4347ee2d-d3c3-465a-80c8-e342f660685f',
        'b386dbbb-ff43-49ee-944f-b63d4838bfb1',
        '0f6a533a-22f4-4216-b8b1-acf7daf4615a',
        '4382b589-875b-4ecb-97e8-8f5d3c5ac3bb',
        '11405b47-e1b1-4dce-ad85-46b18d13cda5',
        'd5023cee-b031-4b6b-93d3-6b69586e0347',
    ];
    var player = document.getElementById('top-player');
    function randomIndex() {
        var index = Math.floor(Math.random() * (idList.length - 1));
        var oldIndex = window.localStorage.getItem('idIndex');
        if (oldIndex != index) {
        //    window.localStorage.setItem('idIndex', index);
            return index;
        } else {
            randomIndex();
        }
    }
    var currentId = idList[randomIndex()];
    var url = '//media.megavisor.com/player/embed?' + currentId + '#allowFlash=true&allowFullscreen=true&allowAnaglyph=false&autoPlay=true&zoom=false';
    player.setAttribute('src', url);
};
