const goose = document.querySelector('.goose');
const cactus = document.querySelector('.cactus');
let hits = 0;

document.addEventListener('keydown', function (event) {
	jump();
	hits += 1;
});


function jump() {
	if (goose.classList != 'jump') {
		goose.classList.add('jump');
	}
	setTimeout(function () {
		goose.classList.remove('jump')
	}, 500)
}

let isAlive = setInterval(function () {
	let gooseTop = parseInt(window.getComputedStyle(goose).getPropertyValue('top'));
	let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

	if (cactusLeft < 50 && cactusLeft > 0 && gooseTop >= 140) {
		alert('GAME OVER! :(' + ` Вы совершили ${hits} прыжков!`);
	}
}, 10)