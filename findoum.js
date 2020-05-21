/*
	findoum.js
	(c) spv, gplv3
*/

var i = 0;
var OUMArray = new Array(0);

checkVersion = function () {
    var agent = window.navigator.userAgent;
    start = agent.indexOf( "OS " );
    if((agent.indexOf("iPhone") > -1 || agent.indexOf("iPad") > -1) && start > -1){
		return agent.substr(start + 3).split(" ")[0].split( "_").join( "." );
    }
    else {
		start = agent.indexOf("OS X ");
		return agent.substr(start + 5).split(" ")[0].split("_").join( "." ).replace(")","");
	}
    return 0;
}
// thx ngoclt on github gists. modified

function findOUMInterval(i) {
	OUMArray[Math.pow(2,i) - 1] = 0;
	try {
		localStorage.setItem("count", OUMArray.toString().length);
		return 0;
	}
	catch (e) {
		return 1;
	}
}

function findOUM() {
	for (i = 16; i < 32; i++) {
		console.log("[*] trying " + i);
		if (findOUMInterval(i) == 1) {
			break;
		}
	}
}

if (localStorage.getItem("count") != undefined) {
	console.log("[*] found refresh at " + i);
	if (localStorage.getItem("done") == undefined) {
		console.log("[*] first refresh at " + i);
		localStorage.setItem("refresh", localStorage.getItem("count"));
		localStorage.setItem("done", 0);
	}
	console.log(localStorage.getItem("count") * 2);
	document.write("[*] continuing. i = " + Math.log2(localStorage.getItem("count") * 2));
	for (i = Math.floor(Math.log2(localStorage.getItem("count") * 2)); i < 32; i++) {
		localStorage.count = localStorage.getItem("count") * 2;
		if (findOUMInterval(i) == 1) {
			break;
		}
	}
	alert("[*] iOS version is " + checkVersion() + "\n" + "[*] refresh = " + localStorage.getItem("refresh") + "\n[*] OUM = " + localStorage.getItem("count"));
	localStorage.removeItem("count");
	localStorage.removeItem("done");
}
