import anime from 'animejs/lib/anime.es.js';

let qwe = 1500;
function asaf(){
anime({
	targets: '.elem',
  	translateX: 250,
  	loop: true,
  	direction: 'alternate',
  	duration: function(elem, i) {
    	return 1500 + (i * 500);
  }
});
}
document.getElementById('test').onclick = asaf;
