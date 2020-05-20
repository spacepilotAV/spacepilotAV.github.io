/*
	findoum.js
	(c) spv, gplv3
*/

var i = 0;
var a = new Array(0);
var b;

function findOUMInterval(i) {
	a[Math.pow(2,i) - 1] = 0;
	try {
		localStorage.c = a.toString().length;
		return 0;
	}
	catch (e) {
		alert("error for 2^x x = " + i);
		return 1;
	}
}

function findOUM() {
	for (i = 16; i < 32; i++) {
		if (findOUMInterval(i) == 1) {
			break;
		}
	}
}

if (localStorage.getItem("c") != undefined) {
	alert(localStorage.getItem("c") + 1);
	console.log(Math.pow(2, Math.floor(Math.log2(localStorage.getItem("c"))) + 1););
	for (i = Math.floor(Math.log2(localStorage.getItem("c"))) + 1; i < 32; i++) {
		localStorage.c = Math.pow(2, Math.floor(Math.log2(localStorage.getItem("c"))) + 1);
		if (findOUMInterval(i) == 1) {
			break;
		}
	}
	localStorage.removeItem("c");
}
