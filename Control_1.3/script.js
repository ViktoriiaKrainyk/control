document.addEventListener('DOMContentLoaded', function() {

var content = document.getElementById('content');
var colors = ['#ff5733', '#fff333', '#ffac33', '#33a2ff', '#ff3333', '#4933ff', '#40c51c', '#c51c71', '#b81cc5'];

setInterval(func, 1000);

var createBalls = document.getElementById('allBalls');
var allBalls = +createBalls.innerHTML;
var removeBalls = document.getElementById('deleteBall');
var delBall = +removeBalls.innerHTML;
var result = document.getElementById('ballsOnField');


function func(){
	createBalls.innerHTML = ++allBalls;
	var ball = document.createElement('div');
		ball.innerHTML = 'S';
		content.appendChild(ball);
		ball.className = 'balls';
		ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
		ball.style.left = Math.floor(Math.random() * (parseInt(getComputedStyle(content).width) - parseInt(getComputedStyle(ball).width)) + 1) + 'px';
		ball.style.top = Math.floor(Math.random() * (parseInt(getComputedStyle(content).height) - parseInt(getComputedStyle(ball).height)) + 1) + 'px';
		ball.classList.add('anime');
};

content.addEventListener('click', handler);

function handler(event) {
	var targetEvent = event.target;
	if (targetEvent.classList == 'balls anime'){
		targetEvent.classList.add('by');
		targetEvent.addEventListener('transitionend', function(){
			content.removeChild(targetEvent);
			removeBalls.innerHTML = ++delBall;
	});
	};
};


// function handler(event) {
// 	var targetEvent = event.target;
// 	var targetIf = targetEvent.classList =='balls anime';
// 	targetEvent.classList == 'balls anime' && targetEvent.classList.add('by');
// 	targetEvent.classList == 'balls anime' && targetEvent.addEventListener('transitionend', function(){
// 		content.removeChild(targetEvent);
// 		removeBalls.innerHTML = ++delBall;
// 	});
// };

setInterval(function() {
	result.innerHTML = allBalls - delBall;
});
});
