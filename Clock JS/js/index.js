let clock = document.querySelector('#clock');
let color = document.querySelector('#color');

const nextTime = () => {
	let time = new Date();
	let h = time.getHours();
	let m = time.getMinutes();
	let s = time.getSeconds();

	if (h.toString().length < 2) {
		h = '0' + h;
	}

	if (m.toString().length < 2) {
		m = '0' + m;
	}

	if (s.toString().length < 2) {
		s = '0' + s;
	}

	let clockSting = h + ':' + m + ':' + s;
	let colorString = '#' + h + m + s;

	clock.textContent = clockSting;
	color.textContent = colorString;

	document.body.style.background = colorString;


}
nextTime();
setInterval(nextTime, 1000);


