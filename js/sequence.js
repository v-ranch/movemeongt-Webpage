// Sequence1
var imgNum = 0;
var img = new Image();
var canvas = document.getElementById('mainImg');
var ctx = canvas.getContext('2d');

img.src = "./img/mainImg/logo0.png";

playSequence();

function playSequence() {
  var timer = setInterval(function() {
    if (imgNum > 64) {
      imgNum = 64;
    }

    player(imgNum);
    imgNum++;
  }, 30);
}


function player(num) {
  img.src = "./img/mainImg/logo" + num + ".png";
}

img.addEventListener('load', function(e) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.drawImage(img, 0, 0);
});
