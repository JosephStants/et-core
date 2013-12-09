exports.Debug = Debug = 'false'; // **** Saurabh ::  changed to make node compatible ****
exports.debuglevel = debuglevel=0;
exports.widMasterKey = widMasterKey = "widmaster_";
exports.test_results =  test_results = {};
exports.potentialwid =  potentialwid = 0;


if(!window){var window=global}

// if(typeof localStorage === "undefined"){
var localStore = function(){

	var json = {};

	function clear(){
		this.json = {};
	}


	function push(key, val){
		this.json[key] = val;
	}

	function get(key){
		return this.json[key];
	}

	function remove(key){
		delete this.json[key];
	}

	return {"clear":clear,"json":json,"push":push,"remove":remove,"get":get}

}();
localStore.clear(); 

// };

if(typeof executethis === "undefined"){
  var executethis = exports.executethis;
};

if(typeof window === "undefined"){
  var window = global;
};

function bootprocess(){
	testclearstorage();
	if(exports.environment === 'local'){
		clearLocalStorage();
	}
	test_results = {};
	//testAddWids();
	//displayAllWids();
}

function execute_function (myfunc) {
	if (typeof window[myfunc] == 'function') {
 	   //alert("I found the function...let's go run it!");
 	   // result = window[myfunc]();
 	   result = window[myfunc]();
 	   // LM: added the return result for unit testing.
 	   // It was not returning before...
 	   // I can take it out if code starts breaking...but 
 	   // I think it will be ok.
 	   return result;
	} else {
		alert('I could not find your function');
		}
}

function debugon(){
	Debug='true';
}
function debugoff(){
	Debug='false';
}

function executelist(functionlist) {
	if (!functionlist) {functionlist=["addk, addi"]}
	//
	for (var fn in functionlist) {
		if (typeof window[fn] == 'function') {
			window[fn]();
			} 
		else {
			alert('I could not find your function');
		}
	}
	verifysummary("resultwid");
}

exports.executetest = executetest = function executetest(myfunc, inputparameters, outwidname, inputwidname){
	
//	if (typeof window[myfunc] == 'function') {
    //Create the function call from function name and parameter.
    //var funcCall = "";
    if (inputparameters === undefined) {inputparameters={}}
    //	var myparameters = JSON.stringify(inputparameters)
    //if (inputparameters) {funcCall = myfunc + "(" + myparameters + ");"}
    //	else {funcCall = myfunc + "();"};
    proxyprinttodiv('executeTest - myfunc',myfunc, 99);
    //var output = eval(funcCall); //Call the function


    if (myfunc == "executethis") {
    	myfunc = "execute";
	    }
	
    myfunc = window[myfunc];
    proxyprinttodiv('executeTest - myfunc II',myfunc, 1);
    proxyprinttodiv('type of fn', (myfunc instanceof Function),1);

    proxyprinttodiv('executeTest - inputparameters',inputparameters,99);
    var output = executethis(inputparameters, myfunc);	// added
    //var output={"a":"b"};
    proxyprinttodiv('results of executeTest =>', output, 99);
    if ((outwidname!==undefined) && (outwidname!= "")) {
    	proxyprinttodiv('results of executeTest outwidname', outwidname, 99);
    	addtolocal(outwidname, output)
    	};
// 	}
// else
// 	{
// 	alert('I could not find your function -- test');
// 	}

    if ((inputwidname!==undefined) && (inputwidname != "")) {addtolocal(inputwidname, inputparameters)}
    if(outwidname && outwidname !== undefined) { proxyprinttodiv('execute - outwidname',outwidname); }
    if(output && output !== undefined) { proxyprinttodiv('execute - output',output); }
};


exports.verifysummary = verifysummary = function verifysummary(resultwid) {
	var olddebug = Debug;
	var testfailflag = "false";
	Debug = olddebug;
	if (resultwid === undefined) {
		proxyprinttodiv('Test Failed: testname:','test undefined');
		}
	else {
		proxyprinttodiv('verifysummary resultwid',resultwid,99);
		var resultsobject = getfromlocal({'wid': resultwid});
		proxyprinttodiv('verifysummary',resultsobject,99);
		if (resultsobject !== undefined) {
			for (result in resultsobject) {
				if (resultsobject[result] == "FAIL" || resultsobject[result] != "PASS") {
					testfailflag='true';
					proxyprinttodiv('Test Failed: testname:',result, 5);
					}
				}
			} 
		}
	if (testfailflag=='false') {
		return {resultwid:'PASS'}
	} else {
		return {resultwid:'FAIL'}
	}
}

exports.logverify = logverify =  function logverify(testname, resultwid, parmwid1, parameterobj1, parmwid2, parameterobj2){
	var resultsobject = {};
	olddebug=Debug;
	Debug=olddebug;
	if (resultwid === undefined) {resultwid = "resultwid"};
	if (testname === undefined) {testname = "defaulttest"};
					proxyprinttodiv('logverify - parmwid1',parmwid1);	
					proxyprinttodiv('logverify - parmwid2',parmwid2);	
	if (parmwid1.length!=0) {parameterobj1 = getfromlocal({'wid': parmwid1})};
	if (parmwid2.length!=0) {parameterobj2 = getfromlocal({'wid': parmwid2})};
					proxyprinttodiv('logverify - parameterobj1',parameterobj1);
					proxyprinttodiv('logverify - parameterobj2',parameterobj2);
	// Hold the object of scrutiny in a string....
	var temp = JSON.stringify(parameterobj1);
	var result = compareJSON(parameterobj1, parameterobj2);
	// Restore the memory object with the original data
	localStore.push("widmaster_" + parmwid1, JSON.parse(temp));

					proxyprinttodiv('logverify - result',result);
					proxyprinttodiv('logverify - result.length',Object.keys(result).length);
	var testresults = "PASS";
	if (Object.keys(result).length !== 0) {testresults="FAIL"}
					proxyprinttodiv('logverify - testresults',testresults);
					proxyprinttodiv('logverify - resultwid',resultwid);
	resultsobject = getfromlocal({'wid': resultwid});
					proxyprinttodiv('logverify  - resultsobject',resultsobject);
					proxyprinttodiv('logverify - testname',testname);
	resultsobject[resultwid] = testresults;
	resultsobject[resultwid+"_diff"] = result;
					proxyprinttodiv('logverify  - resultsobject',resultsobject);
	addtolocal(resultwid, resultsobject);

	test_results[resultwid]=testresults;
	addtolocal("test_results", test_results);
					proxyprinttodiv('logverify  - resultsobject',resultsobject);
	Debug=olddebug;
	var temp = {};
	temp[resultwid] = testresults;
	return temp;
	// displayallthetestresutls(getfromlocal({'wid': resultwid}));
	// var tempobj = getfromlocal({'wid':testname});
	// if (tempobj === undefined) {
	// 	tempobj = {};
	// }
	// tempobj[resultwid] = testresults;
	// addtolocal(testname, tempobj);
}

function logcompare (paramwid) {
	var paramwid1 = paramwid['wid1'];
	var paramwid2 = paramwid['wid2'];
					proxyprinttodiv('logcompare paramwid1' , paramwid1);
					proxyprinttodiv('logcompare paramwid2' , paramwid2);
	
	return compareJSON(getfromlocal({'wid': paramwid1}), getfromlocal({'wid': paramwid2}));
	};

function logcomparemeek (paramwid) {
	var paramwid1 = paramwid['wid1'];
	var paramwid2 = paramwid['wid2'];
					proxyprinttodiv('logcompare paramwid1' , paramwid1);
					proxyprinttodiv('logcompare paramwid2' , paramwid2);
	
	var data = compareJSONmeek(getfromlocal({'wid':paramwid1 }), getfromlocal({'wid': paramwid2}));
	// this was to exclude Extra_Fields
	// if (data['Extra_Fields']) {
	// 	// ignore any extra parameters in the paramwid2
	// 	delete data['Extra_Fields'];
	// }
	return data;
	};

function compareJSONmeek(obj1, obj2) { 
	var ret = {}; 
					proxyprinttodiv('compareJSONmeek obj1' , obj1);
					proxyprinttodiv('compareJSONmeek obj2' , obj2);
	for(var i in obj2) { 
		if(obj1[i]===undefined) {
							proxyprinttodiv('compareJSONmeek obj2 i' , i);
			ret[i]="true"}
		}
	for(var i in obj1) { 
		if(obj2[i]===undefined) {
							proxyprinttodiv('compareJSONmeek obj1 i' , i);
			ret[i]="true"}
		}
		//if(!obj1.hasOwnProperty(i)) { // this version does not check for the values of the properties
			//ret[i] = obj2[i]; 
			// start taking out the parameters of the verification object			
		//}
		//delete obj1[i];
		//}
	//} 
	// If there are any parameters left in the verify object(obj1), add it to the results
	//if (getObjectSize(obj1) > 0) {
	//	ret['Extra_Fields'] = obj1;
	//}
	//return ret; 
	return ret; 
}

function compareJSON(obj1, obj2) { 
	var ret = {}; 
	for(var i in obj2) { 
		if(!obj1.hasOwnProperty(i) || obj2[i] !== obj1[i]) {
			// to get ct7 to pass
			if (typeof obj2[i] === 'object' && typeof obj1[i] === 'object') {
				// TODO: compare these objects
			}
			else {
				ret[i] = obj2[i];
			} 
			// start taking out the parameters of the verification object			
		} 
		delete obj1[i];
	} 
	// If there are any parameters left in the verify object(obj1), add it to the results
	if (getObjectSize(obj1) > 0) {
		ret['Extra_Fields'] = obj1;
	}
	return ret; 
}

var rerun_test_seq = "";
var did_all_pass = 1;

// logic to add things to Local storage
exports.addtolocal = addtolocal = function addtolocal(widName, widobject) {
	if (!widobject) {widobject={}}
	if (widName) {
	localStore.push(widMasterKey+widName, widobject);
	}
};

// logic to get things from Local storage
exports.getfromlocal = getfromlocal = function getfromlocal(inputWidgetObject) {
 	var output = {};
 				proxyprinttodiv('getfromlocal',inputWidgetObject,99);
	if(inputWidgetObject["wid"]) {
	var widKey = inputWidgetObject["wid"].toLowerCase();
	output = localStore.get(widMasterKey + widKey);
	if (output == null) {output = {};}
	}
	proxyprinttodiv('getfromlocal output',output,99);
	//var x = localStore.get(inputWidgetObject);
	//if (!x) {x={}};
	return output
};

// logic to clear things from Local storage
exports.testclearstorage = testclearstorage = function testclearstorage(){
	widMasterKey = "widmaster_";
	potentialwid = 0;
	localStore.clear();
};


// exports.addtolocal = addtolocal = function addtolocal(widName, widobject) {
// 	addToLocalStorage((widMasterKey + widName), widobject);
// }

// exports.getfromlocal = getfromlocal = function getfromlocal(inputWidgetObject) {
// 	var output = {};
// 		if(inputWidgetObject["wid"]) {
// 			var widKey = inputWidgetObject["wid"].toLowerCase();

// 			output = getFromLocalStorage(widMasterKey + widKey);
// 			if (output == null) {output = {};}
// 		}

// 	return output;
// }//End of getfromlocal function	


// exports.testclearstorage = window.testclearstorage = function testclearstorage(){
// 	widMasterKey = "widmaster_";
// 	localStore.clear();
// 	potentialwid = 0;
// }
