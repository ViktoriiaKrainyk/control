console.log('-------------task_1-----------------');
var arr = [5, 2, 5, 3, 7, 15];

var newArr = arr.reduce(function(init, next, index){
	var num;
	init.length ? num = init[index - 1] + next : num = next;
	init.push(num);
	return init;
}, []).map(function(elem, curr) {
	return elem * 2;
});

console.log(newArr);

console.log('----------task_2-------------');
function result(arr, callback) {
	var mass = [];
	for(var i = 0; i < arr.length; i++) {
		// if(callback(arr[i])) {
		// 	mass.push('Yes');
		// }else {
		// 	mass.push('No');
		// };
		callback(arr[i]) ? mass.push('Yes') : mass.push('No');
	}
	return mass;
};

var some = result(newArr, function(elem) {
	return elem > 24;
});
console.log(some);

console.log('----------task_3-------------');
// var arr = [4, 5, 2, 9, 15];
// function filter(arr, callback) {
// 	var mass = [];
// 	for(var i = 0; i < arr.length; i++) {
// 		callback(arr[i]) && mass.push(arr[i]);
// 	}
// 	return mass;
// }

// var v = filter(arr, function(elem){
// 	return elem > 4;
// });
// console.log(v);
