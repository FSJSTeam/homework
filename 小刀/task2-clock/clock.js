function setTime() {
	var _time = new Date();

	var s_hour = document.getElementById('hour');
	var s_min = document.getElementById('min');
	var s_sec = document.getElementById('sec');

	h = _time.getHours();
	m = _time.getMinutes();
	s = _time.getSeconds();

	if (h < 10) h = "0" + h;

	if (m < 10) m = "0" + m;

	if (s < 10) s = "0" + s;


	s_hour.innerHTML = h;
	s_min.innerHTML = m;
	s_sec.innerHTML = s;

	Time = setTimeout(setTime, 1000);
}

function changeWidth() {
	var w_div = document.getElementById('anim');
	var wid = w_div.offsetWidth;
	if (wid >= 1920) {
		w_div.style.width = 0 + "px";
	} else {
		wid += 10;
		w_div.style.width = wid + "px";
	}



	Width = setTimeout(changeWidth, 10);
}

window.onload = function() {
		Time = setTimeout(setTime, 1000);

		Width = setTimeout(changeWidth, 10);
	} //用onload加载速度很慢