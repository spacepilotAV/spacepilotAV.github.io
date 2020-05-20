/*
	findoum.js
	(c) spv, gplv3
*/

var i = 0;
var a = new Array(0);
var b;

checkVersion = function () {
    var agent = window.navigator.userAgent
    start = agent.indexOf( "OS " );
    if( ( agent.indexOf( "iPhone" ) > -1 || agent.indexOf( "iPad" ) > -1 ) && start > -1 ){
		return agent.substr(start + 3).split(" ")[0].split( "_").join( "." );
    }
    else {
		start = agent.indexOf( "OS X " );
		return agent.substr(start + 5).split(" ")[0].split("_").join( "." ).replace(")","");
	}
    return 0;
}
// thx ngoclt on github gists. modified

function findOUMInterval(i) {
	a[Math.pow(2,i) - 1] = 0;
	try {
		localStorage.c = a.toString().length;
		return 0;
	}
	catch (e) {
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
	if (localStorage.getItem("d") == undefined) {
		localStorage.setItem("refresh", localStorage.getItem("c"));
		localStorage.setItem("d", 0);
	}
	console.log(localStorage.getItem("c") * 2);
	document.write("[*] continuing. i = " + Math.log2(localStorage.getItem("c") * 2));
	for (i = Math.floor(Math.log2(localStorage.getItem("c") * 2)); i < 32; i++) {
		localStorage.c = localStorage.getItem("c") * 2;
		if (findOUMInterval(i) == 1) {
			break;
		}
	}
	alert("[*] iOS version is " + checkVersion() + "\n" + "[*] refresh = " + localStorage.getItem("refresh") + "\n[*] OUM = " + localStorage.getItem("c"));
	localStorage.removeItem("c");
	localStorage.removeItem("d");
}
